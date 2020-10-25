import React from 'react';
import ProfileImg from '../assets/img/photo/mike.jpg';
import { FaCalendar, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const routesDashboard = [
    {
      path: "/app",
      name: "Dashboard",
      icon: "FaHome"
    },
    {
      path: "/app/date",
      name: "Date",
      icon: "FaCalendar",
    },
    {
        path: "/app/Setting Password",
        name: "setting Password",
        icon: "FaCalendar",
      },
]

const Sidebar = (props) => {
    console.log(props, "cek props location");
    return (
        <div className={`sidebar-wrapper sidebar-wrapper--${!props.toggleSide ? 'hide' : 'show'}`}>
            <div className="d-flex justify-content-center align-items-center my-4">
                <img src={ProfileImg} alt="" width="100" className="rounded-circle img-thumb" />
            </div>
            {
                routesDashboard.map((item, index)=>(
                <div key={index} className={`side-item`} >
                    <Link className="" to={item.path}>
                        {item.name}
                    </Link>
                </div>
                ))
            }
        </div>
    );
}

export default Sidebar;
