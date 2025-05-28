import React, { useState } from "react";

export interface ProjectItemProps {
  title: string;
  description: string;
  thumbnail?: string; // 이미지 경로
  stacks?: string[]; // 사용 기술
  link?: string; // 배포/깃허브 등 외부 링크
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, thumbnail, stacks, link }) => {
  const [open, setOpen] = useState(false);

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
        className="relative group w-full md:w-96 h-64 overflow-hidden rounded-sm shadow-md bg-base-100 cursor-pointer"
        onClick={handleClick}
      >
        {thumbnail && (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        {/* 오버레이 */}
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg text-center">{title}</h3>
          <p className="text-base text-gray-200 text-center mb-2">{description}</p>
          {stacks && stacks.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2 justify-center">
              {stacks.map((stack) => (
                <span key={stack} className="badge badge-outline text-xs px-2 py-1 text-white border-white">
                  {stack}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* daisyUI 모달 */}
      <div className={`modal ${open ? 'modal-open' : ''}`} onClick={handleClose}>
        <div className="modal-box w-11/12 max-w-5xl h-5/6" onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <button 
              className="btn btn-sm btn-circle btn-ghost"
              onClick={handleClose}
            >
              ✕
            </button>
          </div>
          {link && (
            <iframe
              src={link}
              title={title}
              className="w-full h-full rounded"
              allowFullScreen
            />
          )}
        </div>

      </div>
    </>
  );
};

export default ProjectItem;
