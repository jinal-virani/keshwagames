import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getAllGames } from '@/src/services/gameService';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Keshwa - Wooden Puzzles & Dot Connect Brain Games for Adults",
  description: "Play Keshwa online - wooden puzzles, puzzle board, dot puzzle, bolt sort, 3D puzzles and relaxing brain games for adults. Train your mind with premium puzzel games.",
  keywords: [
    "keshwa game", "wooden puzzles", "wooden puzzles for adults", "dot puzzle",
    "connect dot", "bolt sort", "3d puzzle", "brain games for adults", "puzzle you"
  ],
  openGraph: {
    title: "Keshwa - Best Wooden Puzzle Game for Adults",
    description: "Relax and train your brain with beautiful wooden puzzles and dot connect challenges.",
    images: "/images/keshwa-og.jpg",
  },
};


export default async function GamesPage() {

  // 1. Fetch backend data directly (No fetch keshava!)
  const games = await getAllGames();
  return (
    <>
      <Navbar />
      <section className="games-hero">
        <div className="container">
          <p className="section-tag">Made with love</p>
          <h1>Games</h1>
        </div>
      </section>
      <section className="games-list">
        <div className="container">
          {games.map((game, i) => (
            <div key={game.title}>
              <div className={`game-row${i % 2 !== 0 ? ' reverse' : ''}`}>
                <div className="game-card-image-wrapper-list">
                  <Image
                    src={game.thumbnail}
                    alt={game.title}
                    fill
                    className="game-card-img"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="game-info">
                  <h2>{game.title}</h2>
                  <p>{game.description}</p>
                  {/* <p>{game.desc2}</p> */}
                  <div className="store-badges">
                    <button className="store-btn">
                      <a href={game.links?.ios} target="_blank" rel="noopener noreferrer">
                        <img src="appstore.png" />
                      </a>
                    </button>
                    <button className="store-btn">
                      <a href={game.links?.android} target="_blank" rel="noopener noreferrer">
                        <img src="googleplay.png" />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              {i < games.length - 1 && <div className="game-divider" />}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}