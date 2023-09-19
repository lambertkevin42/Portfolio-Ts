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
      <ProjectBox
        title="Scotch Art"
        techno="React"
        techno1="React"
        intro="Bonjour ceci est un projet perso"
      />
      <ProjectBox
        title="Scotch Art"
        techno="React"
        techno1="React"
        techno2="React"
        techno3="React"
        intro="Bonjour ceci est un projet perso"
      />
    </div>
  );
};

export default Project;
