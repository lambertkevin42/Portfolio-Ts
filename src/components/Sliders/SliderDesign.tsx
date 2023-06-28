import React from 'react';
import './slider.scss';
import slide1 from '../../assets/images/id.png';
import slide2 from '../../assets/images/ps.png';
import slide3 from '../../assets/images/illustrator.png';
import slide4 from '../../assets/images/xd.png';
import slide5 from '../../assets/images/premiere.png';

const SliderDesign: React.FC = () => {
  return (
    <div className="slider">
      <div className="slider-content">
        <div className="slide1">
          <div className="slide-content">
            <h2>InDesign</h2>
            <img className="slide-content-img" src={slide1} />
          </div>
        </div>
        <div className="slide2">
          <div className="slide-content">
            <h2>PhotoShop</h2>
            <img className="slide-content-img" src={slide2} />
          </div>
        </div>
        <div className="slide3">
          <div className="slide-content">
            <h2>Illustrator</h2>
            <img className="slide-content-img" src={slide3} />
          </div>
        </div>
        <div className="slide4">
          <div className="slide-content">
            <h2>Adobe XD</h2>
            <img className="slide-content-img" src={slide4} />
          </div>
        </div>
        <div className="slide5">
          <div className="slide-content">
            <h2>Première Pro</h2>
            <img className="slide-content-img" src={slide5} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderDesign;
