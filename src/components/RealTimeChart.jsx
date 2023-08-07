import React, { useState, useEffect } from 'react';
import ApexChart from 'react-apexcharts';

const RealTimeChart = () => {
  // State to store real-time data
  const [data, setData] = useState([]);

  // Function to generate random data (replace this with your actual data source)
  const generateRandomData = () => {
    return Math.floor(Math.random() * 100);
  };

  useEffect(() => {
    // Simulate real-time data updates (replace this with your actual data source)
    const interval = setInterval(() => {
      setData((prevData) => [...prevData, { x: new Date().getTime(), y: generateRandomData() }]);
    }, 1000); // 1000ms interval for real-time updates

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  // Chart options
  const options = {
    chart: {
      id: 'realtime-chart',
      animations: {
        enabled: true,
        easing: 'linear',
        dynamicAnimation: {
          speed: 1000,
        },
      },
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      min: 0,
      max: 100,
    },
  };

  // Chart series
  const series = [
    {
      name: 'Data Series',
      data: data,
    },
  ];

  return (
    <div>
      <ApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
};

export default RealTimeChart;
