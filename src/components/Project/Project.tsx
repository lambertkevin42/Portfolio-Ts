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
        intro="Ariane est une plateforme de mise en relation des divers acteurs de la chaine humanitaire et sociale. Ce projet Ariane a été réalisé en groupe de 4 (2 dev front en React & 2 dev back en Symfony). Cette Application tripartite a pour but de permettre la mise en relation de différents acteurs, afin de résoudre des difficultés spécifiques, telles que des carences matérielles ou humaines."
      />
      <ProjectBox
        title="Scotch Art"
        techno="React"
        techno1="Redux"
        techno2="SCSS"
        intro="ScothArt est un projet personnel visant à mettre en lumière les oeuvres artistiques que je produis à mes heures perdues. Pour ce projet je souhaitais créer un site gallerie simple et efficace sans superflux afin de mettre en avant uniquement mes oeuvres au scotch."
      />
      <ProjectBox2
        title="Portfolio"
        techno="React"
        techno1="Redux"
        techno2="SCSS"
        techno3="Typescript"
        intro="Ce projet est celui que vous visité actuellement. Il me permet de vous présenter brievement qui je suis et ce que je fais. J'espère qu'il vous plait et qu'il me permettra d'obtenir quelques belles oportunités. Si ce projet vous donne envie d'en apprendre plus sur moi et mes compétences de développeur web front ne rater pas l'occasion de me contacter, ça se passe juste un peu plus bas !!"
      />
    </div>
  );
};

export default Project;
