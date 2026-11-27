
import React, { useEffect, useState } from "react";
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
  { name: "Scroll Reveal", type: "scroll", description: "Reveal elements while scrolling." },
  { name: "Morphing Shapes", type: "morph", description: "Continuously changing geometric shapes." },
  { name: "Matrix Rain", type: "matrix", description: "Digital code animation." },
  { name: "Holographic Card", type: "holographic", description: "Color-shifting holographic surface." },
  { name: "Laser Border", type: "laser", description: "Animated laser border effect." },
  { name: "Cyber Scanner", type: "scanner", description: "Scanning light across a cyber panel." },
  { name: "Electric Pulse", type: "electric", description: "Pulsing electric energy effect." }
];

const snippets = {
  neon: {
    html: `<div class="neon-demo">NEON GLOW</div>`,
    css: `.neon-demo {
  color: white;
  padding: 25px;
  border: 1px solid #a78bfa;
  border-radius: 12px;
  text-shadow: 0 0 8px #a78bfa, 0 0 25px #a78bfa;
  box-shadow: 0 0 15px #a78bfa;
  animation: neonPulse 2s infinite alternate;
}
@keyframes neonPulse {
  to { box-shadow: 0 0 35px #a78bfa; }
}`
  },
  glass: {
    html: `<div class="glass-demo">GLASSMORPHISM</div>`,
    css: `.glass-demo {
  padding: 35px;
  color: white;
  border: 1px solid #ffffff70;
  border-radius: 15px;
  background: #ffffff20;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 30px #ffffff20;
}`
  },
  tilt: {
    html: `<div class="tilt-demo">3D CARD</div>`,
    css: `.tilt-demo {
  padding: 35px;
  color: white;
  background: linear-gradient(135deg, #a78bfa, #4338ca);
  border-radius: 15px;
  transform: perspective(500px) rotateY(-15deg) rotateX(8deg);
  box-shadow: 12px 15px 30px #0008;
}`
  },
  magnetic: {
    html: `<button class="magnetic-demo">HOVER ME</button>`,
    css: `.magnetic-demo {
  padding: 18px 30px;
  border: 1px solid #a78bfa;
  border-radius: 30px;
  background: #171225;
  color: white;
  transition: transform .3s, background .3s;
}
.magnetic-demo:hover {
  transform: scale(1.15);
  background: #7c3aed;
}`
  },
  gradient: {
    html: `<div class="gradient-demo">GRADIENT</div>`,
    css: `.gradient-demo {
  padding: 35px;
  color: white;
  border-radius: 12px;
  background: linear-gradient(120deg, #25104a, #153b68, #4b145d);
  background-size: 300% 300%;
  animation: gradientMove 5s ease infinite;
}
@keyframes gradientMove {
  50% { background-position: 100% 50%; }
}`
  },
  particles: {
    html: `<div class="particles-demo"><i></i><i></i><i></i><i></i><b>PARTICLES</b></div>`,
    css: `.particles-demo {
  min-height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: #111;
  color: white;
  overflow: hidden;
}
.particles-demo i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #a78bfa;
  box-shadow: 0 0 15px #a78bfa;
  animation: particleMove 2s infinite alternate;
}
.particles-demo i:nth-child(even) { animation-delay: .7s; }
@keyframes particleMove {
  to { transform: translateY(-35px); opacity: .3; }
}`
  },
  ripple: {
    html: `<button class="ripple-demo">CLICK ME</button>`,
    css: `.ripple-demo {
  position: relative;
  overflow: hidden;
  padding: 16px 28px;
  border: 0;
  border-radius: 30px;
  background: #a78bfa;
  color: #080808;
  font-weight: 800;
}
.ripple-demo::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 2px solid white;
  border-radius: inherit;
  animation: ripple 1.5s infinite;
}
@keyframes ripple {
  to { transform: scale(1.6); opacity: 0; }
}`
  },
  reveal: {
    html: `<div class="reveal-demo">TEXT REVEAL</div>`,
    css: `.reveal-demo {
  color: white;
  font-size: 25px;
  font-weight: 900;
  animation: reveal 2s infinite;
}
@keyframes reveal {
  0% { clip-path: inset(0 100% 0 0); }
  50%, 100% { clip-path: inset(0); }
}`
  },
  floating: {
    html: `<div class="floating-demo">FLOATING</div>`,
    css: `.floating-demo {
  display: inline-block;
  padding: 25px;
  color: white;
  background: #282044;
  border-radius: 12px;
  animation: floating 3s ease-in-out infinite;
}
@keyframes floating {
  50% { transform: translateY(-18px); }
}`
  },
  glitch: {
    html: `<div class="glitch-demo" data-text="GLITCH">GLITCH</div>`,
    css: `.glitch-demo {
  color: white;
  font-size: 30px;
  font-weight: 900;
  text-shadow: 3px 0 #a78bfa, -3px 0 #38bdf8;
  animation: glitch 1s infinite;
}
@keyframes glitch {
  25% { transform: translate(2px, -2px); }
  50% { transform: translate(-2px, 2px); }
  75% { transform: translate(1px, 1px); }
}`
  },
  spotlight: {
    html: `<div class="spotlight-demo">SPOTLIGHT</div>`,
    css: `.spotlight-demo {
  padding: 40px;
  color: white;
  border-radius: 12px;
  background: radial-gradient(circle at 50% 50%, #7252b8, #181818 65%);
  text-shadow: 0 0 20px white;
}`
  },
  scroll: {
    html: `<div class="scroll-demo">SCROLL REVEAL</div>`,
    css: `.scroll-demo {
  padding: 25px;
  color: white;
  background: #282044;
  border-radius: 12px;
  animation: scrollReveal linear both;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
@keyframes scrollReveal {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}`
  },
  morph: {
    html: `<div class="morph-demo"></div>`,
    css: `.morph-demo {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #a78bfa, #2563eb);
  border-radius: 30%;
  animation: morph 4s infinite;
}
@keyframes morph {
  50% { border-radius: 50%; transform: rotate(180deg); }
}`
  },
  matrix: {
    html: `<div class="matrix-demo">01 10 11<br>10 01 00<br>11 00 10</div>`,
    css: `.matrix-demo {
  padding: 20px;
  color: #39ff88;
  background: #050a07;
  font-family: monospace;
  font-size: 22px;
  line-height: 1.6;
  letter-spacing: 8px;
  text-shadow: 0 0 12px #39ff88;
  animation: matrixMove 2s infinite alternate;
}
@keyframes matrixMove {
  to { transform: translateY(12px); opacity: .5; }
}`
  },
  holographic: {
    html: `<div class="holographic-demo">SNIT<br>HOLOGRAM</div>`,
    css: `.holographic-demo {
  padding: 35px;
  color: white;
  text-align: center;
  border: 1px solid #ffffff80;
  border-radius: 15px;
  background: linear-gradient(120deg, #25104a, #075985, #831843, #25104a);
  background-size: 300% 300%;
  animation: holo 4s infinite;
}
@keyframes holo {
  50% { background-position: 100% 50%; }
}`
  },
  laser: {
    html: `<div class="laser-demo">LASER BORDER</div>`,
    css: `.laser-demo {
  padding: 25px;
  color: white;
  border: 2px solid #a78bfa;
  border-radius: 12px;
  animation: laser 1.5s infinite alternate;
}
@keyframes laser {
  to { box-shadow: 0 0 25px #a78bfa, 0 0 45px #7c3aed; }
}`
  },
  scanner: {
    html: `<div class="scanner-demo">SCANNING...</div>`,
    css: `.scanner-demo {
  position: relative;
  overflow: hidden;
  padding: 30px;
  color: #38bdf8;
  border: 1px solid #38bdf8;
  background: #07131b;
  font-family: monospace;
}
.scanner-demo::after {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 60%;
  height: 100%;
  background: linear-gradient(90deg, transparent, #38bdf855, transparent);
  animation: scan 2s linear infinite;
}
@keyframes scan {
  to { left: 150%; }
}`
  },
  electric: {
    html: `<div class="electric-demo">⚡ ENERGY</div>`,
    css: `.electric-demo {
  color: #facc15;
  font-size: 25px;
  font-weight: 900;
  text-shadow: 0 0 8px #facc15, 0 0 25px #f97316;
  animation: electric .8s infinite alternate;
}
@keyframes electric {
  to { transform: scale(1.08); opacity: 1; }
}`
  }
};

const videoFilters = [
  { name: "Original", value: "none" },
  { name: "Neon", value: "brightness(1.2) contrast(1.4) saturate(1.8) hue-rotate(15deg)" },
  { name: "Glitch Color", value: "contrast(1.5) saturate(2) hue-rotate(45deg)" },
  { name: "Black & White", value: "grayscale(1)" },
  { name: "Soft Blur", value: "blur(2px)" },
  { name: "Sepia", value: "sepia(1)" },
  { name: "Cyber", value: "contrast(1.4) saturate(2) hue-rotate(160deg)" }
];

function EffectPreview({ type }) {
  const preview = {
    neon: <div className="neon-demo">NEON GLOW</div>,
    glass: <div className="glass-demo">GLASS</div>,
    tilt: <div className="tilt-demo">3D CARD</div>,
    magnetic: <button className="magnetic-demo">HOVER ME</button>,
    gradient: <div className="gradient-demo">GRADIENT</div>,
    particles: <div className="particles-demo"><i /><i /><i /><i /><b>PARTICLES</b></div>,
    ripple: <button className="ripple-demo">CLICK ME</button>,
    reveal: <div className="reveal-demo">TEXT REVEAL</div>,
    floating: <div className="floating-demo">FLOATING</div>,
    glitch: <div className="glitch-demo">GLITCH</div>,
    spotlight: <div className="spotlight-demo">SPOTLIGHT</div>,
    scroll: <div className="scroll-demo">SCROLL REVEAL</div>,
    morph: <div className="morph-demo" />,
    matrix: <div className="matrix-demo">01 10 11<br />10 01 00<br />11 00 10</div>,
    holographic: <div className="holographic-demo">SNIT<br />HOLOGRAM</div>,
    laser: <div className="laser-demo">LASER BORDER</div>,
    scanner: <div className="scanner-demo">SCANNING...</div>,
    electric: <div className="electric-demo">⚡ ENERGY</div>
  };

  return preview[type];
}

function App() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState("preview");
  const [copyStatus, setCopyStatus] = useState("");

  const [videoUrl, setVideoUrl] = useState("");
  const [videoFilter, setVideoFilter] = useState("none");
  const [videoError, setVideoError] = useState("");

  useEffect(() => {
    return () => {
      if (videoUrl) {
        URL.revokeObjectURL(videoUrl);
      }
    };
  }, [videoUrl]);

  const handleVideoUpload = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("video/")) {
      setVideoError("Please select a valid video file.");
      event.target.value = "";
      return;
    }

    if (file.size > 100 * 1024 * 1024) {
      setVideoError("Video is too large. Please select a video under 100 MB.");
      event.target.value = "";
      return;
    }

    const newUrl = URL.createObjectURL(file);
    setVideoUrl(newUrl);
    setVideoFilter("none");
    setVideoError("");
  };

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
      setCopyStatus("Copy failed. Select the code and copy manually.");
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#home">SNIT<span>.</span></a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#effects">Effects Lab</a>
          <a href="#video-lab">Video Effects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <a className="nav-button" href="#effects">Explore Effects ↗</a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-badge">
            <span className="live-dot" />
            CREATIVE DEVELOPMENT STUDIO
          </div>

          <h1>DESIGN BEYOND<br /><span>LIMITS.</span></h1>

          <p>
            Exploring interactive animations, creative effects,
            modern interfaces and digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#effects" className="primary-button">Explore Effects ↗</a>
            <a href="https://github.com/siddharthpatel24347-dev" target="_blank" rel="noreferrer" className="secondary-button">GitHub Profile</a>
          </div>

          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />
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

        {/* PERSON VIDEO EFFECTS LAB */}

        <section className="video-lab-section" id="video-lab">
          <div className="section-heading">
            <div>
              <span className="eyebrow">UPLOAD / FILTER / PREVIEW</span>
              <h2>Person Video Effects Lab</h2>
              <p>Upload your own video and experiment with visual filters.</p>
            </div>
            <span className="effect-count">VIDEO STUDIO</span>
          </div>

          <label className="video-upload">
            <strong>Choose a video to upload</strong>
            <p>Select a video from your device (maximum 100 MB).</p>
            <input
              type="file"
              accept="video/*"
              onChange={handleVideoUpload}
            />
          </label>

          {videoError && <p className="video-note">{videoError}</p>}

          {videoUrl && (
            <div className="video-preview">
              <video
                src={videoUrl}
                controls
                playsInline
                style={{ filter: videoFilter }}
              />

              <div className="video-filter-buttons">
                {videoFilters.map((filter) => (
                  <button
                    key={filter.name}
                    type="button"
                    className={`video-filter-btn ${videoFilter === filter.value ? "active" : ""}`}
                    onClick={() => setVideoFilter(filter.value)}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>

              <p className="video-note">
                Filters change the live preview in your browser. This version
                does not export or download an edited video file.
              </p>
            </div>
          )}
        </section>

        <section className="about-section" id="about">
          <span className="eyebrow">WHO WE ARE</span>
          <h2>Building Digital Experiences.</h2>
          <p>
            SNIT is a creative technology showcase focused on
            modern web development, animations, user interfaces
            and interactive digital experiments.
          </p>
          <a href="https://github.com/siddharthpatel24347-dev" target="_blank" rel="noreferrer">Explore GitHub ↗</a>
        </section>

        <section className="contact-section" id="contact">
          <span className="eyebrow">LET'S CONNECT</span>
          <h2>Have an idea?</h2>
          <p>Explore my work and connect through GitHub.</p>
          <a href="https://github.com/siddharthpatel24347-dev" target="_blank" rel="noreferrer" className="primary-button">Connect on GitHub ↗</a>
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
              <button className={activeTab === "preview" ? "active" : ""} onClick={() => setActiveTab("preview")}>Preview</button>
              <button className={activeTab === "html" ? "active" : ""} onClick={() => setActiveTab("html")}>HTML Code</button>
              <button className={activeTab === "css" ? "active" : ""} onClick={() => setActiveTab("css")}>CSS Code</button>
            </div>

            {activeTab === "preview" && (
              <p className="modal-note">
                Live preview. Select HTML Code or CSS Code to view and copy the matching example.
              </p>
            )}

            {activeTab === "html" && (
              <>
                <pre className="effect-code"><code>{snippets[selected.type].html}</code></pre>
                <button
                  className="primary-button copy-button"
                  onClick={() => copyCode(snippets[selected.type].html)}
                >
                  Copy HTML Code
                </button>
              </>
            )}

            {activeTab === "css" && (
              <>
                <pre className="effect-code"><code>{snippets[selected.type].css}</code></pre>
                <button
                  className="primary-button copy-button"
                  onClick={() => copyCode(snippets[selected.type].css)}
                >
                  Copy CSS Code
                </button>
              </>
            )}

            {copyStatus && <p className="copy-status">{copyStatus}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
