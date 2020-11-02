import React from 'react';
import ProfileImg from '../assets/img/photo/mike.jpg';
import { FaBookmark, FaCalendar, FaCog, FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

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
    {
        path: "/app/Subscription",
        name: "Subscription",
        icon: <FaBookmark />,
    },
]

const Sidebar = (props) => {
    console.log(props, "cek props location");
    return (
        <div className={`sidebar-wrapper sidebar-wrapper--${!props.toggleSide ? 'hide' : 'show'}`}>
            <div className="d-flex flex-column justify-content-center align-items-center my-4">
                <img src={props.user.photo ? props.user.photo : ProfileImg} alt="" width="100" className="rounded-circle img-thumb" />
                <NavLink className="mt-2" to="/app/user">
                    {props.user.name}
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

const mapStateToProps = (state) => {
    return {
        user: state.global.user
    }
}

export default connect (mapStateToProps) (Sidebar);
