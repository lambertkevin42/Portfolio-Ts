import './totop.scss';

const ToTop: React.FC = () => {
  return (
    <div className="totop">
      <div
        className="totop-content"
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        &#9650;
      </div>
    </div>
  );
};

export default ToTop;
