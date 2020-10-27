import React from 'react';
import ProfileImg from '../assets/img/photo/mike.jpg';
import { FaCalendar, FaCog, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const routesDashboard = [
    {
        path: "/app",
        name: "Dashboard",
        icon: < FaHome />
    },
    {
        path: "/app/schedule",
        name: "Schedule",
        icon: <FaCalendar />,
    },
    {
        path: "/app/setting",
        name: "Setting Password",
        icon: <FaCog />,
    },
]

const Sidebar = (props) => {
    console.log(props, "cek props location");
    return (
        <div className={`sidebar-wrapper sidebar-wrapper--${!props.toggleSide ? 'hide' : 'show'}`}>
            <div className="d-flex flex-column justify-content-center align-items-center my-4">
                <img src={ProfileImg} alt="" width="100" className="rounded-circle img-thumb" />
                <NavLink className="mt-2" to="/app/user">
                    Jumakri Ridho Fauzi
                </NavLink>
            </div>
            {
                routesDashboard.map((item, index) => (
                    <div key={index} className={`side-item`} >
                        <NavLink exact className="d-flex align-items-center" to={item.path}>
                            <span className="mr-2">{item.icon}</span> {item.name}
                        </NavLink>
                    </div>
                ))
            }
        </div>
    );
}

export default Sidebar;
