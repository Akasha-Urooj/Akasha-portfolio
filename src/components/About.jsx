import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <>
      <section className="about-section" id="about">
        <div className="about-container">

          {/* LEFT SIDE */}
          <motion.div
            className="about-heading"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>// ABOUT ME</span>

            <h2>
              More than
              <br />
              <strong>just AI.</strong>
            </h2>

            <p>
              Get to know the person behind the projects —
              my academic journey, ambitions, personality and
              the things that shape how I learn and work.
            </p>
          </motion.div>


          {/* RIGHT SIDE — TWO CARDS */}
          <motion.div
            className="about-cards"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            {/* ACADEMICS CARD */}
            <div
              className="about-profile-card"
              onClick={() => setActiveCard("academics")}
            >
              <div className="profile-card-number">
                01
              </div>

              <div className="profile-card-content">
                <span className="profile-card-label">
                  ACADEMIC KNOWLEDGE
                </span>

                <h3>
                  Academics
                </h3>

                <p>
                  My education journey, academic interests,
                  learning mindset and the areas I'm developing
                  deeper knowledge in.
                </p>
              </div>

              <div className="profile-card-bottom">
                <span>
                  EXPLORE ACADEMICS
                </span>

                <span className="profile-card-arrow">
                  ↗
                </span>
              </div>
            </div>


            {/* BEYOND ACADEMICS CARD */}
            <div
              className="about-profile-card"
              onClick={() => setActiveCard("personal")}
            >
              <div className="profile-card-number">
                02
              </div>

              <div className="profile-card-content">
                <span className="profile-card-label">
                  BEYOND ACADEMICS
                </span>

                <h3>
                  Who I Am
                </h3>

                <p>
                  My personality, goals, ambitions, working style,
                  personal interests and the things that motivate me.
                </p>
              </div>

              <div className="profile-card-bottom">
                <span>
                  GET TO KNOW ME
                </span>

                <span className="profile-card-arrow">
                  ↗
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      </section>


      {/* =====================================================
          ACADEMICS MODAL
      ===================================================== */}

      {activeCard === "academics" && (
        <div
          className="about-detail-overlay"
          onClick={() => setActiveCard(null)}
        >
          <motion.div
            className="about-detail-modal"
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="about-detail-close"
              onClick={() => setActiveCard(null)}
            >
              ×
            </button>

            <div className="detail-modal-heading">
              <span>// 01 — ACADEMICS</span>

              <h2>
                My academic
                <br />
                <strong>journey.</strong>
              </h2>

              <p>
                The academic path that has shaped my knowledge,
                interests and approach toward Artificial Intelligence.
              </p>
            </div>


            <div className="academic-details">

              <div className="academic-block">
                <span>EDUCATION JOURNEY</span>

                <h3>
                  Bachelor's in Artificial Intelligence
                </h3>

                <p className="academic-place">
                  University of Central Punjab
                </p>

                <p>
                  I am pursuing my Bachelor's degree in Artificial
                  Intelligence, building my foundation across
                  programming, mathematics, machine learning,
                  deep learning and intelligent systems.
                </p>
              </div>


              <div className="academic-block">
                <span>ACADEMIC PERFORMANCE</span>

                <div className="academic-stat-row">

                  <div className="academic-stat">
                    <strong>3.6</strong>
                    <small>GPA</small>
                  </div>

                  <div className="academic-stat">
                    <strong>AI</strong>
                    <small>DEGREE</small>
                  </div>

                  <div className="academic-stat">
                    <strong>2030</strong>
                    <small>GRADUATION</small>
                  </div>

                </div>

                <p>
                  I focus on understanding concepts properly rather
                  than only completing coursework. I like connecting
                  academic concepts with practical experimentation
                  and implementation.
                </p>
              </div>


              <div className="academic-block">
                <span>AREAS I'M INTERESTED IN</span>

                <div className="academic-tags">
                  <span>Artificial Intelligence</span>
                  <span>Machine Learning</span>
                  <span>Deep Learning</span>
                  <span>Computer Vision</span>
                  <span>Natural Language Processing</span>
                  <span>Generative AI</span>
                  <span>Agentic AI</span>
                </div>
              </div>


              <div className="academic-block">
                <span>TECHNICAL FOCUS</span>

                <p>
                  My technical learning is focused on understanding
                  how intelligent systems are designed, trained,
                  evaluated and turned into useful applications.
                </p>

                <div className="academic-focus-list">
                  <span>→ Programming & computational thinking</span>
                  <span>→ Machine learning fundamentals</span>
                  <span>→ Neural networks & deep learning</span>
                  <span>→ Computer vision</span>
                  <span>→ Generative & agentic AI</span>
                  <span>→ Building practical AI systems</span>
                </div>
              </div>


              <div className="academic-block">
                <span>HOW I LEARN</span>

                <p>
                  I learn best by combining theory with practice.
                  Once I understand a concept, I prefer experimenting
                  with it, building something around it and learning
                  from the problems I encounter along the way.
                </p>

                <p>
                  This approach helps me turn academic knowledge into
                  practical technical skills.
                </p>
              </div>

            </div>


            <div className="detail-modal-footer">
              <span>AKASHA UROOJ</span>
              <span>ACADEMIC PROFILE</span>

              <button onClick={() => setActiveCard(null)}>
                CLOSE ×
              </button>
            </div>

          </motion.div>
        </div>
      )}


      {/* =====================================================
          PERSONAL / BEYOND ACADEMICS MODAL
      ===================================================== */}

      {activeCard === "personal" && (
        <div
          className="about-detail-overlay"
          onClick={() => setActiveCard(null)}
        >
          <motion.div
            className="about-detail-modal"
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 25
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="about-detail-close"
              onClick={() => setActiveCard(null)}
            >
              ×
            </button>

            <div className="detail-modal-heading">
              <span>// 02 — BEYOND ACADEMICS</span>

              <h2>
                Who I am
                <br />
                <strong>outside the code.</strong>
              </h2>

              <p>
                The personality, values, ambitions and interests
                that shape me beyond my academic journey.
              </p>
            </div>


            <div className="personal-details">

              <div className="personal-block">
                <span>PERSONALITY</span>

                <h3>
                  Curious by nature.
                </h3>

                <p>
                  I'm naturally curious and enjoy understanding how
                  things work. When something interests me, I like
                  exploring it deeply instead of stopping at the
                  surface level.
                </p>

                <p>
                  I enjoy learning new things, experimenting with
                  ideas and challenging myself to improve.
                </p>
              </div>


              <div className="personal-block">
                <span>WORKING STYLE</span>

                <div className="personal-list">
                  <span>→ Learn by doing</span>
                  <span>→ Experiment and improve</span>
                  <span>→ Break complex problems into smaller parts</span>
                  <span>→ Stay open to new ideas</span>
                  <span>→ Focus on meaningful results</span>
                </div>
              </div>


              <div className="personal-block">
                <span>WHAT DRIVES ME</span>

                <p>
                  I'm motivated by growth — the feeling of learning
                  something I didn't know before and being able to
                  create something with that knowledge.
                </p>

                <p>
                  I find the process of taking an idea from a simple
                  thought and gradually turning it into something
                  functional especially rewarding.
                </p>
              </div>


              <div className="personal-block">
                <span>GOALS & AMBITIONS</span>

                <p>
                  My goal is to grow into a strong AI Engineer with
                  deep technical knowledge and the ability to build
                  intelligent systems that have real-world value.
                </p>

                <p>
                  I want to continue developing my expertise in
                  advanced AI, agentic systems and research-driven
                  technology while eventually building ideas of my own.
                </p>
              </div>


              <div className="personal-block">
                <span>PERSONAL INTERESTS</span>

                <div className="personal-tags">
                  <span>Learning</span>
                  <span>Technology</span>
                  <span>Creative Ideas</span>
                  <span>Problem Solving</span>
                  <span>Exploration</span>
                  <span>Self Development</span>
                </div>
              </div>


              <div className="personal-block">
                <span>MY MINDSET</span>

                <h3>
                  Always becoming.
                </h3>

                <p>
                  I don't see learning as something that ends with
                  a degree. I see it as an ongoing process of
                  becoming better, more capable and more confident
                  with every experience.
                </p>
              </div>

            </div>


            <div className="detail-modal-footer">
              <span>AKASHA UROOJ</span>
              <span>PERSONAL PROFILE</span>

              <button onClick={() => setActiveCard(null)}>
                CLOSE ×
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </>
  );
}

export default About;
