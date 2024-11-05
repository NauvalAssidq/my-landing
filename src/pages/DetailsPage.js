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
            <h1>Website Competition</h1>
            <br />
            <p>
              The Website Creation Competition is a dynamic event that challenges web designers, developers, and creatives to showcase their skills in building innovative and functional websites. Participants are encouraged to push the boundaries of design, user experience, and interactivity, while integrating the latest technologies and trends in web development. The competition not only tests technical expertise but also emphasizes creativity, aesthetic appeal, and the ability to craft a seamless user journey. Whether it’s a sleek business website, an engaging e-commerce platform, or a visually stunning portfolio, this competition celebrates the art and science of web creation. It's an opportunity to demonstrate how the web can be a powerful tool for communication, innovation, and creativity, and to be recognized for building the digital experiences of tomorrow. Tomrrow you will be the next people who gonna build the website.
            </p>
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
