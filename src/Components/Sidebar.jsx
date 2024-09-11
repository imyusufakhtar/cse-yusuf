import { Link } from 'react-router-dom';

const Sidebar = ({ activeComponent, isSidebarActive, closeSidebar }) => {
    return (
        <aside className={`sidebar ${isSidebarActive ? 'active' : ''}`} id="sidebar">
            <div className="sidebar-header">
                <h2><img src="images/Medium-pic.jpg" alt="Logo" className="header-image" /> Md Yusuf</h2>
            </div>
            <ul>
                <li className={activeComponent === "Home Page" ? "active" : ""}>
                    <Link to="/home-page" onClick={closeSidebar}><i className="fas fa-home icon"></i> Home Page</Link>
                </li>
                <li className={activeComponent === "About Me" ? "active" : ""}>
                    <Link to="/about-me" onClick={closeSidebar}><i className="fas fa-user-tie icon"></i> About Me</Link>
                </li>
                <li className={activeComponent === "Education" ? "active" : ""}>
                    <Link to="/education" onClick={closeSidebar}><i className="fas fa-user-graduate icon"></i> Education</Link>
                </li>
                <li className={activeComponent === "Experience" ? "active" : ""}>
                    <Link to="/experience" onClick={closeSidebar}><i className="fas fa-briefcase icon"></i> Experience</Link>
                </li>
                <li className={activeComponent === "Projects" ? "active" : ""}>
                    <Link to="/projects" onClick={closeSidebar}><i className="fas fa-project-diagram icon"></i> Projects</Link>
                </li>
                <li className={activeComponent === "Resume" ? "active" : ""}>
                    <Link to="/resume" onClick={closeSidebar}><i className="fas fa-file-alt icon"></i> Resume</Link>
                </li>
                <li className={activeComponent === "Settings" ? "active" : ""}>
                    <Link to="/settings" onClick={closeSidebar}><i className="fas fa-cogs icon"></i> Settings</Link>
                </li>
                <li className={activeComponent === "Contact Me" ? "active" : ""}>
                    <Link to="/contact-me" onClick={closeSidebar}><i className="fas fa-envelope icon"></i> Contact Me</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
