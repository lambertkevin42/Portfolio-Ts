import React from 'react';
import './slider.scss';
import slide1 from '../../assets/images/react.png';
import slide4 from '../../assets/images/redux.png';
import slide2 from '../../assets/images/Js.png';
import slide6 from '../../assets/images/html.png';
import slide7 from '../../assets/images/css.png';
import slide3 from '../../assets/images/axios.png';
import slide5 from '../../assets/images/sass.png';

const SliderDev: React.FC = () => {
  return (
    <div className="slider">
      <div className="slider-content">
        <div className="slide1">
          <div className="slide-content">
            <h2>React</h2>
            <img className="slide-content-img" src={slide1} />
          </div>
        </div>
        <div className="slide2">
          <div className="slide-content">
            <h2>HTML / PHP</h2>
            <img className="slide-content-img" src={slide2} />
            <img className="slide-content-img" src={slide6} />
            <img className="slide-content-img" src={slide7} />
          </div>
        </div>
        <div className="slide3">
          <div className="slide-content">
            <h2>Axios</h2>
            <img className="slide-content-img" src={slide3} />
          </div>
        </div>
        <div className="slide4">
          <div className="slide-content">
            <h2>JS</h2>
            <img className="slide-content-img" src={slide4} />
          </div>
        </div>
        <div className="slide5">
          <div className="slide-content">
            <h2>SASS</h2>
            <img className="slide-content-img" src={slide5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderDev;
