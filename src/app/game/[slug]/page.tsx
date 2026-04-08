"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "./game-detail.css";

const gameData = {
  slug: "city-transportation-tycoon",
  title: "City Transportation Tycoon",
  tagline: "Build your transport empire",
  shortDescription: "Build and automate a transportation empire! Start from a small neighborhood and grow your city by upgrading buses, managing resources, and unlocking various systems.",
  fullDescription: "Build and automate a transportation empire! Start from a small neighborhood and grow your city by upgrading buses, managing resources, and unlocking various systems. Hire managers, expand districts, and balance your resource flow to become the ultimate transport magnate. With pizza delivery, taxi pickups, trains, and helicopter delivery — the city never sleeps!",
};

export default function GameDetailPage() {
  return (
    <main className="game-detail-page">
      <div className="game-detail-container">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="game-hero"
        >
          <h1 className="game-title">{gameData.title}</h1>
          <p className="game-tagline">{gameData.tagline}</p>

          {/* Short Description - Limited to 2 lines */}
          <p className="game-description-short">
            {gameData.shortDescription}
          </p>

          {/* Learn More Button - Redirects to full page (this same page in real case) */}
          <Link href={`/game/${gameData.slug}/full`} className="learn-more-btn">
            Learn More 
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        {/* Full Description Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="full-description"
        >
          <h2 className="text-3xl font-display mb-6 text-center">About the Game</h2>
          <p>{gameData.fullDescription}</p>
        </motion.div>

        {/* More Games Section */}
        <div className="more-games">
          <h2 className="more-games-title">More Games from Keshava</h2>
          <p className="text-zinc-400">Discover more addictive games</p>
          {/* You can add grid of other games here later */}
        </div>
      </div>
    </main>
  );
}