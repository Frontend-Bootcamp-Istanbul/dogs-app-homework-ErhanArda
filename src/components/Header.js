import React, { useState } from 'react';
import { Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
} from 'reactstrap';
import navs from '../nav';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand>Dogs App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>

                        {
                            navs.map((nav) => {
                                return <NavItem>
                                    <NavLink>
                                        <Link to={nav.path}>
                                            {nav.title}
                                        </Link>
                                    </NavLink>
                                </NavItem>
                            })
                        }
                        {
                            /*
                                <NavItem>
                                    <NavLink>
                                        <Link to="/">
                                            Home Page
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/breed/golden-retriever">
                                        Goldens
                                        </Link>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink>
                                        <Link to="/about">
                                            About
                                        </Link>
                                    </NavLink>
                                </NavItem>
                            */
                        }
                    </Nav>
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default Header
