import { motion } from "framer-motion";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="project-modal"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <span className="modal-category">
          {project.category}
        </span>

        <h2>{project.title}</h2>

        <p className="modal-description">
          {project.description}
        </p>

        <div className="modal-section">
          <span>TECHNOLOGIES</span>

          <div className="modal-tech">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="modal-section">
          <span>PROJECT OVERVIEW</span>

          <p>
            This project was designed and developed as part of my
            AI engineering journey, focusing on practical intelligent
            systems and real-world problem solving.
          </p>
        </div>

        <div className="modal-footer">
          <span>AKASHA UROOJ</span>
          <span>AI ENGINEER</span>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectModal;
