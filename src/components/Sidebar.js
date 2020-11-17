import React, { useEffect } from 'react';
import loadingSvg from '../assets/img/loading/loading.svg';
import { FaBookmark, FaCalendar, FaCog, FaHome } from 'react-icons/fa';
import { AiFillWallet } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUsers } from '../redux';
import { Spinner } from 'reactstrap';

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
        path: "/app/Budget",
        name: "Budget",
        icon: <AiFillWallet />,
    },
    {
        path: "/app/Subscription",
        name: "Subscription",
        icon: <FaBookmark />,
    },
    {
        path: "/app/setting",
        name: "Settings",
        icon: <FaCog />,
    },
]

const Sidebar = ({fetchUsers, loading, error, user, toogleSide}) => {
    useEffect(()=> {
        fetchUsers()
    }, [fetchUsers])
    return (
        <div className={`sidebar-wrapper sidebar-wrapper--${!toogleSide ? 'hide' : 'show'}`}>
            <div className="d-flex flex-column justify-content-center align-items-center my-4">
                {
                    loading ? <Spinner color="primary" /> : error ? <h4>{error}</h4> :
                        <>
                            <img src={!user.photo ? loadingSvg :user.photo} alt="" width="100" height="100" className="rounded-circle img-thumb" />
                            <NavLink className="mt-2" to="/app/user">
                                {user.name}
                            </NavLink>
                        </>
                }
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
        user: state.user.userData,
        loading: state.user.loading,
        error: state.user.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
