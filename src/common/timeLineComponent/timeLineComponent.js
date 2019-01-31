import React, { Component } from 'react';
import './timeLineComponent.css'


class TimeLineComponent extends Component {
    render() {
        let element = this.props.data;
        return <div>
            <div className='Element-container'>
                <div className='Image-container'>
                    <img className="Image" alt={element.imageTag} src={element.imageSrc}></img>
                </div>
                <div className="Text-container">
                    <div className="element-heading">{element.heading}</div>
                    <div className="element-subheading"><bold>{element.subheading}</bold> {element.timeTaken}</div>
                    <div className="element-discription">{element.discription}</div>
                </div>
            </div>
        </div >
    }
}

export default TimeLineComponent;
