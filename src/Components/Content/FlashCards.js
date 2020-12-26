import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cards } from './FlashCardsStyle'

const FlashCards = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, [])

    return (
        <Cards>
            <div>
                <div className="chat" data-aos="fade-down" style={{ marginRight: '30vw', marginTop: '250px' }}>
                    <a id="chat">This is a full-stack site meant for fun! The front-end was created using React.js, back-end with Node.js and socket.io, and as for my
                    database to store user information, PostgreSQL. Over my summer I learned how to proficiently code in React and Node so I decided to put it all
                    together and showcase what I can bring to the table.</a>
                </div>
                <div className="upcoming" data-aos="fade-right" style={{ left: '0', marginTop: '650px' }} >
                    <a id="upcoming">Other components of my website are links to my social media, projects I've done in the past, my resume, contact me directly via e-mail
                    and of course the biggest challenge, authentication and a live chatroom. Feel free to explore this site, register, create a chatroom and maybe we can
                    talk live!</a>
                </div>
            </div>

        </Cards>
    )
}

export default FlashCards
