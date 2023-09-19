import React from 'react';
import '../ProjectBox/projectbox.scss';

interface ProjectBoxProps {
  title: string;
  techno: string;
  intro: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ title, techno, intro }) => {
  return (
    <div className="projectbox">
      <h2 className="projectbox-title">{title}</h2>
      <div className="projectbox-techno">
        <ul>
          <li className="projectbox-techno-simple">{techno}</li>
          <li></li>
        </ul>
      </div>
      <p className="projectbox- intro">{intro}</p>
    </div>
  );
};

export default ProjectBox;
