import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("AboutMeData/AboutMe.json"); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  // Render loading state or error message if needed
  if (!data) {
    return <div className="loading"></div>;
  }

  return (
    <section className="about-me-section">
      <div className="about-me-text">
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
      </div>
      <img src={data.img.src} alt={data.img.alt} />
    </section>
  );
};

export default AboutSection;
