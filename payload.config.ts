import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { JobOpenings } from "./src/collections/JobOpenings";
import { Media } from "./src/collections/Media";
import { ProductCategories } from "./src/collections/ProductCategories";
import { Products } from "./src/collections/Products";
import { Users } from "./src/collections/Users";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: " - Ryom Remedies Admin",
    },
  },
  collections: [Users, Media, ProductCategories, Products, JobOpenings],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  editor: lexicalEditor(),
  globals: [],
  secret: process.env.PAYLOAD_SECRET ?? "development-payload-secret-change-before-production",
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL ?? "http://localhost:3000",
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
});
