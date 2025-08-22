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
        <img src={logo} className="brand__logo" />
      </div>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
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
