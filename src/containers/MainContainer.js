import React from 'react'
import logo from "../name_logo.png";
import {Navigation} from "./Navigation";
import Information from "../components/Information";
import Education from "../components/Education";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Teaching from "../components/Teaching";
import {Route, Switch} from "react-router-dom";


function MainContainer () {
    return (
        <div className="center">
            <img className="logo" alt="header" src={logo} />
            <Navigation/>
            <Switch>
                <Route path='/' component={Information} exact/>
                <Route path='/education' component={Education} exact/>
                <Route path='/work' component={Work} exact/>
                <Route path='/skills' component={Skills} exact/>
                <Route path='/projects' component={Projects} exact/>
                <Route path='/teaching' component={Teaching} exact/>
            </Switch>
        </div>
    )
}

export default MainContainer;