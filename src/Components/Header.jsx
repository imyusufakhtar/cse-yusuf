import Theme from "./Theme";

const Header = ({ onSidebarToggle }) => {
    return (
        <div className="header">
            <Theme/>
            <span className="menu-toggle" id="menuToggle" onClick={onSidebarToggle}>
                <i className="fas fa-bars"></i>
            </span>
        </div>
    );
}

export default Header;

