import React from "react";
import { FaBars } from 'react-icons/fa';
import {Nav,
        NavbarContainer,
        NavLogo,
        MobileIcon,
        NavItem,
        NavMenu,
        NavLinks,
        NavBtn,
        NavBtnLink,
        } from './NavbarElements';
import logo from '../../images/logo.png';


const Navbar = ({ toggle }) => {
    return (
        <div>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='Home'>
                        <img src={ logo } style={{ width: 60, borderRadius: 5}}/>
                        <p style={{ marginLeft: 10, marginBottom: 0 }}>MocoFlip</p>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks className="d-flex justify-content-center">
                                <form action='/' method='get'>
                                    <label htmlFor='header-search'>
                                        <span className="visually-hidden align-items-center">Search Flip Books</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="header-search"
                                        placeholder="Search Flip Books"
                                        name="s"
                                    />
                                </form>
                                {' '}
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Home'>Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='Home'>Demo</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='TestimoniPage'>Testimoni</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </div>
    )
};


export default Navbar;