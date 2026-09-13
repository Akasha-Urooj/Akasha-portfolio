import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-section" id="home">

      <div className="hero-atmosphere">
        <div className="hero-purple-glow glow-left"></div>
        <div className="hero-purple-glow glow-right"></div>

        <div className="hero-grid"></div>
      </div>


      <div className="hero-container">

        {/* LEFT CONTENT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="hero-status">
            <span></span>
            AVAILABLE FOR AI PROJECTS
          </div>


          <p className="hero-eyebrow">
            ARTIFICIAL INTELLIGENCE
          </p>


          <h1>
            Building
            <br />
            <span>intelligence.</span>
          </h1>


          <p className="hero-description">
            I build intelligent systems, AI-powered applications
            and technology that turns complex ideas into
            meaningful experiences.
          </p>


          <div className="hero-buttons">

            <a
              href="#projects"
              className="hero-primary-button"
            >
              Explore My Work
              <span>↗</span>
            </a>

            <a
              href="#contact"
              className="hero-secondary-button"
            >
              Let's Connect
            </a>

          </div>


          <div className="hero-terminal">

            <div className="terminal-top">
              <span></span>
              <span></span>
              <span></span>

              <small>
                akasha.ai
              </small>
            </div>

            <div className="terminal-code">

              <span>
                <b>const</b>{" "}
                future = <i>"AI"</i>;
              </span>

              <span>
                <b>model</b>.build();
              </span>

              <span>
                <b>system</b>.learn();
              </span>

              <span className="terminal-cursor">
                ▋
              </span>

            </div>

          </div>

        </motion.div>


        {/* BRAIN AREA */}

        <motion.div
          className="hero-brain-area"
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
        >

          <div className="brain-label brain-label-one">
            NEURAL CORE
          </div>

          <div className="brain-label brain-label-two">
            AI / 01
          </div>

          <div className="brain-line brain-line-one"></div>
          <div className="brain-line brain-line-two"></div>

        </motion.div>

      </div>


      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>

        <div></div>
      </div>

    </section>
  );
}

export default Hero;
