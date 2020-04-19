import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Home from "./core/Home";
import Base from './core/Base';
import Signup from './user/Signup';
import Signin from './user/Signin';


const Routes = () => {
    return (
        <Router>
           <Switch>
                <Route exact path="/" exact component={Home}/>
                <Route exact path="/signup" exact component={Signup}/>
                <Route exact path="/signin" exact component={Signin}/>
           </Switch> 
        </Router>
    )
}


export default Routes