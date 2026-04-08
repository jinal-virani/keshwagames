// app/gamesList/page.tsx
import { Metadata } from "next";
import AllGamesCollection from "./allGamesCollection";
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "All Games | Loop Games",
  description: "Discover and play our collection of addictive mobile games including Keshwa wooden puzzles, brain games, and more.",
  keywords: ["games", "online games", "wooden puzzles", "keshwa game", "brain games for adults"],
};

export default function GamesPage() {
  return <AllGamesCollection />;
}