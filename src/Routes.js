import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./core/Home";
import Base from './core/Base';
import Signup from './user/Signup';
import Signin from './user/Signin';
import PrivateRoutes from './auth/helper/PrivateRoutes';
import AdminRoutes from './auth/helper/AdminRoutes';
import UserDashBoard from './user/UserDashBoard';
import AdminDashBoard from './user/AdminDashBoard';


const Routes = () => {
    return (
        <Router>
           <Switch>
                <Route exact path="/" exact component={Home}/>
                <Route exact path="/signup" exact component={Signup}/>
                <Route exact path="/signin" exact component={Signin}/>
                <PrivateRoutes exact path="/user/dashboard" exact component={UserDashBoard} />
                <AdminRoutes exact path="/admin/dashboard" exact component={AdminDashBoard} />
           </Switch> 
        </Router>
    )
}


export default Routes