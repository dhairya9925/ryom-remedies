"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";

type RecaptchaRenderParams = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

declare global {
  interface Window {
    grecaptcha?: {
      render: (container: HTMLElement, params: RecaptchaRenderParams) => number;
      reset: (widgetId?: number) => void;
    };
  }
}

type SubmitState = "idle" | "submitting" | "success" | "error";

const inputClass =
  "rounded-lg border border-[#e1e3e4] bg-[#f3f4f5] px-4 py-3 outline-none transition focus:border-[#39b5a3] focus:bg-white";

export default function ContactForm() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const [scriptReady, setScriptReady] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const resetCaptcha = useCallback(() => {
    if (widgetIdRef.current !== null) {
      window.grecaptcha?.reset(widgetIdRef.current);
    }
    setRecaptchaToken("");
  }, []);

  const renderRecaptcha = useCallback(() => {
    if (!siteKey || !scriptReady || !recaptchaRef.current || !window.grecaptcha) {
      return;
    }

    if (widgetIdRef.current !== null) {
      return;
    }

    widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
      sitekey: siteKey,
      callback: (token: string) => {
        setRecaptchaToken(token);
        setSubmitState("idle");
        setMessage("");
      },
      "expired-callback": () => {
        setRecaptchaToken("");
        setSubmitState("error");
        setMessage("Human verification expired. Please try again.");
      },
      "error-callback": () => {
        setRecaptchaToken("");
        setSubmitState("error");
        setMessage("Human verification could not load. Please try again.");
      },
    });
  }, [scriptReady, siteKey]);

  useEffect(() => {
    renderRecaptcha();
  }, [renderRecaptcha]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!siteKey) {
      setSubmitState("error");
      setMessage("reCAPTCHA is not configured yet.");
      return;
    }

    if (!recaptchaToken) {
      setSubmitState("error");
      setMessage("Please complete the human verification.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitState("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          company: formData.get("company"),
          message: formData.get("message"),
          recaptchaToken,
        }),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Unable to submit the form.");
      }

      form.reset();
      resetCaptcha();
      setSubmitState("success");
      setMessage(result.message || "Thanks, your message has been received.");
    } catch (error) {
      resetCaptcha();
      setSubmitState("error");
      setMessage(error instanceof Error ? error.message : "Unable to submit the form.");
    }
  }

  return (
    <>
      {siteKey && (
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
          onLoad={() => setScriptReady(true)}
          onReady={() => setScriptReady(true)}
        />
      )}

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <input className={inputClass} name="name" placeholder="Your name" required type="text" />
          <input
            className={inputClass}
            name="email"
            placeholder="Email address"
            required
            type="email"
          />
          <input className={inputClass} name="phone" placeholder="Phone" type="tel" />
          <input className={inputClass} name="company" placeholder="Company Name" type="text" />
        </div>
        <textarea
          className="min-h-36 rounded-lg border border-[#e1e3e4] bg-[#f3f4f5] px-4 py-3 outline-none transition focus:border-[#39b5a3] focus:bg-white"
          name="message"
          placeholder="Write a message"
          required
        />

        <div className="min-h-[78px]">
          {siteKey ? (
            <div ref={recaptchaRef} />
          ) : (
            <p className="rounded-lg border border-[#f1d28c] bg-[#fff8e1] px-4 py-3 text-sm font-semibold text-[#7a5200]">
              Add NEXT_PUBLIC_RECAPTCHA_SITE_KEY to enable human verification.
            </p>
          )}
        </div>

        {message && (
          <p
            className={
              submitState === "success"
                ? "text-sm font-semibold text-[#2d9f90]"
                : "text-sm font-semibold text-[#b42318]"
            }
            role="status"
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={submitState === "submitting"}
          className="inline-flex w-fit rounded-lg bg-[#F39517] px-6 py-3 text-sm font-bold text-[#173f39] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#d9820e] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        >
          {submitState === "submitting" ? "Sending..." : "Send message"}
        </button>
      </form>
    </>
  );
}
