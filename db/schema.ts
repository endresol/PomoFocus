import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const client = sqliteTable("Client", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name"),
  email: text("email"),
});
