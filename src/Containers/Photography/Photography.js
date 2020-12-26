import React, { Component } from 'react'
import Photo from './PhotographyStyle'
import images from './Images'
import Popup from './Popup'

export default class photography extends Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUrl: "",
            imageUrlArray: [

                { key: '1', src: '/images/pic1.jpg', dsc: '', id: '' },
                { key: '2', src: '/images/pic2.jpg', dsc: '', id: '' },
                { key: '3', src: '/images/pic4.jpg', dsc: '', id: '' },
                { key: '4', src: '/images/pic5.jpg', dsc: '', id: '' },
                { key: '5', src: '/images/pic6.jpg', dsc: '', id: '' },
                { key: '6', src: '/images/pic7.jpg', dsc: '', id: '' },
                { key: '7', src: '/images/pic8.jpg', dsc: '', id: '' },
                { key: '8', src: '/images/pic9.jpg', dsc: '', id: '' },
                { key: '9', src: '/images/pic10.jpg', dsc: '', id: '' },
                { key: '10', src: '/images/pic11.jpg', dsc: '', id: '' },
                { key: '11', src: '/images/pic12.jpg', dsc: '', id: '' }
            ],
            showModel: false,
            popImageUrl: ""
        };
    }

    // handlePopup = (url) => {
    //     this.setState({
    //         showModel: !this.state.showModel,
    //         popImageUrl: url
    //     })
    // }

    render() {
        const gallery = images.map((url, index) => {
            return (
                // onClick={() => this.handlePopup(url.src)} 
                <img className="singleImage" src={url.src} key={index} />
            )
        })


        return (
            <div style={{ paddingLeft: '70px', paddingRight: '70px' }}>
                <Photo>
                    <div className="container" style={{ marginTop: '90px' }}>
                        {gallery}
                        {this.state.showModel ? (
                            <Popup
                                popImageUrl={this.state.popImageUrl}
                                closePopup={this.handlePopup}
                            />
                        ) : null}
                    </div>
                </Photo>
            </div>

        )
    }
}

