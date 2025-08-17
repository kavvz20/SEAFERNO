import ship from './assets/pirate-ship.svg';

export default function Hero() {
  return (
    <section className="hero" id="home" aria-label="Legend of the Seas hero">
      <div className="hero__copy">
        <span className="eyebrow">New Bedford</span>
        <h1 className="title">Legend of the Seas</h1>
        <button className="btn">Explore Now</button>
      </div>
      <div className="hero__art" role="img" aria-label="Pirate ship illustration">
        <img src={ship} alt="Pirate ship" loading="eager" className="ship-img" />
      </div>
    </section>
  );
}
