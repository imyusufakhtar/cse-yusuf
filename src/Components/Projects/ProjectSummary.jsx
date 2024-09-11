import React, { useState, useEffect } from 'react';

const ProjectSummary = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("ProjectsData/ProjectSummary.json"); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Runs once when the component mounts

  if (!data) {
    return <div className="loading"></div>;
  }

  return (
    <div className="projects-summary">
      <img src={data.img.src} alt={data.img.alt} />
      <h1>{data.h1}</h1>
      <p>{data.p} <a href="https://github.com/imyusufakhtar" target="_blank">Explore more</a></p>
    </div>
  );
};

export default ProjectSummary;
