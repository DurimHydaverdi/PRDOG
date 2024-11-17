import React from 'react';
import '../styles/services.scss';
import second from '../assets/second.png';

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="image-container">
        <img src={second} alt="Background Image" />
        <div className="overlay">
          <h1>$PRDOG</h1>
        </div>
      </div>
    </section>
  );
};

export default Services;
