import React, { useEffect, useState } from "react";

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    async function loadData() {
      console.log("getting projects");

      const _projects = await window.myApi.ProjectsRepository.list();
      console.log("projects", _projects);
      setProjects(_projects);
    }
    loadData();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <p>All my projects</p>
      {projects && (
        <ul>
          {projects.map((project) => (
            <li key={project.id}>{project.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { ProjectsPage };
