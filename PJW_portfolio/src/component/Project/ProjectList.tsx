import React from "react";
import ProjectItem from "./ProjectItem";
import { projects } from "../../data/project";

const ProjectList: React.FC = () => {
  return (
    <section className="mx-auto mt-20 w-full max-w-6xl px-5 sm:px-8 lg:px-10">
      <h2 className="mb-8 text-left text-3xl font-extrabold text-slate-950 sm:text-4xl">
        Projects
      </h2>
      <div className="grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectItem key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
