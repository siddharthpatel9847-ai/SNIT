
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
  { name: "Spotlight", type: "spotlight", description: "Spotlight background effect." },
  { name: "Scroll Reveal", type: "scroll", description: "Floating preview animation." },
  { name: "Morphing Shapes", type: "morph", description: "Continuously changing geometric shapes." },
  { name: "Matrix Rain", type: "matrix", description: "Digital code animation." },
  { name: "Holographic Card", type: "holographic", description: "Color-shifting holographic surface." },
  { name: "Laser Border", type: "laser", description: "Animated laser border effect." },
  { name: "Cyber Scanner", type: "scanner", description: "Scanning light across a cyber panel." },
  { name: "Electric Pulse", type: "electric", description: "Pulsing electric energy effect." }
];

const cssCode = {
  neon: `.neon-text {
  color: white;
  text-shadow: 0 0 8px #a78bfa,
               0 0 25px #a78bfa,
               0 0 50px #7c3aed;
  animation: neonPulse 2s infinite alternate;
}

@keyframes neonPulse {
  from { opacity: .55; }
  to { opacity: 1; }
}`,
  glass: `.glass-card {
  padding: 25px 38px;
  border: 1px solid #ffffff70;
  border-radius: 12px;
  background: #ffffff18;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 30px #ffffff12;
}`,
  tilt: `.tilt-card {
  background: linear-gradient(135deg, #a78bfa, #4338ca);
  padding: 35px;
  border-radius: 12px;
  transform: perspective(300px) rotateY(-20deg) rotateX(10deg);
  box-shadow: 12px 15px 30px #0008;
}`,
  magnetic: `.magnetic-button {
  border: 1px solid #a78bfa;
  border-radius: 30px;
  padding: 20px 35px;
  transition: .3s;
}

.magnetic-button:hover {
  transform: scale(1.15);
  background: #a78bfa;
  color: #080808;
}`,
  gradient: `.gradient-bg {
  background: linear-gradient(120deg, #25104a, #153b68, #4b145d);
  background-size: 300% 300%;
  animation: gradientMove 5s ease infinite;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`,
  particles: `.particle {
  width: 5px;
  height: 5px;
  background: #a78bfa;
  border-radius: 50%;
  box-shadow: 0 0 15px #a78bfa;
  animation: particleFloat 3s ease-in-out infinite alternate;
}

@keyframes particleFloat {
  to { transform: translate(15px, -25px); opacity: .3; }
}`,
  ripple: `.ripple-button {
  background: #a78bfa;
  border: 0;
  padding: 16px 28px;
  border-radius: 30px;
  font-weight: 800;
  color: #080808;
  position: relative;
  overflow: hidden;
}

.ripple-button::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 2px solid white;
  border-radius: 30px;
  animation: ripple 1.5s infinite;
}

@keyframes ripple {
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(1.6); opacity: 0; }
}`,
  reveal: `.reveal-text {
  font-size: 35px;
  letter-spacing: 5px;
  animation: revealText 2s infinite;
}

@keyframes revealText {
  0% { clip-path: inset(0 100% 0 0); }
  50%, 100% { clip-path: inset(0 0 0 0); }
}`,
  floating: `.floating-element {
  animation: floating 3s ease-in-out infinite;
}

@keyframes floating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
}`,
  glitch: `.glitch-text {
  font-size: 30px;
  font-weight: 900;
  text-shadow: 3px 0 #a78bfa, -3px 0 #38bdf8;
  animation: glitch 1s infinite;
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  25% { transform: translate(2px, -2px); }
  50% { transform: translate(-2px, 2px); }
  75% { transform: translate(1px, 1px); }
}`,
  spotlight: `.spotlight {
  background: radial-gradient(circle at 50% 50%, #7252b8, #181818 55%);
  color: white;
  text-shadow: 0 0 20px white;
}`,
  scroll: `.scroll-element {
  animation: floating 2.5s infinite;
}

@keyframes floating {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-18px); }
}`,
  morph: `.morph-shape {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #a78bfa, #2563eb);
  border-radius: 30%;
  animation: morph 4s ease-in-out infinite;
}

@keyframes morph {
  0%, 100% { border-radius: 30%; transform: rotate(0deg); }
  50% { border-radius: 50%; transform: rotate(180deg); }
}`,
  matrix: `.matrix-code {
  color: #39ff88;
  font-family: monospace;
  font-size: 22px;
  line-height: 1.6;
  letter-spacing: 8px;
  text-shadow: 0 0 12px #39ff88;
  animation: matrixMove 2s linear infinite;
}

@keyframes matrixMove {
  from { transform: translateY(-20px); opacity: .4; }
  to { transform: translateY(20px); opacity: 1; }
}`,
  holographic: `.holographic {
  background: linear-gradient(120deg, #25104a, #075985, #831843, #25104a);
  background-size: 300% 300%;
  animation: holoBackground 4s ease infinite;
}

@keyframes holoBackground {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}`,
  laser: `.laser-box {
  padding: 25px 40px;
  border: 2px solid #a78bfa;
  border-radius: 12px;
  color: white;
  font-weight: 900;
  animation: laserPulse 1.5s ease-in-out infinite alternate;
}

@keyframes laserPulse {
  from { box-shadow: 0 0 5px #a78bfa; }
  to { box-shadow: 0 0 25px #a78bfa, 0 0 45px #7c3aed; }
}`,
  scanner: `.scanner-box {
  position: relative;
  overflow: hidden;
  padding: 30px 10px;
  border: 1px solid #38bdf8;
  color: #38bdf8;
  font-family: monospace;
}

.scanner-box::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #38bdf855, transparent);
  animation: scanMove 2s linear infinite;
}

@keyframes scanMove {
  to { left: 150%; }
}`,
  electric: `.electric-core {
  color: #facc15;
  font-weight: 900;
  font-size: 22px;
  text-shadow: 0 0 8px #facc15, 0 0 25px #f97316;
  animation: electricPulse .8s ease-in-out infinite alternate;
}

@keyframes electricPulse {
  from { transform: scale(.95); opacity: .7; }
  to { transform: scale(1.08); opacity: 1; }
}`
};

function EffectPreview({ type }) {
  if (type === "particles") {
    return (
      <>
        {Array.from({ length: 12 }).map((_, i) => (
          <i key={i} style={{ "--i": i }} />
        ))}
        <b>PARTICLES</b>
      </>
    );
  }

  if (type === "ripple") return <button className="ripple-button">CLICK ME</button>;
  if (type === "glitch") return <b>GLITCH</b>;
  if (type === "reveal") return <b>REVEAL</b>;
  if (type === "morph") return <div className="morph-shape" />;
  if (type === "matrix") return <div className="matrix-code">01 10 11<br />10 01 00<br />11 00 10</div>;
  if (type === "holographic") return <div className="holo-card">SNIT<br />HOLOGRAM</div>;
  if (type === "laser") return <div className="laser-box">LASER</div>;
  if (type === "scanner") return <div className="scanner-box">SCANNING...</div>;
  if (type === "electric") return <div className="electric-core">⚡ ENERGY</div>;

  const labels = {
    neon: "NEON",
    glass: "GLASS",
    tilt: "3D",
    magnetic: "MOVE",
    gradient: "COLOR",
    floating: "FLOAT",
    spotlight: "LIGHT",
    scroll: "SCROLL"
  };

  return <div className="preview-object">{labels[type]}</div>;
}

function App() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");
  const [copyStatus, setCopyStatus] = useState("");

  const openEffect = (effect) => {
    setSelected(effect);
    setActiveTab("preview");
    setCopyStatus("");
  };

  const copyCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopyStatus("Copied successfully!");
    } catch {
      setCopyStatus("Copy failed. Please select and copy the code manually.");
    }
  };

  const htmlCode = selected
    ? `<div class="${selected.type}">\n  <div class="${selected.type}-element">${selected.name}</div>\n</div>`
    : "";

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
          <h1>DESIGN BEYOND<br /><span>LIMITS.</span></h1>
          <p>
            Exploring interactive animations, creative effects,
            modern interfaces and digital experiences.
          </p>
          <div className="hero-actions">
            <a href="#effects" className="primary-button">Explore Effects ↗</a>
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
          <div><strong>18+</strong><span>Visual Effects</span></div>
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
            <span className="effect-count">18 EXPERIMENTS</span>
          </div>

          <div className="effects-grid">
            {effects.map((effect, index) => (
              <article className="effect-card" key={effect.type}>
                <div className="card-top">
                  <span>EXPERIMENT {String(index + 1).padStart(2, "0")}</span>
                  <span>↗</span>
                </div>

                <div className={`effect-preview ${effect.type}`}>
                  <EffectPreview type={effect.type} />
                </div>

                <div className="card-bottom">
                  <div>
                    <h3>{effect.name}</h3>
                    <p>{effect.description}</p>
                  </div>
                  <button
                    className="view-button"
                    onClick={() => openEffect(effect)}
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
          <div className="modal effect-modal" onClick={(e) => e.stopPropagation()}>
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

            <div className="effect-preview modal-preview">
              <EffectPreview type={selected.type} />
            </div>

            <div className="code-tabs">
              <button
                className={activeTab === "preview" ? "active" : ""}
                onClick={() => setActiveTab("preview")}
              >
                Preview
              </button>
              <button
                className={activeTab === "html" ? "active" : ""}
                onClick={() => setActiveTab("html")}
              >
                HTML Code
              </button>
              <button
                className={activeTab === "css" ? "active" : ""}
                onClick={() => setActiveTab("css")}
              >
                CSS Code
              </button>
            </div>

            {activeTab === "preview" && (
              <p className="modal-note">
                Live preview of the selected CSS effect.
                Choose HTML Code or CSS Code to view the example.
              </p>
            )}

            {activeTab === "html" && (
              <pre className="effect-code"><code>{htmlCode}</code></pre>
            )}

            {activeTab === "css" && (
              <pre className="effect-code"><code>{cssCode[selected.type]}</code></pre>
            )}

            {activeTab !== "preview" && (
              <button
                className="primary-button copy-button"
                onClick={() => copyCode(activeTab === "html" ? htmlCode : cssCode[selected.type])}
              >
                Copy {activeTab === "html" ? "HTML" : "CSS"} Code
              </button>
            )}

            {copyStatus && <p className="copy-status">{copyStatus}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
