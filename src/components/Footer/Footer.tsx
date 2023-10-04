import './footer.scss';
import insta from '../../assets/images/insta.webp';
import linkedin from '../../assets/images/linkedin.webp';
import github from '../../assets/images/github.webp';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a href="https://www.instagram.com/kevinlambert_scotch/">
        <img className="footer-logo" src={insta} alt="logo instagram" />
      </a>
      <a href="https://www.linkedin.com/in/k%C3%A9vin-lambert/">
        <img className="footer-logo" src={linkedin} alt="logo linkedin" />
      </a>
      <a href="https://github.com/lambertkevin42">
        <img className="footer-logo" src={github} alt="logo github" />
      </a>
    </div>
  );
};

export default Footer;
