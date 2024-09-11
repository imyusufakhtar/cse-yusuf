import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import './Theme.css';
import AboutMain from './Components/AboutMe/AboutMain';
import ContactMain from './Components/ContactMe/ContactMain';
import EducationMain from './Components/Education/EducationMain';
import ExperienceMain from './Components/Experience/ExperienceMain';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import ProjectsMain from './Components/Projects/ProjectsMain';
import ResumeMain from './Components/Resume/ResumeMain';
import SettingMain from './Components/Settings/SettingMain';
import Sidebar from './Components/Sidebar';

function App() {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [activeComponent, setActiveComponent] = useState("Home Page");
  const location = useLocation();

  const handleSidebarToggle = () => {
    setIsSidebarActive(prevState => !prevState);
  };

  const closeSidebar = () => {
    setIsSidebarActive(false);
  };

  // Map route paths to their corresponding active component names
  const routeMap = {
    '/home-page': 'Home Page',
    '/about-me': 'About Me',
    '/education': 'Education',
    '/experience': 'Experience',
    '/projects': 'Projects',
    '/resume': 'Resume',
    '/settings': 'Settings',
    '/contact-me': 'Contact Me'
  };

  // Update activeComponent based on the current route
  useEffect(() => {
    const path = location.pathname;
    setActiveComponent(routeMap[path] || 'Home Page');
  }, [location]);

  return (
    <div className="container">
      <Sidebar 
        activeComponent={activeComponent} 
        isSidebarActive={isSidebarActive} 
        closeSidebar={closeSidebar} 
      />
      <main className="main-content">
        <Header 
          isSidebarActive={isSidebarActive} 
          onSidebarToggle={handleSidebarToggle} 
        />
        <Routes>
          <Route path="/home-page" element={<Home />} />
          <Route path="/about-me" element={<AboutMain />} />
          <Route path="/education" element={<EducationMain />} />
          <Route path="/experience" element={<ExperienceMain />} />
          <Route path="/projects" element={<ProjectsMain />} />
          <Route path="/resume" element={<ResumeMain />} />
          <Route path="/settings" element={<SettingMain />} />
          <Route path="/contact-me" element={<ContactMain />} />
          <Route path="/" element={<Navigate to="/home-page" />} />
          <Route path="*" element={<h2>404: Page not found</h2>} />
        </Routes>
        <Footer />
      </main>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
