
import React, { useState } from "react";
import "./App.css";

const effects = [
  { name: "Neon Glow", type: "neon", description: "Glowing neon borders with animated light." },
  { name: "Glassmorphism", type: "glass", description: "Transparent glass-style UI." },
  { name: "3D Card Tilt", type: "tilt", description: "Interactive 3D perspective transformation." },
  { name: "Magnetic Hover", type: "magnetic", description: "A card that reacts to pointer movement." },
  { name: "Gradient Motion", type: "gradient", description: "Moving multi-color gradient background." },
  { name: "Particle Effect", type: "particles", description: "Floating particles in the background." },
  { name: "Ripple Effect", type: "ripple", description: "Animated ripple-style button." },
  { name: "Text Reveal", type: "reveal", description: "Animated text reveal." },
  { name: "Floating Effect", type: "floating", description: "Smooth floating animation." },
  { name: "Glitch Effect", type: "glitch", description: "Digital glitch-style animation." },
  { name: "Spotlight", type: "spotlight", description: "Light follows the pointer." },
  { name: "Scroll Reveal", type: "scroll", description: "Animated entrance on scrolling." },
  { name: "Morphing Shapes", type: "morph", description: "Continuously changing geometric shapes." }
];

function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#home">SNIT<span>.</span></a>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#effects">Effects Lab</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="nav-button" href="#effects">Explore Effects ↗</a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-badge">
            <span className="live-dot"></span>
            CREATIVE DEVELOPMENT STUDIO
          </div>

          <h1>
            DESIGN BEYOND
            <br />
            <span>LIMITS.</span>
          </h1>

          <p>
            Exploring interactive animations, creative effects,
            modern interfaces and digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#effects" className="primary-button">
              Explore Effects ↗
            </a>
            <a
              href="https://github.com/siddharthpatel24347-dev"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              GitHub Profile
            </a>
          </div>

          <div className="hero-orb orb-one"></div>
          <div className="hero-orb orb-two"></div>
        </section>

        <section className="stats">
          <div><strong>13+</strong><span>Visual Effects</span></div>
          <div><strong>100%</strong><span>Interactive Demo</span></div>
          <div><strong>01</strong><span>Creative Lab</span></div>
        </section>

        <section className="effects-section" id="effects">
          <div className="section-heading">
            <div>
              <span className="eyebrow">EXPERIMENT / CREATE / EXPLORE</span>
              <h2>Interactive Effects Lab</h2>
              <p>Explore each effect. Hover, click and interact.</p>
            </div>
            <span className="effect-count">13 EXPERIMENTS</span>
          </div>

          <div className="effects-grid">
            {effects.map((effect, index) => (
              <article className="effect-card" key={effect.type}>
                <div className="card-top">
                  <span>EXPERIMENT {String(index + 1).padStart(2, "0")}</span>
                  <span>↗</span>
                </div>

                <div className={`effect-preview ${effect.type}`}>
                  {effect.type === "particles" ? (
                    <>
                      {Array.from({ length: 12 }).map((_, i) => (
                        <i key={i} style={{ "--i": i }}></i>
                      ))}
                      <b>PARTICLES</b>
                    </>
                  ) : effect.type === "ripple" ? (
                    <button className="ripple-button">CLICK ME</button>
                  ) : effect.type === "glitch" ? (
                    <b data-text="GLITCH">GLITCH</b>
                  ) : effect.type === "reveal" ? (
                    <b>REVEAL</b>
                  ) : effect.type === "morph" ? (
                    <div className="morph-shape"></div>
                  ) : (
                    <div className="preview-object">
                      {effect.type === "neon" && "NEON"}
                      {effect.type === "glass" && "GLASS"}
                      {effect.type === "tilt" && "3D"}
                      {effect.type === "magnetic" && "MOVE"}
                      {effect.type === "gradient" && "COLOR"}
                      {effect.type === "floating" && "FLOAT"}
                      {effect.type === "spotlight" && "LIGHT"}
                      {effect.type === "scroll" && "SCROLL"}
                    </div>
                  )}
                </div>

                <div className="card-bottom">
                  <div>
                    <h3>{effect.name}</h3>
                    <p>{effect.description}</p>
                  </div>
                  <button
                    className="view-button"
                    onClick={() => setSelected(effect)}
                    aria-label={`View ${effect.name} details`}
                  >
                    ↗
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <span className="eyebrow">WHO WE ARE</span>
          <h2>Building Digital Experiences.</h2>
          <p>
            SNIT is a creative technology showcase focused on
            modern web development, animations, user interfaces
            and interactive digital experiments.
          </p>
          <a href="https://github.com/siddharthpatel24347-dev"
             target="_blank" rel="noreferrer">
            Explore GitHub ↗
          </a>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">LET'S CONNECT</span>
          <h2>Have an idea?</h2>
          <p>Explore my work and connect through GitHub.</p>
          <a
            href="https://github.com/siddharthpatel24347-dev"
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Connect on GitHub ↗
          </a>
        </section>
      </main>

      <footer>
        <a className="logo" href="#home">SNIT<span>.</span></a>
        <p>© 2026 SNIT Creative Lab. Built with React.</p>
        <a href="#home">Back to top ↑</a>
      </footer>

      {selected && (
        <div className="modal-backdrop" onClick={() => setSelected(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ×
            </button>
            <span className="eyebrow">EFFECT DETAILS</span>
            <h2>{selected.name}</h2>
            <p>{selected.description}</p>
            <p className="modal-note">
              This is a CSS-based interactive demonstration.
              The preview is available in the Effects Lab.
            </p>
            <button
              className="primary-button"
              onClick={() => setSelected(null)}
            >
              Back to Lab
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
