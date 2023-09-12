import React from 'react';
import './slider.scss';
import slide1 from '../../assets/images/react.png';
import slide2 from '../../assets/images/redux.png';
import slide3 from '../../assets/images/Js.png';
import slide4 from '../../assets/images/css.png';
import slide5 from '../../assets/images/html.png';
import slide6 from '../../assets/images/php.png';
import slide7 from '../../assets/images/sass.png';
import slide8 from '../../assets/images/axios.png';
import slide9 from '../../assets/images/ts.png';

const SliderDev: React.FC = () => {
  return (
    <div className="slider">
      <div className="slider-content">
        <div className="slide1">
          <div className="slide-content">
            <h2>React</h2>
            <div className="slide-content-img">
              <img className="slide-content-img-size" src={slide1} />
            </div>
          </div>
        </div>
        <div className="slide2">
          <div className="slide-content">
            <h2>Redux</h2>
            <div className="slide-content-img">
              <img className="slide-content-img-size" src={slide2} />
            </div>
          </div>
        </div>
        <div className="slide3">
          <div className="slide-content">
            <h2>JS / CSS / HTML / PHP / SASS</h2>
            <div className="slide-content-img">
              <img className="slide-content-img-size" src={slide3} />
              <img className="slide-content-img-size" src={slide4} />
              <img className="slide-content-img-size" src={slide5} />
              <img className="slide-content-img-size" src={slide6} />
              <img className="slide-content-img-size" src={slide7} />
            </div>
          </div>
        </div>
        <div className="slide4">
          <div className="slide-content">
            <h2>AXIOS</h2>
            <div className="slide-content-img">
              <img className="slide-content-img-size" src={slide8} />
            </div>
          </div>
        </div>
        <div className="slide5">
          <div className="slide-content">
            <h2>Typescript</h2>
            <div className="slide-content-img">
              <img className="slide-content-img-size" src={slide9} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderDev;
