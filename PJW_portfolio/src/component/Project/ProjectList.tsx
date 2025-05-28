import React from "react";
import ProjectItem from "./ProjectItem"
import { projects } from "../../data/project"

const ProjectList: React.FC = () => {
  console.log(projects)
  return (
    <section className="w-full mt-16 px-4">
      <h2 className="text-3xl font-extrabold mb-8 text-left text-4xl">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-x-0">
        {projects.map((project, idx) => (
          <ProjectItem key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
