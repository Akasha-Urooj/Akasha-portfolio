import { motion } from "framer-motion";

const skills = [
  {
    number: "01",
    title: "Programming",
    items: ["Python", "JavaScript", "C++", "Git"],
  },
  {
    number: "02",
    title: "Machine Learning",
    items: ["Scikit-learn", "Pandas", "NumPy", "Explainable AI"],
  },
  {
    number: "03",
    title: "Deep Learning",
    items: ["PyTorch", "CNN", "ResNet", "LSTM"],
  },
  {
    number: "04",
    title: "AI Systems",
    items: ["LLMs", "Agentic AI", "Multi-Agent Systems", "NLP"],
  },
  {
    number: "05",
    title: "Computer Vision",
    items: ["OpenCV", "Object Detection", "Medical Imaging", "Grad-CAM"],
  },
  {
    number: "06",
    title: "Tools & Frameworks",
    items: ["Streamlit", "React", "Three.js", "APIs"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>// TECHNICAL STACK</span>

          <h2>
            Tools I use to
            <br />
            <strong>build.</strong>
          </h2>

          <p>
            Technologies and tools I use to design, train and build
            intelligent systems.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
            >
              <span className="skill-number">
                {skill.number}
              </span>

              <h3>{skill.title}</h3>

              <div className="skill-items">
                {skill.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
