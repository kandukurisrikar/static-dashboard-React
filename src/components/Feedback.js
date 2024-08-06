import React from 'react';
import './Feedback.css';

function Feedback() {
  return (
    <div className="feedback">
      <h2>Customer's Feedback</h2>
      <div className="feedback-item">
        <p>Jenny Wilson: ★★★★★</p>
        <p>The food was excellent...</p>
      </div>
      <div className="feedback-item">
        <p>Dianne Russell: ★★★★★</p>
        <p>We enjoyed the Eggs Benedict...</p>
      </div>
      <div className="feedback-item">
        <p>Devon Lane: ★★★★★</p>
        <p>Normally we are wings fans...</p>
      </div>
    </div>
  );
}

export default Feedback;
