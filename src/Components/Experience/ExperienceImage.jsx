import React, { useState, useEffect } from 'react';

const ExperienceImage = () => {
  const [imageData, setImageData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("ExperienceData/ExperienceImage.json"); // Replace with your API endpoint
        const result = await response.json();
        setImageData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once

  if (!imageData) {
    return <div className="loading"></div>;
  }

  return (
    <>
      <img src={imageData.img.src} alt={imageData.img.alt} className="profile-img" />
    </>
  );
};

export default ExperienceImage;
