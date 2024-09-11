import React, { useState, useEffect } from 'react';

const Skills = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("AboutMeData/AboutSkills.json"); // Replace with your API endpoint
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
    <section className="skills-section">
      <h1>{data.h1}</h1>
      <div className="skills-container">
        {data.skillCards.map((card, index) => (
          <div key={index} className="skill-card">
            <img src={card.img.src} alt={card.img.alt} />
            <h2>{card.h2}</h2>
            <p>{card.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
