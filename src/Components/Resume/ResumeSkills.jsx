import React, { useState, useEffect } from 'react';

const ResumeSkills = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("ResumeData/ResumeSkills.json"); // Replace with your API endpoint
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
      <div className="portfolio-skills-card">
        {data.skills.map((skill, index) => (
          <p key={index}>
            <strong>{skill.strong}</strong> {skill.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResumeSkills;
