import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import { Game } from "../../../lib/models/Game";

export async function GET() {
  try {
    await connectDB();
    const games = await Game.find({}).sort({ createdAt: -1 });
    return NextResponse.json(games, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch games" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newGame = await Game.create(body);
    return NextResponse.json(newGame, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Validation Error" }, { status: 400 });
  }
}