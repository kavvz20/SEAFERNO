export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <span className="brand__icon" aria-hidden="true">⚓</span>
        <span className="brand__name">PISHIP</span>
      </div>
      <nav className="nav" aria-label="Primary">
        <a href="#home">Home</a>
        <a href="#explore">Explore</a>
        <a href="#caribbean">Caribbean</a>
        <a href="#contact" className="cta">Contact</a>
      </nav>
    </header>
  );
}
