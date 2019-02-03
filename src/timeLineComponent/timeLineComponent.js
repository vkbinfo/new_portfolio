import React, { Component } from 'react';

import './timeLineComponent.css'


class TimeLineComponent extends Component {
    render() {
        let element = this.props.data;
        let { imageStyle, flexDirectionStyle, imageContainerStyle } = this.props.elementData
        console.log(flexDirectionStyle);
        return <div>
            <div className='Element-container' style={flexDirectionStyle}>
                <div className="Text-container">
                    <a href={element.link} target="_blank" rel="noopener noreferrer"><h3 className="element-heading">{element.heading}</h3></a>
                    <div className="element-subheading"><bold>{element.subheading}</bold> {element.timeTaken}</div>
                    <div className="element-discription">{element.discription}</div>
                </div>
                <div className='Image-container' style={imageContainerStyle}>
                    <img className="Image" style={imageStyle} alt={element.imageTag} src={element.imageSrc}></img>
                </div>
            </div>
        </div >
    }
}

export default TimeLineComponent;
