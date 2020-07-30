import React, {Component} from 'react'

import {NavLink} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'


export class Navigation extends Component{

    render () {
        return (

            <Navbar className="nav-bar">
                <Nav>
                    <NavLink  className="nav-link" activeClassName="activeRoute" activeStyle={{color: 'mediumpurple'}} exact={true} to="/">
                        Information
                    </NavLink>
                    <NavLink  className="nav-link"  activeClassName="activeRoute" activeStyle={{color: 'mediumpurple'}} to="/education">
                        Education
                    </NavLink>
                    <NavLink  className="nav-link"  activeClassName="activeRoute" activeStyle={{color: 'mediumpurple'}} to="/work" >
                        Work
                    </NavLink>
                    <NavLink  className="nav-link"  activeClassName="activeRoute" activeStyle={{color: 'mediumpurple'}} to="/skills">
                        Skills
                    </NavLink>
                    <NavLink  className="nav-link"  activeClassName="activeRoute" activeStyle={{color: 'mediumpurple'}} to="/projects">
                        Projects
                    </NavLink>
                    <NavLink  className="nav-link" activeClassName="activeRoute" activeStyle={{color: 'mediumpurple'}} to="/teaching">
                        Teaching
                    </NavLink>
                </Nav>
            </Navbar>
        )
    }
}