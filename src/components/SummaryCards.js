import React from 'react';
import './SummaryCards.css';

function SummaryCards() {
  return (
    <div className="summary-cards">
      <div className="card">Total Orders: 75</div>
      <div className="card">Total Delivered: 70</div>
      <div className="card">Total Cancelled: 5</div>
      <div className="card">Total Revenue: $12k</div>
      <div className="card">Net Profit: $6759.25</div>
    </div>
  );
}

export default SummaryCards;
