import React, { Component } from 'react'
import Photo from './PhotographyStyle'

export default class Popup extends Component {
    render() {
        return (
            <Photo>
                <div className="popupParent">
                    <div className="popupImage">
                        <button className="imageClosingButton" onClick={this.props.closePopup}>
                            X
                    </button>
                        <img src={this.props.popImageUrl} />
                    </div>
                </div>
            </Photo>

        )
    }
}
