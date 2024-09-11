import React, { useState, useEffect } from 'react';

const ResumeProjects = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("ResumeData/ResumeProject.json"); // Replace with your API endpoint
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
      {data.projects.map((project, index) => (
        <div key={index} className="portfolio-project-card">
          <h3>{project.h3}</h3>
          {project.p.map((paragraph, paraIndex) => {
            if (typeof paragraph === 'string') {
              return <p key={paraIndex}>{paragraph}</p>;
            } else if (paragraph.a) {
              return (
                <a key={paraIndex} href={paragraph.a.href} target="_blank">
                  {paragraph.a.text}
                </a>
              );
            } else {
              return (
                <p key={paraIndex}>
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

export default ResumeProjects;
