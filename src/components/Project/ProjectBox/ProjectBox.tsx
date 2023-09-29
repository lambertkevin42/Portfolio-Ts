import React from 'react';
import '../ProjectBox/projectbox.scss';
import ToggleCardProjectScotch from './ToggleCardsProject/ToggleCardProjectScotch';

interface ProjectBoxProps {
  title: string;
  techno: string;
  techno1: string;
  techno2?: string;
  techno3?: string;
  techno4?: string;
  techno5?: string;
  intro: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({
  title,
  techno,
  techno1,
  techno2,
  techno3,
  techno4,
  techno5,
  intro,
}) => {
  return (
    <div className="projectbox">
      <h2 className="projectbox-title">{title}</h2>
      <div className="projectbox-techno">
        <div className="projectbox-techno-simple">{techno}</div>
        <div className="projectbox-techno-simple">{techno1}</div>
        {techno2 ? <div className="projectbox-techno-simple">{techno2}</div> : null}
        {techno3 ? <div className="projectbox-techno-simple">{techno3}</div> : null}
        {techno4 ? <div className="projectbox-techno-simple">{techno4}</div> : null}
        {techno5 ? <div className="projectbox-techno-simple">{techno5}</div> : null}
      </div>
      <p className="projectbox- intro">{intro}</p>
      <ToggleCardProjectScotch imgAlt1="" imgAlt2="" imgAlt3="" />
    </div>
  );
};

export default ProjectBox;
