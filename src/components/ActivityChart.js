import React from 'react';
import { Line } from 'react-chartjs-2';
import './ActivityChart.css';

function ActivityChart() {
  const data = {
    labels: [...Array(31).keys()].map(i => i + 1),
    datasets: [
      {
        label: 'Activity',
        data: [12, 19, 3, 5, 2, 3, 9, 6, 8, 12, 19, 23, 15, 13, 9, 6, 12, 19, 23, 15, 13, 9, 6, 12, 19, 23, 15, 13, 9, 6],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return (
    <div className="activity-chart">
      <Line data={data} />
    </div>
  );
}

export default ActivityChart;
