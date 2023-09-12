import React from 'react';
import '../MyExperienceBox/myexperiencebox.scss';

interface MyExperienceBoxProps {
  date: string;
  title: string;
  intro: string;
  intro2: string;
  intro3: string;
}

const MyExperienceBox: React.FC<MyExperienceBoxProps> = ({
  date,
  title,
  intro,
  intro2,
  intro3,
}) => {
  return (
    <div className="myexperiencebox">
      <h2 className="myexperiencebox-date">{date}</h2>
      <h3 className="myexperiencebox-title">
        <a href="https://oclock.io/formations/developpeur-web">{title}</a>
      </h3>
      <p className="myexperiencebox-intro">{intro}</p>
      <p className="myexperiencebox-intro">{intro2}</p>
      <p className="myexperiencebox-intro">{intro3}</p>
    </div>
  );
};

export default MyExperienceBox;
