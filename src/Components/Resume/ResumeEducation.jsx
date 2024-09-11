import React, { useState, useEffect } from 'react';

const ResumeEducation = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("ResumeData/ResumeEducation.json"); // Replace with your API endpoint
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
    <div className="portfolio-resume-section">
      <h2>{data.h2}</h2>
      <div className="portfolio-education-card">
        <h3>{data.h3}</h3>
        {data.p.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ResumeEducation;
