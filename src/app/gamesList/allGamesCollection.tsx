// "use client";

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import allGameData from '@/alldata.json';
import Image from 'next/image';


export default async function AllGamesCollection() {

  // 1. Fetch backend data directly (No fetch keshava!)
  const games = allGameData;
  
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