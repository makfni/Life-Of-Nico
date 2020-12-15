import React, { Component } from 'react'
import { Ul } from './SideDrawerStyle'


const SideDrawer = ({ open }) => {
    return (
        <Ul open={open}>
            <ul className="navbar" style={{ boxShadow: 'none' }}>
                {/* style={{ boxShadow: 'none' }} */}

                {/* <img id="hamburger" src="/images/hamburger-icon.png" /> */}
                <li>
                    <a href="/about-me" aria-haspopup="true">About Me</a>
                </li>
                <li>
                    <a href="/photography" aria-haspopup="true">My Photography</a>
                </li>
                <li>
                    <a href="https://github.com/makfni">Projects</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="/login-register" id="auth">Login/Register</a>
                </li>
            </ul>
            {/* </NavbarContainer> */}


        </Ul>
    )
}

export default SideDrawer