import React, { Component } from 'react'
import NavBar from '../../Components/Navbar/Navbar'
import AboutMe from './AboutMeStyle'
import Footer from '../../Components/Footer/Footer'

export default class aboutMe extends Component {
    render() {
        return (
            <div className="body" style={{ paddingLeft: '70px', paddingRight: '70px' }}>
                <AboutMe>
                    <NavBar />
                    <div className="content">
                        <div className="about-me">
                            <img src="/images/DSC_0796.jpg" alt="me" id="photo" />
                            <div className="text">
                                <a>
                                    Welcome to my page, portfolio, project, whatever this is! My name is Nicolas Mak-Fan and I will being
                                    graduating from Carleton Univeristy with a bachelor's degree in computer science. I decided to make this website
                                    to display my skillset in full stack developement and also to just learn more about React cause well.. it's fun!
                                    I find joy in watching my creation come to life and for that reason, full stack development is among my top hobbies.
                                </a>
                            </div>
                        </div>
                    </div>
                </AboutMe>
                <Footer />
            </div>
        )
    }
}
