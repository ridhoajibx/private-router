import React from 'react';
import { FaPushed } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <span className="toggle-btn">
                <FaPushed />
                Dashboard
            </span>
            <div className="side-item">
                <Link className="active" to="/app">Dashboard</Link>
                <Link to="/app/date">Date</Link>
                <Link to="/app">Subscription</Link>
            </div>
        </div>
    );
}

export default Sidebar;
