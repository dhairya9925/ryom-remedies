"use client";

import {
  ArrowRight,
  BadgeInfo,
  CheckCircle2,
  ClipboardList,
  PackageCheck,
  Search,
  ShieldCheck,
  Stethoscope,
  TriangleAlert,
} from "lucide-react";
import type { ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Product = {
  name: string;
  image: string;
  category: string;
  packSize: string;
  composition: string;
  effects: string;
  uses: string;
  sideEffects: string;
  highlights: string[];
};

const categories = [
  ["Pain & Inflammation", 2],
  ["Anti Biotics", 3],
  ["Anti Allergic", 1],
  ["Anti Emetic", 1],
  ["GI Disorders", 2],
] as const;

const products: Product[] = [
  {
    name: "Ryoalert-LC",
    image: "/products/ryoalert-lc.jpg",
    category: "Anti Allergic",
    packSize: "10 x 10 Tablets",
    composition: "Montelukast Sodium and Levocetirizine Hydrochloride Tablets IP",
    effects:
      "Levocetirizine helps reduce allergic symptoms, while Montelukast blocks leukotrienes that can trigger asthma and allergic reactions.",
    uses: "Allergies, hay fever, asthma, and allergic rhinitis.",
    sideEffects: "Drowsiness, dry mouth, headache, and rare mood changes.",
    highlights: ["Allergy support", "Tablet format", "Prescription medicine"],
  },
  {
    name: "Ryocort 6",
    image: "/products/ryocort.jpg",
    category: "Anti Inflammatory",
    packSize: "10 x 10 Tablets",
    composition: "Deflazacort Tablets 6 mg",
    effects:
      "A corticosteroid formulation used under medical supervision to help manage inflammation and immune response.",
    uses: "Inflammatory and allergic conditions as advised by a registered medical practitioner.",
    sideEffects:
      "May include stomach discomfort, fluid retention, mood changes, or raised blood sugar.",
    highlights: ["6 mg strength", "Tablet format", "Doctor guided use"],
  },
  {
    name: "Ryomace-P",
    image: "/products/ryomace-p.jpg",
    category: "Pain & Inflammation",
    packSize: "10 x 10 Tablets",
    composition: "Aceclofenac and Paracetamol Tablets IP",
    effects:
      "Combines an anti-inflammatory pain reliever with an analgesic and antipyretic for symptomatic relief.",
    uses: "Pain, inflammation, fever, and musculoskeletal discomfort as prescribed.",
    sideEffects:
      "Acidity, nausea, stomach discomfort, dizziness, or allergic reaction in sensitive patients.",
    highlights: ["Pain relief", "Fever support", "Combination tablet"],
  },
  {
    name: "Ryomentin",
    image: "/products/ryomentin.jpg",
    category: "Anti Biotics",
    packSize: "10 x 10 Tablets",
    composition: "Amoxycillin and Potassium Clavulanate Tablets IP",
    effects:
      "An antibiotic combination where clavulanate helps protect amoxycillin from bacterial resistance mechanisms.",
    uses: "Bacterial infections only when prescribed by a healthcare professional.",
    sideEffects:
      "Nausea, loose stools, stomach discomfort, skin rash, or allergy in susceptible patients.",
    highlights: ["Antibiotic", "Tablet format", "Complete course advised"],
  },
  {
    name: "Ryomentin 457 Dry Syrup",
    image: "/products/ryomentin-dry-syrup.jpg",
    category: "Anti Biotics",
    packSize: "30 ml dry syrup",
    composition: "Amoxycillin and Potassium Clavulanate Oral Suspension IP",
    effects:
      "A reconstituted oral suspension designed for dose flexibility where syrup format is clinically preferred.",
    uses: "Bacterial infections only as directed by the prescribing doctor.",
    sideEffects:
      "Loose stools, nausea, stomach discomfort, rash, or allergy in sensitive patients.",
    highlights: ["Dry syrup", "Oral suspension", "Pediatric friendly format"],
  },
  {
    name: "Ryomicin 250",
    image: "/products/ryomicin-250.jpg",
    category: "Anti Biotics",
    packSize: "10 x 6 Tablets",
    composition: "Azithromycin Tablets IP 250 mg",
    effects:
      "A macrolide antibiotic that helps stop the growth of susceptible bacteria when used as prescribed.",
    uses: "Bacterial infections where azithromycin is clinically indicated.",
    sideEffects: "Nausea, abdominal discomfort, diarrhea, headache, or rare allergic reactions.",
    highlights: ["250 mg strength", "Antibiotic", "Doctor guided use"],
  },
];

export function ProductBrowser() {
  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <aside className="h-fit rounded-lg border border-[#e1e3e4] bg-white p-6 shadow-sm lg:sticky lg:top-24">
        <h2 className="text-xl font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
          Categories
        </h2>
        <div className="mt-5 flex">
          <label className="sr-only" htmlFor="product-search">
            Search products
          </label>
          <input
            id="product-search"
            type="search"
            placeholder="Search products"
            className="min-w-0 flex-1 rounded-l-lg border border-[#e1e3e4] bg-[#f8f9fa] px-3 py-2 text-sm outline-none transition focus:border-[#39b5a3] focus:bg-white"
          />
          <button
            type="button"
            aria-label="Search products"
            className="inline-flex w-10 items-center justify-center rounded-r-lg bg-[#39b5a3] text-white transition hover:bg-[#2d9f90]"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <ul className="mt-5 space-y-2">
          {categories.map(([category, count]) => (
            <li key={category}>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#3d4947] transition hover:bg-[#f3f4f5] hover:text-[#39b5a3]"
              >
                <span>{category}</span>
                <span className="rounded-md bg-[#e7e8e9] px-2 py-0.5 text-xs">{count}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-lg bg-[#e9f8f6] p-4 text-sm leading-6 text-[#3d4947]">
          <p className="font-bold text-[#39b5a3]">Product Information</p>
          <p className="mt-1">
            Details shown here are for catalogue reference. Always follow the prescribing doctor and
            approved product literature.
          </p>
        </div>
      </aside>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductDialogCard key={product.name} product={product} />
        ))}
      </div>
    </div>
  );
}

function ProductDialogCard({ product }: { product: Product }) {
  return (
    <Dialog>
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e1e3e4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <DialogTrigger asChild>
          <button type="button" className="flex h-full flex-col text-left">
            <div className="relative aspect-[4/3] w-full bg-[#f3f4f5] p-6">
              <img
                src={product.image}
                alt={`${product.name} packaging`}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col border-t border-[#e1e3e4] p-6">
              <h3 className="text-xl font-bold text-[#191c1d] [font-family:Lexend,system-ui,sans-serif]">
                {product.name}
              </h3>
              <p className="mb-5 mt-2 text-sm leading-6 text-[#6b7280]">{product.composition}</p>
              <span className="mt-auto inline-flex w-fit items-center gap-2 rounded-lg bg-[#39b5a3] px-4 py-3 text-sm font-bold text-white shadow-sm transition group-hover:bg-[#2d9f90]">
                Read More
                <ArrowRight
                  className="h-4 w-4 transition group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </div>
          </button>
        </DialogTrigger>
      </article>
      <ProductDialog product={product} />
    </Dialog>
  );
}

function ProductDialog({ product }: { product: Product }) {
  return (
    <DialogContent className="max-h-[88vh] w-[calc(100vw-2rem)] max-w-4xl overflow-y-auto border-0 bg-white p-0 shadow-2xl sm:rounded-lg">
      <div className="grid lg:grid-cols-[340px_1fr]">
        <div className="flex min-h-[260px] items-center justify-center bg-[#f8f9fa] p-5 lg:min-h-full">
          <img
            src={product.image}
            alt={`${product.name} packaging`}
            className="max-h-[300px] w-full object-contain"
          />
        </div>
        <div className="p-5 sm:p-6">
          <div className="pr-8">
            <div className="flex flex-wrap gap-2">
              <DetailChip icon={<PackageCheck className="h-4 w-4" />} label={product.packSize} />
              <DetailChip icon={<ShieldCheck className="h-4 w-4" />} label="Rx" />
              <DetailChip icon={<BadgeInfo className="h-4 w-4" />} label={product.category} />
            </div>
            <DialogTitle className="mt-4 text-2xl font-bold leading-tight text-[#001b3f] sm:text-3xl [font-family:Lexend,system-ui,sans-serif]">
              {product.name}
            </DialogTitle>
            <DialogDescription className="mt-2 text-sm font-semibold leading-6 text-[#6b7280]">
              {product.composition}
            </DialogDescription>
          </div>

          <div className="mt-5 rounded-lg border border-[#e1e3e4]">
            <DetailRow
              icon={<Stethoscope className="h-4 w-4" aria-hidden="true" />}
              label="Effects"
              value={product.effects}
            />
            <DetailRow
              icon={<ClipboardList className="h-4 w-4" aria-hidden="true" />}
              label="Uses"
              value={product.uses}
            />
            <DetailRow
              icon={<TriangleAlert className="h-4 w-4" aria-hidden="true" />}
              label="Side Effects"
              value={product.sideEffects}
              last
            />
          </div>

          <div className="mt-5 flex flex-col gap-4 rounded-lg bg-[#e9f8f6] p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {product.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="inline-flex items-center gap-1.5 rounded-md bg-white px-2.5 py-1.5 text-xs font-bold text-[#3d4947]"
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-[#39b5a3]" aria-hidden="true" />
                  {highlight}
                </span>
              ))}
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F5C211] px-4 py-2.5 text-sm font-bold text-[#173f39] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#DFAE08]"
            >
              Enquire Now
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}

function DetailChip({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md bg-[#e9f8f6] px-3 py-2 text-xs font-bold text-[#39b5a3]">
      {icon}
      {label}
    </span>
  );
}

function DetailRow({
  icon,
  label,
  value,
  last = false,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`grid gap-3 bg-white p-4 sm:grid-cols-[28px_1fr] ${
        last ? "" : "border-b border-[#e1e3e4]"
      }`}
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#f3f4f5] text-[#39b5a3]">
        {icon}
      </div>
      <p className="text-sm leading-6 text-[#6b7280]">
        <span className="font-bold text-[#191c1d]">{label}: </span>
        {value}
      </p>
    </div>
  );
}
