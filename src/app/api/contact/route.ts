import { NextResponse, type NextRequest } from "next/server";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  company?: unknown;
  message?: unknown;
  recaptchaToken?: unknown;
};

type RecaptchaVerifyResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

function valueToString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function jsonError(message: string, status: number) {
  return NextResponse.json({ message }, { status });
}

export async function POST(request: NextRequest) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    return jsonError("reCAPTCHA secret key is not configured.", 500);
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonError("Invalid form submission.", 400);
  }

  const name = valueToString(payload.name);
  const email = valueToString(payload.email);
  const phone = valueToString(payload.phone);
  const company = valueToString(payload.company);
  const message = valueToString(payload.message);
  const recaptchaToken = valueToString(payload.recaptchaToken);

  if (!name || !email || !message) {
    return jsonError("Please complete the required fields.", 400);
  }

  if (!recaptchaToken) {
    return jsonError("Please complete the human verification.", 400);
  }

  const verifyBody = new URLSearchParams({
    secret: secretKey,
    response: recaptchaToken,
  });

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();

  if (forwardedFor) {
    verifyBody.set("remoteip", forwardedFor);
  }

  try {
    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verifyBody,
    });
    const verifyResult = (await verifyResponse.json()) as RecaptchaVerifyResponse;

    if (!verifyResult.success) {
      return jsonError("Human verification failed. Please try again.", 400);
    }
  } catch {
    return jsonError("Human verification could not be completed. Please try again.", 502);
  }

  // TODO: Connect this verified submission to Resend.
  void { name, email, phone, company, message };

  return NextResponse.json({
    message: "Thanks, your message has been verified. Email delivery will be connected soon.",
  });
}
