import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import '../Header/header.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <p className="header-text"><strong>KL</strong></p>
            <HeaderNav
                link1="about"
                link2="about"
                link3="about"
            />
        </div>
    );
}

export default Header;