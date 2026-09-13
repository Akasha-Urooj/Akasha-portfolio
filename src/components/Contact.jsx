import { motion } from "framer-motion";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        <motion.div
          className="contact-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>// GET IN TOUCH</span>

          <h2>
            Let's build
            <br />
            <strong>something.</strong>
          </h2>

          <p>
            Have an idea, project or opportunity?
            Let's connect and turn it into something meaningful.
          </p>
        </motion.div>


        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >

          <a
            href="mailto:akashaurooj542@gmail.com"
            className="contact-item"
          >
            <span className="contact-label">
              EMAIL
            </span>

            <span className="contact-value">
              akashaurooj542@gmail.com
            </span>

            <span className="contact-arrow">
              ↗
            </span>
          </a>


          <a
            href="https://github.com/Akasha-Urooj"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-label">
              GITHUB
            </span>

            <span className="contact-value">
              Akasha-Urooj
            </span>

            <span className="contact-arrow">
              ↗
            </span>
          </a>


          <a
            href="https://www.linkedin.com/in/akasha-urooj/"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-label">
              LINKEDIN
            </span>

            <span className="contact-value">
              Akasha Urooj
            </span>

            <span className="contact-arrow">
              ↗
            </span>
          </a>

        </motion.div>


        <motion.div
          className="contact-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <span>AKASHA UROOJ</span>
          <span>AI ENGINEER & DEVELOPER</span>
          <span>© 2026</span>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
