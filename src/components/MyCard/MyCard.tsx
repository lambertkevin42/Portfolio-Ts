import React from 'react';
import '../MyCard/mycard.scss';
import moi from '../../assets/images/moiv2.webp';

interface MyCardProps {
  title: string;
  textUp: string;
  text1: string;
  text2: string;
  imgAlt: string;
}

const MyCard: React.FC<MyCardProps> = ({ title, textUp, text1, text2, imgAlt }) => {
  return (
    <div className="mycard">
      <h2 className="mycard-title">{title}</h2>
      <div className="mycard-infos">
        <p className="mycard-infos-textUp">{textUp}</p>
        <p className="mycard-infos-text">{text1}</p>
        <p className="mycard-infos-text">{text2}</p>
      </div>
      <img className="mycard-img" src={moi} alt={imgAlt} />
    </div>
  );
};

export default MyCard;
