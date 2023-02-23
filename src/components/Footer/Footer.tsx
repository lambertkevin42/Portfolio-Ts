import './footer.scss';
import insta from '../../assets/images/insta.png';
import linkedin from '../../assets/images/linkedin.png';
import github from '../../assets/images/github.png';


const Footer: React.FC = () => {
    return (
        <div className="footer">
            <img className="footer-logo" src={insta} alt="logo instagram"/>
            <img className="footer-logo" src={linkedin} alt="logo linkedin"/>
            <img className="footer-logo" src={github} alt="logo github"/>
        </div>
    );
}

export default Footer;




