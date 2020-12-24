import React from 'react'
import { Ul } from './SideDrawerStyle'
import { Link } from 'react-router-dom'

const SideDrawer = ({ open }) => {
    return (
        <Ul open={open}>
            <ul className="navbar" style={{ boxShadow: 'none' }}>
                {/* style={{ boxShadow: 'none' }} */}

                {/* <img id="hamburger" src="/images/hamburger-icon.png" /> */}
                <li>
                    <Link to="/about-me">About Me</Link>
                    {/* <a href="/about-me" aria-haspopup="true">About Me</a> */}
                </li>
                <li>
                    <Link to="/photography" aria-haspopup="true">My Photography</Link>
                </li>
                <li>
                    <a href="https://github.com/makfni">Projects</a>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
                <li>
                    <Link to="/login-register" id="auth">Login/Register</Link>
                </li>
            </ul>
            {/* </NavbarContainer> */}


        </Ul>
    )
}

export default SideDrawer