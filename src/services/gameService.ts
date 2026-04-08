import { connectDB } from "../lib/mongodb";
import { Game } from "../lib/models/Game";

export async function getAllGames() {
  await connectDB();
  // We use .lean() to get a plain JS object, which is better for Next.js serialization
  return await Game.find({}).sort({ createdAt: -1 }).lean();
}