import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

import { NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export class Navigation extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg center">
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Navbar expand="lg">
                            
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/orchidnew">Orchid</Nav.Link>
                                    <Nav.Link href="/employee">Employee</Nav.Link>
                                    <Nav.Link href="/customer">Customer</Nav.Link>
                                    <Nav.Link href="/contactus">Contact Us</Nav.Link>
                                
                                <Link to="/login"><button type="button" class="btn btn-outline-light mr-3">LOGIN</button></Link>
                                <Link to="/register"><button type="button" class="btn btn-outline-light">REGISTER</button></Link>
                                

                            </Navbar.Collapse>
                        </Navbar>
                        <form class="form-inline my-2 my-lg-0">
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}