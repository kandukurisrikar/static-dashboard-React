import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import Select from 'react-select';

// Register components
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Generate random data with a comparative middle section
const generateRandomData = (numBars) => {
  const data = Array.from({ length: numBars }, () => Math.floor(Math.random() * 10000));
  // Create a peak at bars 5-6
  data[4] = Math.floor(Math.random() * 5000) + 5000;
  data[5] = Math.floor(Math.random() * 5000) + 5000;
  return data;
};

// Number of bars
const numBars = 30; // Total number of bars

// Function to generate data based on the selected view
const generateDataForView = (view) => {
  let bars = numBars;
  if (view === 'Weekly') bars = 7;
  else if (view === 'Monthly') bars = 30;
  return generateRandomData(bars);
};

// Options for the dropdown
const options = [
  { value: 'Weekly', label: 'Weekly' },
  { value: 'Monthly', label: 'Monthly' },
  { value: 'Yearly', label: 'Yearly' },
];

// Styles for react-select
const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'black',
    backgroundColor: state.isSelected ? '#007bff' : 'white',
  }),
  control: (provided) => ({
    ...provided,
    borderRadius: '8px',
    borderColor: '#007bff',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#0056b3',
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: 'black',
  }),
};

// Chart options
const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      title: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        autoSkip: false,
        font: {
          size: 10, // Smaller font size for x-axis ticks
        },
      },
      border: {
        display: false,
      },
    },
    y: {
      title: {
        display: false,
      },
      grid: {
        display: true,
        color: '#e0e0e0',
        borderDash: [5, 5],
        drawBorder: false,
      },
      ticks: {
        callback: (value) => {
          return value / 1000 + 'k'; // Adding 'k' for thousands
        },
        stepSize: 2000,
        font: {
          size: 10, // Smaller font size for y-axis ticks
        },
      },
      min: 0,
      max: 10000,
      border: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      labels: {
        font: {
          size: 12, // Smaller font size for legend labels
        },
      },
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          return context.dataset.label + ': ' + (context.raw / 1000) + 'k'; // Displaying data in thousands
        },
      },
    },
  },
};

const ActivitySection = () => {
  const [view, setView] = useState('Weekly');
  const [data, setData] = useState({
    labels: Array.from({ length: 7 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: 'Activity',
        data: generateDataForView('Weekly'),
        backgroundColor: '#42A5F5',
        borderRadius: 4,
        barThickness: 6,
      },
    ],
  });

  const handleChange = (selectedOption) => {
    const selectedView = selectedOption.value;
    const bars = selectedView === 'Weekly' ? 7 : selectedView === 'Monthly' ? 30 : 30;
    setView(selectedView);
    setData({
      labels: Array.from({ length: bars }, (_, i) => (i + 1).toString()),
      datasets: [
        {
          label: 'Activity',
          data: generateDataForView(selectedView),
          backgroundColor: '#42A5F5',
          borderRadius: 4,
          barThickness: 6,
        },
      ],
    });
  };

  return (
    <div style={{ width: '100%', height: '300px', marginBottom: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <h3 style={{ fontSize: '24px' }}>Activity</h3>
        <Select
          options={options}
          onChange={handleChange}
          value={options.find((option) => option.value === view)}
          styles={customStyles}
        />
      </div>
      <Bar data={data} options={chartOptions} />
    </div>
  );
};

export default ActivitySection;
