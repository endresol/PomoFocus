import { db } from "../electron/db";
import { client } from "../electron/db/schema";

export default class ClientRepository {
  public static async list() {
    const clients = await db.select().from(client).all();
    return clients;
  }
}
