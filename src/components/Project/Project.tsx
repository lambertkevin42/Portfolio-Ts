import React from 'react';
import '../Project/project.scss';

interface ProjectProps {
  title: string;
}

const Project: React.FC<ProjectProps> = ({ title }) => {
  return (
    <div className="project">
      <h2 className="project-title">{title}</h2>
    </div>
  );
};

export default Project;
