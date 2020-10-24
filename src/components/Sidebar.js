import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = (props) => {
    
    return (
        <div className={`sidebar-wrapper sidebar-wrapper--${!props.toggleSide ? 'hide' : 'show'}`}>
            <div className={`side-item`} >
                <Link className="active" to="/app">Dashboard</Link>
                <Link to="/app/date">Date</Link>
                <Link to="/app">Subscription</Link>
            </div>
        </div>
    );
}

export default Sidebar;
