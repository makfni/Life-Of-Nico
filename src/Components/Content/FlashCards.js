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
            <div className="chat" data-aos="fade-down">
                <a id="chat">Upcoming feature! You will be able to register to this site and able to interact with myself or other people via live messenger!</a>
            </div>
            <div className="upcoming" data-aos="fade-right" style={{ marginTop: '400px', marginBottom: '50px' }} >
                <a id="upcoming">You can either join a live world chat or a live private chat if you have the username of the person you'd like to chat to.</a>
            </div>
        </Cards>
    )
}

export default FlashCards
