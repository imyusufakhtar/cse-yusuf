import React, { useState, useEffect } from 'react';

const HighlightSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("EducationsData/HighlightSection.json"); // Replace with your API endpoint
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
    <section className="highlight-section">
      <div className="highlight-content">
        <div className="highlight-text">
          <h2>{data.h2}</h2>
          {data.p.map((paragraph, index) => {
            if (typeof paragraph === 'string') {
              return <p key={index}>{paragraph}</p>;
            } else {
              return (
                <p key={index}>
                  <strong>{paragraph.text}</strong>{paragraph.strong}
                </p>
              );
            }
          })}
          <a href={data.a.href} target={data.a.target} className="explore-more">
            {data.a.text}
          </a>
        </div>
        <div className="highlight-image">
          <img src={data.img.src} alt={data.img.alt} />
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
