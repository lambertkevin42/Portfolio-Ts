import React from 'react';
import ProjectBox from './ProjectBox/ProjectBox';
import ProjectBox1 from './ProjectBox/ProjectBox1';
import '../Project/project.scss';
import ProjectBox2 from './ProjectBox/ProjectBox2';

interface ProjectProps {
  title: string;
  id: string;
}

const Project: React.FC<ProjectProps> = ({ title, id }) => {
  return (
    <div className="project" id={id}>
      <h2 className="project-title">{title}</h2>
      <ProjectBox
        title="Scotch Art"
        techno="React"
        techno1="Redux"
        techno2="SCSS"
        intro="Bonjour ceci est un projet perso"
      />
      <ProjectBox1
        title="Ariane"
        techno="React"
        techno1="Redux"
        techno2="SCSS"
        techno3="Symfony"
        techno4="API Rest"
        techno5="MySQL"
        intro="Bonjour ceci est un projet perso"
      />
      <ProjectBox2
        title="Ariane"
        techno="React"
        techno1="Redux"
        techno2="SCSS"
        techno3="Typescript"
        intro="Bonjour ceci est un projet perso"
      />
    </div>
  );
};

export default Project;
