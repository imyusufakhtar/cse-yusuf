import React, { useState, useEffect } from 'react';

const ResumeSidebar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("ResumeData/ResumeSidebar.json"); // Replace with your API endpoint
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
    <div className="portfolio-resume-sidebar">
      <img src={data.img.src} alt={data.img.alt} />
      <div className="portfolio-about-me-section">
        <h2>{data.h2}</h2>
        <p>{data.p}</p>
      </div>
    </div>
  );
};

export default ResumeSidebar;
