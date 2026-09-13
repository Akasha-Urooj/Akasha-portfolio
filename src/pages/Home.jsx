import "./Home.css";

function Home() {
  const codeLines = [
    "import torch",
    "from neural import Brain",
    "model = Brain()",
    "model.learn(data)",
    "AI.initialize()",
    "agent.run()",
    "while intelligence:",
    "learn()",
    "adapt()",
    "create()",
    "neural_net.forward()",
    "vision.detect()",
    "language.generate()",
    "future.build()",
  ];

  return (
    <section className="home" id="home">

      {/* CODE BACKGROUND */}
      <div className="code-rain">
        {Array.from({ length: 9 }).map(function (_, column) {
          return (
            <div
              className="code-column"
              key={column}
              style={{
                left: column * 12 + "%",
                animationDelay: column * 0.8 + "s",
              }}
            >
              {codeLines.map(function (line, index) {
                return (
                  <span key={index}>
                    {line}
                  </span>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* NAVBAR */}
      <nav className="home-nav">

        <a href="#home" className="logo">
          &lt;AKASHA/&gt;
        </a>

        <div className="nav-links">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#about">
            About
          </a>

          <a href="#projects">
            Projects
          </a>

          <a href="#contact">
            Contact
          </a>
        </div>

        <div className="nav-socials">
          <a
            href="https://github.com/Akasha-Urooj"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/akasha-urooj/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </nav>

      {/* HERO */}
      <div className="home-hero">

        {/* LEFT SIDE */}
        <div className="hero-copy">

          {/* PROFILE IMAGE */}
          <div
            className="profile-image-wrapper"
            style={{
              width: "112px",
              height: "112px",
              borderRadius: "50%",
              padding: "3px",
              background:
                "linear-gradient(135deg, #ffffff, #a855f7, #7c3aed, #ffffff)",
              boxShadow:
                "0 0 25px rgba(168, 85, 247, 0.35), 0 0 60px rgba(124, 58, 237, 0.15)",
              marginBottom: "28px",
            }}
          >
            <img
              src="/images/profile/profile.png"
              alt="Akasha Urooj"
              className="profile-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "50%",
                display: "block",
              }}
            />
          </div>

          <div className="availability">
            <span className="status-dot"></span>
            AVAILABLE FOR AI PROJECTS
          </div>

          <p className="hero-kicker">
            ARTIFICIAL INTELLIGENCE · MACHINE LEARNING
          </p>

          <h1>
            BUILDING
            <span>THE FUTURE</span>
            <strong>WITH AI.</strong>
          </h1>

          <p className="hero-description">
            I build intelligent systems that turn complex ideas
            into meaningful digital experiences.
          </p>

          <div className="hero-actions">

            <a
              href="#projects"
              className="primary-action"
            >
              EXPLORE MY WORK
              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="secondary-action"
            >
              LET'S CONNECT
            </a>

          </div>

        </div>

        {/* RIGHT SIDE — AI BRAIN */}
        <div className="brain-stage">

          <div className="brain-grid"></div>

          <div className="brain-orbit orbit-one"></div>
          <div className="brain-orbit orbit-two"></div>

          <div className="brain-glow"></div>

          <div className="brain">

            {/* HUMAN SIDE */}
            <div className="brain-half human-half">

              <div className="brain-fold fold-one"></div>
              <div className="brain-fold fold-two"></div>
              <div className="brain-fold fold-three"></div>
              <div className="brain-fold fold-four"></div>
              <div className="brain-fold fold-five"></div>

            </div>

            {/* CIRCUIT SIDE */}
            <div className="brain-half circuit-half">

              <div className="circuit-line line-one"></div>
              <div className="circuit-line line-two"></div>
              <div className="circuit-line line-three"></div>
              <div className="circuit-line line-four"></div>

              <span className="circuit-node node-one"></span>
              <span className="circuit-node node-two"></span>
              <span className="circuit-node node-three"></span>
              <span className="circuit-node node-four"></span>

            </div>

            <div className="brain-core"></div>

          </div>

          {/* ELECTRIC SPARKS */}
          <div className="spark spark-one"></div>
          <div className="spark spark-two"></div>
          <div className="spark spark-three"></div>
          <div className="spark spark-four"></div>
          <div className="spark spark-five"></div>

          <div className="brain-label">
            <span>NEURAL</span>
            <span>INTELLIGENCE</span>
          </div>

        </div>

      </div>

      {/* BOTTOM INFORMATION */}
      <div className="hero-meta">

        <div>
          <span>01</span>
          <p>AI DEVELOPER</p>
        </div>

        <div>
          <span>02</span>
          <p>AGENTIC AI</p>
        </div>

        <div>
          <span>03</span>
          <p>CREATIVE TECHNOLOGY</p>
        </div>

      </div>

    </section>
  );
}

export default Home;
