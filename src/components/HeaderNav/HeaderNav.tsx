import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBurger } from '../../actions/burgerActions';
import { RootState } from '../../reducers/rootReducer';
import '../HeaderNav/headernav.scss';

interface HeaderNavProps {
  link1: string;
  link2: string;
  link3: string;
  link4: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ link1, link2, link3, link4 }) => {
  const dispatch = useDispatch();
  const { burgerIsOpen } = useSelector((state: RootState) => state.burger);
  const navRef = useRef(null);

  const handleClick = () => {
    dispatch(toggleBurger());
  };

  const scrollToComponent = (componentId: string) => {
    const component = document.getElementById(componentId);
    if (component) {
      window.scrollTo({
        top: component.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="header-nav" ref={navRef}>
      <ul className={`${burgerIsOpen ? 'header-nav-links' : 'header-nav-links--closed'}`}>
        <li className="header-nav-link" onClick={() => scrollToComponent('SkillCards')}>
          {link1}
        </li>
        <li className="header-nav-link" onClick={() => scrollToComponent('MyExperiences')}>
          {link2}
        </li>
        <li className="header-nav-link" onClick={() => scrollToComponent('Projects')}>
          {link3}
        </li>
        <li className="header-nav-link" onClick={() => scrollToComponent('Contact')}>
          {link4}
        </li>
      </ul>
      <button
        aria-label="toggleBurger"
        type="button"
        className={`${burgerIsOpen ? 'header-nav-button' : 'header-nav-button--closed'}`}
        onClick={handleClick}
      />
    </nav>
  );
};

export default HeaderNav;
