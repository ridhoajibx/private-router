import React, { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import DashboardLayouts from '../layouts/app/DashboardLayouts';
import MainLayouts from '../layouts/main/MainLayouts';
import User from '../pages/User';
import Dashboard from '../pages/Dashboard';
import Dates from '../pages/Dates';
import Home from '../pages/Home';
import Setting from '../pages/Setting';
import PrivateRoute from './PrivateRoute';

const Index = () => {
    const [toggleSide, setToggleSide] = useState(false);
    const handleToggleSide = () => setToggleSide(!toggleSide)

    const [Auth, setAuth] = useState(false);
    const display = (auth) => {
        return ({
            display: auth ? "block" : "none"
        })
    }
    return (
        <Switch>
            <Route exact path="/" >
                <MainLayouts setAuth={setAuth} Auth={Auth} display={display} >
                    <Home />
                </MainLayouts>
            </Route>

            <PrivateRoute exact path="/app"
                comp={DashboardLayouts}
                child={Dashboard}
                Auth={Auth}
                setAuth={setAuth}
                display={display}
                toggleSide={toggleSide}
                handleToggleSide={handleToggleSide}
            />

            <PrivateRoute exact
                path="/app/date"
                comp={DashboardLayouts}
                child={Dates}
                Auth={Auth}
                setAuth={setAuth}
                display={display}
                toggleSide={toggleSide}
                handleToggleSide={handleToggleSide}
            />

            <PrivateRoute exact
                path="/app/setting"
                comp={DashboardLayouts}
                child={Setting}
                Auth={Auth}
                setAuth={setAuth}
                display={display}
                toggleSide={toggleSide}
                handleToggleSide={handleToggleSide}
            />

            <PrivateRoute exact
                path="/app/user"
                comp={DashboardLayouts}
                child={User}
                Auth={Auth}
                setAuth={setAuth}
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

export default Index;
