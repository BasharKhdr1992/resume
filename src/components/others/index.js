import React from 'react';
import './index.css';

const index = () => {
  return (
    <div className="others">
      <h1 className="header">Others</h1>
      <div className="others-listing">
        <div className="others-entry">
          <h2 className="header others-entry-title">Languages:</h2>
          <p>Arabic (Native), English (Fluent), Dutch (Beginner)</p>
        </div>
        <div className="others-entry">
          <h2 className="header others-entry-title">Hobbies:</h2>
          <p>Gym, Football, Table Tennis, Swimming, Jogging</p>
        </div>
      </div>
    </div>
  );
};

export default index;
