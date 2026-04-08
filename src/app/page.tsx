import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Typewriter from './components/Typewriter'; // Import the new component
import { getAllGames } from '../services/gameService'; // Your MongoDB logic
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default async function Home() {
  // 1. Fetch backend data directly (No fetch keshava!)
  const backendGames = await getAllGames();

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Why Players<br />with <Typewriter /> keshava</h1>
            <p>keshava offers a premium collection of wooden puzzles, 3D puzzles, puzzle board challenges, and connect the dot games.
              Perfect for adults who want to improve focus, memory, and problem-solving skills while having fun. </p>
            <Link href="/games" className="btn btn-orange">Play keshava Now</Link>
          </div>
          <div className="hero-image">
            <img src="https://play-lh.googleusercontent.com/IRLAsmLLbV2sM0OvDawm2b9ziohdVzgde8iPBVn0FE99kDa90iSBBWSng-QpiX25WNs=w832-h470-rw"
              alt="Keshava Games" />
          </div>
        </div>
      </section>

      {/* GAMES SECTION */}
      <section className="games-section" id="games">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Our Portfolio</span>
            <h2>Our Games</h2>
          </div>
          <div className="games-grid">
            {backendGames.map((game: any) => (
              <Link href={`/games`} key={game._id.toString()} className="game-card">
                {/* <img src={game.thumbnail} alt={game.title} className="game-card-img" /> */}
                <div className="game-card-image-wrapper">
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    fill
                    className="game-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority={false}
                  />
                </div>
                <div className="game-card-body">
                  <div className="game-card-label">{game.label}</div>
                  <div className="game-card-title">{game.title}</div>
                  <p className="game-card-desc">{game.description}</p>
                  {/* Learn More Button - Redirects to full page (this same page in real case) */}
                  <p className="learn-more-btn">
                    Learn More
                    <ArrowRight size={20} />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}