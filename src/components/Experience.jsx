import { motion } from "framer-motion";

const experiences = [
  {
    date: "2026",
    type: "INTERNSHIP",
    title: "Artificial Intelligence Intern",
    company: "CodeAlpha Internship Program",
    status: "COMPLETED",
    description:
      "Worked on practical AI projects involving machine learning, intelligent systems and real-world problem solving as part of a project-based internship.",
    technologies: [
      "Artificial Intelligence",
      "Python",
      "Machine Learning",
      "AI Projects",
    ],
  },
  {
    date: "2025 — 2026",
    type: "PROFESSIONAL EXPERIENCE",
    title: "Management Incharge",
    company: "Bright Way School",
    status: "EXPERIENCE",
    description:
      "Managed day-to-day administrative and operational responsibilities, coordinated activities, maintained records and supported smooth organizational operations.",
    technologies: [
      "Management",
      "Administration",
      "Coordination",
      "Communication",
      "Organization",
    ],
  },
];

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">

        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span>// EXPERIENCE</span>

          <h2>
            Where I've
            <br />
            <strong>grown.</strong>
          </h2>

          <p>
            A combination of professional experience and hands-on
            AI engineering work.
          </p>
        </motion.div>


        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.div
              className="experience-card"
              key={experience.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >

              <div className="experience-line"></div>

              <div className="experience-date">
                {experience.date}
              </div>

              <div className="experience-content">

                <div className="experience-top">
                  <div>
                    <span className="experience-type">
                      {experience.type}
                    </span>

                    <h3>{experience.title}</h3>

                    <p className="experience-company">
                      {experience.company}
                    </p>
                  </div>

                  <span className="experience-status">
                    {experience.status}
                  </span>
                </div>


                <p className="experience-description">
                  {experience.description}
                </p>


                <div className="experience-tech">
                  {experience.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;
