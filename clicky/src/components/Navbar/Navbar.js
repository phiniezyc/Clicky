import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

// import logo from '../logo.svg';

const NavBar = () => (
    <div>
        <Navbar className="baseColor brand center" brand="logo goes here" left>
            <NavItem href="/">Getting started
            </NavItem>
            <NavItem href="/">Components</NavItem>
        </Navbar>
    </div>
);

export default NavBar;