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
      <ProjectBox1
        title="Ariane"
        techno="React"
        techno1="Redux"
        techno2="SCSS"
        techno3="Symfony"
        techno4="API Rest"
        techno5="MySQL"
        intro="Ariane est une plateforme de mise en relation des divers acteurs de la chaine humanitaire et sociale. Ce projet Ariane à été réalisé en groupe de 4 (2 dev front en React & 2 dev back en Symfony). Cette Application tripartite a pour but de permettre la mise en relation des différents acteurs sité précedement afin de résoudre des difficultés spécifiques, telles que des carences matérielles ou humaines"
      />
      <ProjectBox
        title="Scotch Art"
        techno="React"
        techno1="Redux"
        techno2="SCSS"
        intro="ScothArt est un projet personnel visant à mettre en lumière les oeuvres artistiques que je produit à mes heures perdues. Pour ce projet je souhaitais créer un site gallerie simple et efficace sans superflux afin de mettre en avant uniquement mes oeuvres au scotch. "
      />
      <ProjectBox2
        title="Portfolio"
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
