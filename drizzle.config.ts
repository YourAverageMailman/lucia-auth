import { defineConfig } from 'drizzle-kit'
export default defineConfig({
  dialect: "postgresql",
  schema: "./app/lib/db/schema.ts",
  dbCredentials: {
    url: "postgres://postgres:shit1234@localhost:5432/postgres"
  },
  verbose: true,
  strict: true,
}
)