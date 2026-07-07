"use client";

import Image from "next/image";
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
import type { CategoryData, ProductData } from "@/lib/queries";

type ProductBrowserProps = {
  products: ProductData[];
  categories: CategoryData[];
};

export function ProductBrowser({ products, categories }: ProductBrowserProps) {
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
          {categories.map((category) => (
            <li key={category.id}>
              <button
                type="button"
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold text-[#3d4947] transition hover:bg-[#f3f4f5] hover:text-[#39b5a3]"
              >
                <span>{category.name}</span>
                <span className="rounded-md bg-[#e7e8e9] px-2 py-0.5 text-xs">
                  {category.productCount}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {products.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductDialogCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center rounded-lg border border-dashed border-[#e1e3e4] bg-[#f8f9fa] p-12 text-center">
          <div>
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#e9f8f6] text-[#39b5a3] shadow-sm">
              <PackageCheck className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-[#2d9f90] [font-family:Lexend,system-ui,sans-serif]">
              Products coming soon
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#6b7280]">
              Our product catalog is being updated. Please check back soon or contact us for product
              information.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#39b5a3] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#2d9f90]"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductDialogCard({ product }: { product: ProductData }) {
  return (
    <Dialog>
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e1e3e4] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <DialogTrigger asChild>
          <button type="button" className="flex h-full flex-col text-left">
            <div className="relative aspect-[4/3] w-full bg-[#f3f4f5] p-6">
              <Image
                src={product.image}
                alt={`${product.name} packaging`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain transition duration-500 group-hover:scale-105"
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

function ProductDialog({ product }: { product: ProductData }) {
  return (
    <DialogContent className="max-h-[88vh] w-[calc(100vw-2rem)] max-w-4xl overflow-y-auto border-0 bg-white p-0 shadow-2xl sm:rounded-lg">
      <div className="grid lg:grid-cols-[340px_1fr]">
        <div className="flex min-h-[260px] items-center justify-center bg-[#f8f9fa] p-5 lg:min-h-full">
          <Image
            src={product.image}
            alt={`${product.name} packaging`}
            width={340}
            height={300}
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
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F39517] px-4 py-2.5 text-sm font-bold text-[#173f39] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#d9820e]"
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
