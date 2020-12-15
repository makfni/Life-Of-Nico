import React from "react";
import { Footer } from './FooterStyle'


const MainFooter = () => {
    return (
        <Footer>
            <div className="main-footer">
                {/* <div className="row" style={{ color: 'black' }}>
                   
                    <div className="col">
                        <h4>THREAD COUNT INC</h4>
                        <ul className="list-unstyled">
                            <li>613-123-4567</li>
                            <li>Ottawa, Canada</li>
                            <li>123 abc street</li>
                        </ul>
                    </div>

              
                    <div className="col">
                        <h4>CUSTOMER SERVICE</h4>
                        <ul className="list-unstyled">
                            <li>FAQ</li>
                            <li>SHIPPING AND RETURNS</li>
                            <li>PRIVACY</li>
                        </ul>
                    </div>
               
                    <div className="col">
                        <h4>GET INVOLVED</h4>
                        <ul className="list-unstyled">
                            <li>CONTACT</li>
                            <li>CAREERS</li>
                            <li>RESELLING</li>
                        </ul>
                    </div>
                </div>
                <hr /> */}
                <p className="col-sm" style={{ textAlign: 'center' }}>
                    &copy;{new Date().getFullYear()} Life Of Nicolas | "The inner machinations of my mind are an enigma" - Patrick Star
                </p>

            </div>
        </Footer>
    );
}

export default MainFooter;