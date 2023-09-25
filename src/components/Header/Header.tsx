import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import '../Header/header.scss';

const Header: React.FC = () => {
  return (
    <div className="header">
      <p className="header-text">
        <strong>KL</strong>
      </p>
      <HeaderNav link1="Mes Skills" link2="Mes Expériences" link3="Mes Projets" />
    </div>
  );
};

export default Header;
