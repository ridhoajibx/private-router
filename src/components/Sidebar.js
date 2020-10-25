import React from 'react';
import ProfileImg from '../assets/img/photo/mike.jpg';
import { FaCalendar, FaCog, FaHome } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const routesDashboard = [
    {
        path: "/app",
        name: "Dashboard",
        icon: FaHome
    },
    {
        path: "/app/date",
        name: "Date",
        icon: FaCalendar,
    },
    {
        path: "/app/setting",
        name: "Setting",
        icon: FaCog,
    },
]

const Sidebar = (props) => {
    console.log(props, "cek props location");
    return (
        <div className={`sidebar-wrapper sidebar-wrapper--${!props.toggleSide ? 'hide' : 'show'}`}>
            <div className="d-flex flex-column justify-content-center align-items-center my-4">
                <img src={ProfileImg} alt="" width="100" className="rounded-circle img-thumb" />
                <Link className="mt-2" to="/app/user">
                    Jumakri Ridho Fauzi
                </Link>
            </div>
            {
                routesDashboard.map((item, index) => (
                    <div key={index} className={`side-item`} >
                        <NavLink exact className="" to={item.path}>
                            {item.name}
                        </NavLink>
                    </div>
                ))
            }
        </div>
    );
}

export default Sidebar;
