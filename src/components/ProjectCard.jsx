import { motion } from "framer-motion";

function ProjectCard({ project, index }) {
  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
    >
      <div className="project-card-top">
        <span className="project-number">
          0{index + 1}
        </span>

        <span className="project-category">
          {project.category}
        </span>

        <span className="project-arrow">
          ↗
        </span>
      </div>

      <div className="project-card-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>
      </div>

      <div className="project-tech">
        {project.technologies.map((technology) => (
          <span key={technology}>
            {technology}
          </span>
        ))}
      </div>

      <div className="project-card-line"></div>
    </motion.article>
  );
}

export default ProjectCard;
