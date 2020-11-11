import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link, Route, Switch } from 'react-router-dom';
import DashboardLayouts from '../layouts/app/DashboardLayouts';
import MainLayouts from '../layouts/main/MainLayouts';
import User from '../pages/User';
import Dashboard from '../pages/Dashboard';
import Dates from '../pages/Dates';
import Home from '../pages/Home';
import Setting from '../pages/Setting';
import Subscription from '../pages/Subscribtion';
import PrivateRoute from './PrivateRoute';
import Product from '../pages/Product';
import Budget from '../pages/Budget';

const Index = (props) => {
    const [toggleSide, setToggleSide] = useState(false);
    const handleToggleSide = () => setToggleSide(!toggleSide)

    const display = (auth) => {
        return ({
            display: auth ? "block" : "none"
        })
    }

    return (
        <Switch>
            <Route exact path="/" >
                <MainLayouts display={display} >
                    <Home />
                </MainLayouts>
            </Route>

            <Route exact path="/Product" >
                <MainLayouts display={display} >
                    <Product />
                </MainLayouts>
            </Route>

            <PrivateRoute exact path="/app"
                comp={DashboardLayouts}
                child={Dashboard}
                display={display}
                toggleSide={toggleSide}
                handleToggleSide={handleToggleSide}
            />


            <PrivateRoute exact
                path="/app/schedule"
                comp={DashboardLayouts}
                child={Dates}
                display={display}
                toggleSide={toggleSide}
                handleToggleSide={handleToggleSide}
            />

            <PrivateRoute exact
                path="/app/setting"
                comp={DashboardLayouts}
                child={Setting}
                display={display}
                toggleSide={toggleSide}
                handleToggleSide={handleToggleSide}
            />

            <PrivateRoute exact
                path="/app/user"
                comp={DashboardLayouts}
                child={User}
                display={display}
                toggleSide={toggleSide}
                handleToggleSide={handleToggleSide}
            />

            <PrivateRoute exact
                path="/app/Subscription"
                comp={DashboardLayouts}
                child={Subscription}
                display={display}
                toggleSide={toggleSide}
                handleToggleSide={handleToggleSide}
            />

            <PrivateRoute exact
                path="/app/Budget"
                comp={DashboardLayouts}
                child={Budget}
                display={display}
                toggleSide={toggleSide}
                handleToggleSide={handleToggleSide}
            />

            <Route path="*" render={() => {
                return (
                    <div className='container'>
                        <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
                            <h3>404 This page not found</h3>
                            <div>
                                <Link className="btn btn-primary" to="/">Go Back to Home</Link>
                            </div>
                        </div>
                    </div>
                )
            }} />
        </Switch>
    );
}

const mapStateToProps = (state) => {
    return {
      auth: state.isAuthenticated,
    };
  };

export default connect(mapStateToProps)(Index);
