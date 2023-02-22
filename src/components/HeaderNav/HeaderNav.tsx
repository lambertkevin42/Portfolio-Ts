import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleBurger } from '../../actions/burgerActions';
import { RootState } from "../../reducers/rootReducer";
import '../HeaderNav/headernav.scss';

const HeaderNav: React.FC = () => {
    const dispatch = useDispatch();
    const { burgerIsOpen } = useSelector((state: RootState) => state.burger);
    const handleClick = () => {
        dispatch(toggleBurger());
    };

    return(
        <nav className="header-nav">
            <ul className={`${burgerIsOpen ? 'header-nav-links' : 'header-nav-links--closed'}`}>
                <NavLink
                    className="header-nav-link"
                    to=""
                >
                    About
                </NavLink>
                <NavLink
                    className="header-nav-link"
                    to=""
                >
                    lorem
                </NavLink>
                <NavLink
                    className="header-nav-link"
                    to=""
                >
                    lorem
                </NavLink>
            </ul>
            <button
                aria-label="toggleBurger"
                type="button"
                className={`${burgerIsOpen ? 'header-nav-button' : 'header-nav-button--closed'}`}
                onClick={handleClick}
            />
        </nav>
    );
}

export default HeaderNav;