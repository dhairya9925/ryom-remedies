import fs from "fs";
import path from "path";
import { getPayload } from "payload";
import { fileURLToPath } from "url";

import config from "../payload.config";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const rootDir = path.resolve(dirname, "..");

const categories = [
  { name: "Anti Allergic", slug: "anti-allergic", order: 1 },
  { name: "Pain & Inflammation", slug: "pain-inflammation", order: 2 },
  { name: "Anti Biotics", slug: "anti-biotics", order: 3 },
  { name: "Anti Emetic", slug: "anti-emetic", order: 4 },
  { name: "GI Disorders", slug: "gi-disorders", order: 5 },
] as const;

type ProductSeed = {
  name: string;
  slug: string;
  imageFilename: string;
  category: string;
  packSize: string;
  composition: string;
  effects: string;
  uses: string;
  sideEffects: string;
  highlights: string[];
  dosageForm: "tablet" | "capsule" | "syrup" | "dry-syrup" | "injection" | "cream";
  order: number;
};

// All 10 products from the WordPress website (ryom-remediesdb)
const products: ProductSeed[] = [
  // ── Anti Allergic ──────────────────────────────────
  {
    name: "Ryoalert-LC",
    slug: "ryoalert-lc",
    imageFilename: "ryoalert-lc.jpg",
    category: "Anti Allergic",
    packSize: "10 x 10 Tablets",
    composition: "Montelukast Sodium and Levocetirizine Hydrochloride Tablets IP",
    effects:
      "Levocetirizine is an antihistamine that reduces allergic symptoms; Montelukast prevents asthma and allergic reactions by blocking leukotrienes.",
    uses: "Allergies, hay fever, asthma, and allergic rhinitis.",
    sideEffects: "Drowsiness, dry mouth, headache, and rare mood changes.",
    highlights: ["Allergy support", "Tablet format", "Prescription medicine"],
    dosageForm: "tablet",
    order: 1,
  },

  // ── Pain & Inflammation ────────────────────────────
  {
    name: "Ryomace P",
    slug: "ryomace-p",
    imageFilename: "ryomace-p.jpg",
    category: "Pain & Inflammation",
    packSize: "10 x 10 Tablets",
    composition: "Aceclofenac and Paracetamol Tablets IP",
    effects: "Pain relief, reduces inflammation, and lowers fever.",
    uses: "Joint pain, arthritis, muscle pain, back pain, and fever.",
    sideEffects:
      "Stomach irritation, acidity, nausea, dizziness, liver issues (with long-term use).",
    highlights: ["Pain relief", "Fever support", "Combination tablet"],
    dosageForm: "tablet",
    order: 2,
  },
  {
    name: "Ryocort",
    slug: "ryocort",
    imageFilename: "ryocort.jpg",
    category: "Pain & Inflammation",
    packSize: "10 x 10 Tablets",
    composition: "Deflazacort Tablets IP 6 mg",
    effects:
      "A corticosteroid that reduces inflammation and suppresses the immune system.",
    uses: "Autoimmune diseases, asthma, allergies, Duchenne muscular dystrophy, and severe inflammatory conditions.",
    sideEffects:
      "Weight gain, mood changes, increased blood sugar, and long-term bone weakening.",
    highlights: ["6 mg strength", "Tablet format", "Doctor guided use"],
    dosageForm: "tablet",
    order: 3,
  },

  // ── Anti Biotics ───────────────────────────────────
  {
    name: "Ryomentin",
    slug: "ryomentin",
    imageFilename: "ryomentin.jpg",
    category: "Anti Biotics",
    packSize: "10 x 10 Tablets",
    composition: "Amoxycillin and Potassium Clavulanate Tablets IP",
    effects:
      "Amoxicillin is a penicillin antibiotic that kills bacteria; Clavulanic Acid prevents bacterial resistance.",
    uses: "Respiratory infections, urinary tract infections, ear infections, and skin infections.",
    sideEffects: "Diarrhea, nausea, mild rash, and rare allergic reactions.",
    highlights: ["Antibiotic", "Tablet format", "Complete course advised"],
    dosageForm: "tablet",
    order: 4,
  },
  {
    name: "Ryomentin Dry Syrup",
    slug: "ryomentin-dry-syrup",
    imageFilename: "ryomentin-dry-syrup.jpg",
    category: "Anti Biotics",
    packSize: "30 ml dry syrup",
    composition: "Amoxycillin and Potassium Clavulanate Oral Suspension IP",
    effects:
      "Amoxicillin is a penicillin antibiotic that kills bacteria; Clavulanic Acid prevents bacterial resistance.",
    uses: "Respiratory infections, urinary tract infections, ear infections, and skin infections.",
    sideEffects: "Diarrhea, nausea, mild rash, and rare allergic reactions.",
    highlights: ["Dry syrup", "Oral suspension", "Pediatric friendly format"],
    dosageForm: "dry-syrup",
    order: 5,
  },
  {
    name: "Ryomicin 250",
    slug: "ryomicin-250",
    imageFilename: "ryomicin-250.jpg",
    category: "Anti Biotics",
    packSize: "10 x 6 Tablets",
    composition: "Azithromycin Tablets IP 250 mg",
    effects:
      "Broad-spectrum antibiotic that fights bacterial infections by inhibiting protein synthesis.",
    uses: "Respiratory infections, skin infections, ear infections, and sexually transmitted diseases.",
    sideEffects:
      "Nausea, diarrhea, stomach pain, and occasional liver enzyme elevation.",
    highlights: ["250 mg strength", "Antibiotic", "Doctor guided use"],
    dosageForm: "tablet",
    order: 6,
  },
  {
    name: "Ryomicin 500",
    slug: "ryomicin-500",
    imageFilename: "ryomicin-500.jpg",
    category: "Anti Biotics",
    packSize: "10 x 3 Tablets",
    composition: "Azithromycin Tablets IP 500 mg",
    effects:
      "Broad-spectrum antibiotic that fights bacterial infections by inhibiting protein synthesis.",
    uses: "Respiratory infections, skin infections, ear infections, and sexually transmitted diseases.",
    sideEffects:
      "Nausea, diarrhea, stomach pain, and occasional liver enzyme elevation.",
    highlights: ["500 mg strength", "Antibiotic", "Doctor guided use"],
    dosageForm: "tablet",
    order: 7,
  },

  // ── Anti Emetic ────────────────────────────────────
  {
    name: "Ryoset",
    slug: "ryoset",
    imageFilename: "ryoset.jpg",
    category: "Anti Emetic",
    packSize: "10 x 10 Tablets",
    composition: "Ondansetron Tablets IP 4 mg",
    effects:
      "Prevents nausea and vomiting by blocking serotonin receptors in the brain.",
    uses: "Used after chemotherapy, surgery, or severe nausea/vomiting from infections.",
    sideEffects:
      "Mild headache, constipation, dizziness, and rare heart rhythm disturbances.",
    highlights: ["Anti-emetic", "4 mg strength", "Post-surgery support"],
    dosageForm: "tablet",
    order: 8,
  },

  // ── GI Disorders ───────────────────────────────────
  {
    name: "Ryopanta",
    slug: "ryopanta",
    imageFilename: "ryopanta.jpg",
    category: "GI Disorders",
    packSize: "10 x 10 Tablets",
    composition: "Pantoprazole Gastro-Resistant Tablets IP 40 mg",
    effects:
      "Reduces stomach acid by blocking the proton pump in the stomach lining.",
    uses: "GERD, acid reflux, gastritis, stomach ulcers.",
    sideEffects:
      "Mild headache, nausea, diarrhea, and long-term use may lead to vitamin B12 deficiency.",
    highlights: ["Gastro-resistant", "40 mg strength", "Acid control"],
    dosageForm: "tablet",
    order: 9,
  },
  {
    name: "Ryopanta-DSR",
    slug: "ryopanta-dsr",
    imageFilename: "ryopanta-dsr.jpg",
    category: "GI Disorders",
    packSize: "10 x 10 Capsules",
    composition:
      "Pantoprazole Gastro-Resistant and Domperidone Prolonged Release Capsules IP",
    effects:
      "Pantoprazole reduces stomach acid; Domperidone prevents nausea and improves digestion by enhancing stomach motility.",
    uses: "Acid reflux, GERD, gastritis, and nausea associated with acid disorders.",
    sideEffects:
      "Mild headache, diarrhea, stomach pain, and rare heart rhythm disturbances.",
    highlights: ["Dual action", "Capsule format", "GI support"],
    dosageForm: "capsule",
    order: 10,
  },
];

type JobOpeningSeed = {
  title: string;
  department: "Sales" | "Quality";
  location: string;
  employmentType: "Full-time";
  status: "published";
  summary: string;
  responsibilities: { item: string }[];
  applicationEmail: string;
  order: number;
};

const jobOpenings: JobOpeningSeed[] = [
  {
    title: "Medical Representative",
    department: "Sales",
    location: "Ahmedabad, Gujarat",
    employmentType: "Full-time",
    status: "published",
    summary:
      "Represent Ryom Remedies in the field by building strong relationships with doctors, pharmacies, and healthcare partners.",
    responsibilities: [
      { item: "Promote assigned product portfolio with accurate product knowledge." },
      { item: "Plan regular doctor and retailer visits across the assigned territory." },
      { item: "Track market feedback, competitor activity, and monthly sales performance." },
    ],
    applicationEmail: "admin@ryomremedies.com",
    order: 1,
  },
  {
    title: "Quality Assurance Executive",
    department: "Quality",
    location: "Ahmedabad, Gujarat",
    employmentType: "Full-time",
    status: "published",
    summary:
      "Support quality documentation, vendor coordination, and process follow-ups to help maintain dependable pharmaceutical standards.",
    responsibilities: [
      { item: "Maintain quality records, product documentation, and compliance checklists." },
      { item: "Coordinate with manufacturing and distribution partners for quality updates." },
      { item: "Assist internal reviews and follow up on corrective actions when required." },
    ],
    applicationEmail: "admin@ryomremedies.com",
    order: 2,
  },
];

async function seed() {
  const payload = await getPayload({ config });

  // ── Categories ─────────────────────────────────────
  console.log("Seeding product categories...");
  const categoryMap = new Map<string, number>();

  for (const category of categories) {
    const existing = await payload.find({
      collection: "product-categories",
      limit: 1,
      where: { slug: { equals: category.slug } },
    });

    const doc =
      existing.docs[0] ??
      (await payload.create({
        collection: "product-categories",
        data: category,
      }));

    if (existing.docs[0]) {
      await payload.update({
        collection: "product-categories",
        id: doc.id,
        data: category,
      });
    }

    categoryMap.set(category.name, doc.id);
    console.log(`  ✓ ${category.name}`);
  }

  // ── Media ──────────────────────────────────────────
  console.log("\nSeeding media...");
  const mediaMap = new Map<string, number>();

  for (const product of products) {
    const filePath = path.join(rootDir, "public", "products", product.imageFilename);

    if (!fs.existsSync(filePath)) {
      throw new Error(`Missing product image: ${filePath}`);
    }

    const existing = await payload.find({
      collection: "media",
      limit: 1,
      where: { filename: { equals: product.imageFilename } },
    });

    const media =
      existing.docs[0] ??
      (await payload.create({
        collection: "media",
        data: {
          alt: `${product.name} packaging`,
        },
        filePath,
      }));

    if (existing.docs[0]) {
      await payload.update({
        collection: "media",
        id: media.id,
        data: {
          alt: `${product.name} packaging`,
        },
      });
    }

    mediaMap.set(product.imageFilename, media.id);
    console.log(`  ✓ ${product.imageFilename}`);
  }

  // ── Products ───────────────────────────────────────
  console.log("\nSeeding products...");

  for (const product of products) {
    const categoryId = categoryMap.get(product.category);
    const mediaId = mediaMap.get(product.imageFilename);

    if (!categoryId || !mediaId) {
      throw new Error(`Missing relation for product: ${product.name}`);
    }

    const data = {
      name: product.name,
      slug: product.slug,
      category: categoryId,
      image: mediaId,
      packSize: product.packSize,
      composition: product.composition,
      effects: product.effects,
      uses: product.uses,
      sideEffects: product.sideEffects,
      highlights: product.highlights.map((label) => ({ label })),
      dosageForm: product.dosageForm,
      featured: false,
      status: "active" as const,
      order: product.order,
    };

    const existing = await payload.find({
      collection: "products",
      limit: 1,
      where: { slug: { equals: product.slug } },
    });

    if (existing.docs[0]) {
      await payload.update({
        collection: "products",
        id: existing.docs[0].id,
        data,
      });
    } else {
      await payload.create({
        collection: "products",
        data,
      });
    }

    console.log(`  ✓ ${product.name}`);
  }

  // ── Job Openings ───────────────────────────────────
  console.log("\nSeeding job openings...");

  for (const opening of jobOpenings) {
    const existing = await payload.find({
      collection: "job-openings",
      limit: 1,
      where: { title: { equals: opening.title } },
    });

    if (existing.docs[0]) {
      await payload.update({
        collection: "job-openings",
        id: existing.docs[0].id,
        data: opening,
      });
    } else {
      await payload.create({
        collection: "job-openings",
        data: opening,
      });
    }

    console.log(`  ✓ ${opening.title}`);
  }

  console.log("\n✅ Seed complete — 10 products, 5 categories, 2 job openings.");
}

seed()
  .then(() => process.exit(0))
  .catch((error: unknown) => {
    console.error("Seed failed:", error);
    process.exit(1);
  });
