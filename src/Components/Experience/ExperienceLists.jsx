import React, { useState, useEffect } from 'react';

const ExperienceLists = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("ExperienceData/ExperienceLists.json"); // Replace with your API endpoint
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
      <div className="experience-list">
        {data.experience.map((item, index) => (
          <div key={index} className="experience-item">
            <h3>{item.title}</h3>
            <p className="company-name">{item.company}</p>
            <p className="experience-duration">{item.duration}</p>
            <ul>
              {item.responsibilities.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ExperienceLists;
