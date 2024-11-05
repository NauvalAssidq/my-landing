import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDarkMode } from '../context/DarkModeContext';
import GalleryCarousel from '../components/GalleryCarousel';
import './DetailsPage.css';

function DetailsPage() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={`details-page-container ${darkMode ? 'dark' : 'light'}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <main className="details-main-content">
        <section className="details-content-section">
          <article className={`details-article ${darkMode ? 'dark' : 'light'}`}>
            <h1>Arm Wrestling Competition</h1>
            <br />
            <p>
            Arm wrestling is a competitive sport that tests strength, technique, and endurance, pitting two opponents against each other in a contest of raw power. The goal is simple: force your opponent's hand and wrist to touch the surface, usually a table, with the arm locked in a specific position. While it may appear to be just about brute strength, arm wrestling also involves leverage, body mechanics, and strategy. Proper technique can often overcome pure muscle power, as skilled athletes know how to use their body to generate force and position their opponent for weakness. The sport is popular in many countries, with both professional competitions and casual matches held in various settings, from local bars to global tournaments. Arm wrestling has a unique appeal, blending athleticism with a personal challenge, where each match feels like a test of will and determination.            </p>
          </article>
        </section>

        <aside className={`details-sidebar ${darkMode ? 'dark' : 'light'}`}>
          <h3>Gallery</h3>
          <div className="gallery-carousel">
            <GalleryCarousel />
          </div>
        </aside>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default DetailsPage;
