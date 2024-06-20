import { db } from "../db";
import { client } from "../db/schema";
import { eq } from "drizzle-orm";

export type Client = Client.$inferInsert;

export default class ClientRepository {
  public static async listAll() {
    const clients = await db.select().from(client).all();
    return clients;
  }

  public static async insertClient(_client: Client) {
    return db.insert(client).values(_client);
  }

  public static async updateClient(_client: Client) {
    return db
      .update(client)
      .set({ name: _client.name })
      .where(eq(client.id, _client.id));
  }
}
