import React from 'react';
import './Features.css';
import featureImage from '../Assets/1542298796.jpg'; // Import the image
import Image2 from '../Assets/earth.png'; // Import the image
import Image3 from '../Assets/work culture.png'; // Import the image

const Features = () => {
  return (
    <div className="features">
      <div className="feature-item">
        <img src={featureImage} alt="Feature 1" />
      </div>
      <div className="feature-item">
        <h2>Features</h2>
        <h3>Ought to Partake</h3>
      </div>
      <div className="feature-item">
        <img src={Image2} alt="Feature 2" />
      </div>
      <div className="feature-item">
        <img src={Image3} alt="Feature 3" />
      </div>
    </div>
  );
};

export default Features;
