import React from 'react';
import ProjectBox from './ProjectBox/ProjectBox';
import '../Project/project.scss';

interface ProjectProps {
  title: string;
}

const Project: React.FC<ProjectProps> = ({ title }) => {
  return (
    <div className="project">
      <h2 className="project-title">{title}</h2>
      <ProjectBox title="Scotch Art" techno="React" intro="Bonjour ceci est un projet perso" />
      <ProjectBox title="Scotch Art" techno="React" intro="Bonjour ceci est un projet perso" />
    </div>
  );
};

export default Project;
