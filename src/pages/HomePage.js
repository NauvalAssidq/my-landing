import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDarkMode } from '../context/DarkModeContext';
import './HomePage.css';

function HomePage() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="home-page">
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      
      <main className="main-content">
        <section className={`hero ${darkMode ? "dark" : "light"}`}>
          <h2>Welcome to Our Arm Wrestling Sport Event</h2>
          <p>Be Healthy Stay Positive, Strong Arm Strong Mind.</p>
          <button className="cta-button">Get Started</button>
        </section>
      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default HomePage;
