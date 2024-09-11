import React, { useState, useEffect } from 'react';

const EducationSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("EducationsData/EducationSection.json"); // Replace with your API endpoint
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
    <section className="education-section">
      <img src={data.img.src} alt={data.img.alt} className="portfolio-profile-img" />
      <div className="education-text">
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
        <a href={data.a.href} className="explore-more">{data.a.text}</a>
      </div>
    </section>
  );
};

export default EducationSection;


