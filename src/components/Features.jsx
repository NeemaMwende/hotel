import React from 'react';
import './Features.css';
import icon1 from '../Images/features-icon-1.png';
import icon2 from '../Images/features-icon-2.png';
import icon3 from '../Images/features-icon-3.png';
import icon4 from '../Images/features-icon-4.png';
import shape7 from '../Images/shape-7.png';
import shape8 from '../Images/shape-8.png';

const Features = () => {
  return (
    <section className="section features text-center" aria-label="features">
      <div className="container">
        <p className="section-subtitle label-2">Why Choose Us</p>
        <h2 className="headline-1 section-title">Our Strength</h2>
        <ul className="grid-list">
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img src={icon1} width="100" height="80" loading="lazy" alt="icon" />
              </div>
              <h3 className="title-2 card-title">Hygienic Food</h3>
              <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img src={icon2} width="100" height="80" loading="lazy" alt="icon" />
              </div>
              <h3 className="title-2 card-title">Fresh Environment</h3>
              <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img src={icon3} width="100" height="80" loading="lazy" alt="icon" />
              </div>
              <h3 className="title-2 card-title">Skilled Chefs</h3>
              <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </li>
          <li className="feature-item">
            <div className="feature-card">
              <div className="card-icon">
                <img src={icon4} width="100" height="80" loading="lazy" alt="icon" />
              </div>
              <h3 className="title-2 card-title">Event & Party</h3>
              <p className="label-1 card-text">Lorem Ipsum is simply dummy printing and typesetting.</p>
            </div>
          </li>
        </ul>
        <img src={shape7} width="208" height="178" loading="lazy" alt="shape" className="shape shape-1" />
        <img src={shape8} width="120" height="115" loading="lazy" alt="shape" className="shape shape-2" />
      </div>
    </section>
  );
};

export default Features;