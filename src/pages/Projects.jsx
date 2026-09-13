import { useState } from "react";
import { motion } from "framer-motion";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>// MY WORK</span>

          <h2>
            Projects that
            <br />
            <strong>think.</strong>
          </h2>

          <p>
            A collection of AI, machine learning and intelligent
            systems I've designed and built.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="project-clickable"
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>

      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
