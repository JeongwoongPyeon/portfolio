import React, { useState } from "react";

export interface ProjectItemProps {
  title: string;
  description: string;
  thumbnail?: string;
  stacks?: string[];
  techStack?: string[];
  link?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  description,
  thumbnail,
  stacks,
  techStack,
  link,
}) => {
  const [open, setOpen] = useState(false);
  const stackItems = stacks ?? techStack ?? [];

  const handleClick = () => {
    if (link) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="group relative h-64 w-full max-w-sm cursor-pointer overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        onClick={handleClick}
      >
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950/75 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <h3 className="mb-2 text-center text-2xl font-bold text-white drop-shadow-lg">
            {title}
          </h3>
          <p className="mb-3 text-center text-base text-gray-200">
            {description}
          </p>
          {stackItems.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {stackItems.map((stack) => (
                <span
                  key={stack}
                  className="badge badge-outline border-white px-2 py-1 text-xs text-white"
                >
                  {stack}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className={`modal ${open ? "modal-open" : ""}`} onClick={handleClose}>
        <div
          className="modal-box h-5/6 w-11/12 max-w-5xl"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">{title}</h3>
            <button
              className="btn btn-circle btn-ghost btn-sm"
              onClick={handleClose}
              aria-label="Close project preview"
            >
              X
            </button>
          </div>
          {link && (
            <iframe
              src={link}
              title={title}
              className="h-full w-full rounded"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
