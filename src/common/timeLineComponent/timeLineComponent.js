import React, { Component } from 'react';

import './timeLineComponent.css'


class TimeLineComponent extends Component {
    render() {
        let element = this.props.data;
        let imageStyle = this.props.imageStyle;
        return <div>
            <div className='Element-container'>
                <div className='Image-container'>
                    <img className="Image" style={imageStyle} alt={element.imageTag} src={element.imageSrc}></img>
                </div>
                <div className="Text-container">
                    <a href={element.link} target="_blank" rel="noopener noreferrer"><div className="element-heading">{element.heading}</div></a>
                    <div className="element-subheading"><bold>{element.subheading}</bold> {element.timeTaken}</div>
                    <div className="element-discription">{element.discription}</div>
                </div>
            </div>
        </div >
    }
}

export default TimeLineComponent;
