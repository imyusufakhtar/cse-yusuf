import React, { useState, useEffect } from "react";

const ProjectsContainer = () => {
  // State to store project data
  const [projects, setProjects] = useState([]);

  // Fetch data from JSON
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulating fetching data from a JSON file or API
        const response = await fetch("ProjectsData/ProjectLists.json");
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              {project.links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="project-link"
                  target={link.target}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProjectsContainer;
