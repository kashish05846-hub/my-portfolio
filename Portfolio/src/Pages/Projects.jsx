import { useEffect, useState } from "react";
import axios from "axios";
import "./Projects.css";
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/projects");

        setProjects(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();
  }, []);

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p>MY RECENT WORK</p>
          <h1>Projects</h1>
        </div>

        {loading ? (
          <div className="loading">Loading projects...</div>
        ) : projects.length === 0 ? (
          <div className="empty-project">
            <h2>No Projects Found</h2>
            <p>Add your projects from MongoDB.</p>
          </div>
        ) : (
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={project._id}>
                <span className="project-number">0{index + 1}</span>

                <h2>{project.title}</h2>

                <p>{project.description}</p>

                <p className="project-tech">{project.technologies}</p>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
