import React, { useState, useEffect } from 'react';

const ContactInfo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("OtherData/ContactInfo.json"); // Replace with your API endpoint
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
    <div className="contact-info">
      <h2>{data.h2}</h2>
      {data.p.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <div className="social-media">
        {data.socialMedia.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" title={item.platform}>
            <i className={item.iconClass}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
