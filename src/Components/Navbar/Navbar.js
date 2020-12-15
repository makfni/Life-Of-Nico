import React, { useState, useEffect } from 'react'
import { Nav } from './NavbarStyle'
import Hamburger from './Hamburger'

const NavBar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    return (

        <Nav scrollNav={scrollNav}>

            {/* <NavbarContainer> */}
            {/* <NavLogo to='/' className="logo">THREAD COUNT</NavLogo> */}
            <div className="nav-logo">
                {console.log('here')}
                <a id="logo" href="/">Life of Nicolas</a>
            </div>

            <Hamburger />


        </Nav>

    )
}


export default NavBar