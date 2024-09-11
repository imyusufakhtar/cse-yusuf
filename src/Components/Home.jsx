import React, { useState, useEffect } from 'react';
import './Home.css';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Function to fetch data from an API
    const fetchData = async () => {
      try {
        const response = await fetch("OtherData/HomeData.json"); // Replace with your API endpoint
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
      <div className="content">
        <section className="intro-section">
          <div className="intro-text">
            <h1>{data.h1}</h1>
            <p>{data.p}</p>
            <div className="social-links">
              <a href="https://github.com/imyusufakhtar" target="_blank" className="fab fa-github"></a>
              <a href="https://www.linkedin.com/in/imdyusuf/" target="_blank" className="fab fa-linkedin"></a>
              <a href="https://x.com/imyusufakhtar" target="_blank" className="fab fa-twitter"></a>
            </div>
            <a href="mailto:imyusufakhtar@gmail.com" className="button">Contact Me</a>
          </div>
          <img src={data.img.src} alt={data.img.alt} className="introduction-image" />
        </section>
      </div>
    </>
  );
};

export default Home;
