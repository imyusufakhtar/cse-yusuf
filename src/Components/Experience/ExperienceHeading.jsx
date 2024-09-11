import React, { useState, useEffect } from 'react';

const ExperienceHeading = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("ExperienceData/ExperienceHeading.json"); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  if (!data) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <h1>{data.h1}</h1>
      <p>{data.p}</p>
    </>
  );
};

export default ExperienceHeading;
