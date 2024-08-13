import React from 'react';
import './Future.css';
import futureImage from '../Assets/original.jpg';

const Future = () => {
  return (
    <div className="future">
      <h2>Building the future</h2>
      <img src={futureImage} alt="Future" />
    </div>
  );
};

export default Future;
