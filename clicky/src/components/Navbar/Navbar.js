import React from 'react';
import { Navbar, NavItem } from 'react-materialize';

const NavBar = () => (
    <div>
        <Navbar className="baseColor" brand="Clicky" left>
            <NavItem href="/">Getting started
            </NavItem>
            <NavItem href="/">Components</NavItem>
        </Navbar>
    </div>
);

export default NavBar;