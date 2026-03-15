import path from "node:path";
import type { PrismaConfig } from "prisma";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

export default {
  schema: path.join("prisma", "schema.prisma"),
  datasource: {
    url: process.env.DATABASE_URL!,
  },
} satisfies PrismaConfig;