import React, { useState } from 'react';
import logo from './assets/LEAD_black.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="header">
      <div className="brand">
        <img src={logo} className="brand__logo" alt="LEAD logo" />
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        {isMenuOpen ? (
          // X icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ) : (
          // Hamburger icon
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        )}
      </button>

      {/* Navigation Menu */}
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`} aria-label="Primary">
        <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
        <a href="#events" onClick={() => scrollToSection('events')}>Events</a>
        <a href="#sponsors" onClick={() => scrollToSection('sponsors')}>Sponsors</a>
        <a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a>
      </nav>
    </header>
  );
}
