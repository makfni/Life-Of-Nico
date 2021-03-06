import React, { Component } from 'react'
import { Particles } from '@blackbox-vision/react-particles';
import { Content } from './MainPageStyle'
import FlashCards from '../../Components/Content/FlashCards'


class mainPage extends Component {
    render() {
        return (
            <Content>
                <div className="page-container">
                    <Particles
                        id="simple"
                        width="100%"
                        style={{
                            position: 'fixed',
                            top: '0',
                            left: '0',
                            zIndex: '-100',
                            backgroundColor: 'black',
                            backgroundSize: 'cover'
                        }}
                        params={{
                            particles: {
                                number: {
                                    value: 60,
                                },
                                size: {
                                    value: 3,
                                },
                            },
                            interactivity: {
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: 'repulse',
                                    },
                                },
                            },
                        }}
                    />
                    <div>
                        <h1 id="intro">Hi,<br />I'm Nick, <br /> Software Developer</h1>
                    </div>

                    <div className="solar-system">
                        <div className="github-orbit orbit">

                            <a href="https://github.com/makfni" alt="github">
                                <img src="https://img.icons8.com/nolan/64/github.png" id="github" />
                            </a>

                            <div className="linkedin-orbit orbit">

                                <a href="https://www.linkedin.com/in/nicolasmakfan/" id="linkedin" alt="linkedin">
                                    <img src="https://img.icons8.com/nolan/64/linkedin.png" />
                                </a>

                                <div className="email-orbit orbit">

                                    <a href="" alt="email">
                                        <img src="https://img.icons8.com/nolan/64/email.png" id="email" />
                                    </a>

                                    <div className="resume-orbit orbit">

                                        <a href="" alt="resume">
                                            <img src="https://img.icons8.com/nolan/64/open-resume.png" id="resume" />
                                        </a>

                                        <div className="react-orbit">
                                            <img src="https://img.icons8.com/nolan/64/react-native.png" id="react" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="welcome" style={{ marginTop: '300px' }}>
                            <h2>
                                This site will tell a little bit about me. From my past prized photos I took during my travels and photography gigs, to projects I've
                                worked on over the years to prove my competence as a software developer. Register, get in touch, but most of all, enjoy my page!
                            </h2>
                        </div>




                        <FlashCards /> */}
                </div>

            </Content>

        )
    }
}

export default mainPage;