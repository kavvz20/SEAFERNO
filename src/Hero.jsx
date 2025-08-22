import ship from './assets/pirate-ship.svg';
import "./styles.css";

export default function Hero() {
  return (
    <section classname="full">
    <section className="hero" id="home" aria-label="Seaferno">
      <div className="hero__copy">
        <h1 className="title">SEAFERNO</h1>
        <button className="btn">Register Now</button>
      </div>
      <div className="hero__art" role="img" aria-label="Pirate ship illustration">
        <img src={ship} alt="Pirate ship" loading="eager" className="ship-img" />
        <div className="floating-waves">
          <div className="floating-wave"></div>
          <div className="floating-wave second"></div>
        </div>
      </div>
    </section>
    </section>
  );
}
