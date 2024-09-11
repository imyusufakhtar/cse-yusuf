import React, { useState, useEffect } from 'react';

const ResumeExperience = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("ResumeData/ResumeExp.json"); // Replace with your API endpoint
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
      {data.experience.map((item, index) => (
        <div className="portfolio-experience-card" key={index}>
          <h3>{item.h3}</h3>
          {item.p.map((paragraph, idx) => {
            if (typeof paragraph === 'string') {
              return <p key={idx}>{paragraph}</p>;
            } else {
              return (
                <p key={idx}>
                  <strong>{paragraph.strong}</strong> {paragraph.text}
                </p>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default ResumeExperience;
