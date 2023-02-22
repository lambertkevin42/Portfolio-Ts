import React from 'react';
import HeaderNav from '../HeaderNav/HeaderNav';
import '../Header/header.scss';

const Header: React.FC = () => {
    return (
        <div className="header">
            <p className="header-text"><strong>KL</strong></p>
            <HeaderNav/>
        </div>
    );
}

export default Header;