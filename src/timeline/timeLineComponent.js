import React, { Component } from 'react';
import './timeLineComponent.css'


class TimeLineComponent extends Component {
    render() {
        return <div>
            <div className='Company-container'>
                <div className='Image-container'>
                    <img className="Image" alt="Elucidata" src="https://d1qb2nb5cznatu.cloudfront.net/startups/i/800274-9da7166416e86d872510e14f8059d1b8-medium_jpg.jpg?buster=1504338785"></img>
                </div>
                <div className="Text-container">
                    <div className="Company-name">Elucidata</div>
                    <div className="Position"><bold>Full Stack Developer</bold>2018(6 months)</div>
                    <div className="Work-disc">Front-end Development in Angular2.</div>
                </div>
            </div>
            <div className='Company-container'>
                <div className='Image-container'>
                    <img className="Image" alt="Chegg India" src=""></img>
                </div>
                <div className="Text-container">
                    <div className="Company-name">Chegg India</div>
                    <div className="Position"><bold>Expert QA</bold>2018(6 months)</div>
                    <div className="Work-disc">Answer questions and gave expert advice. Solve technical problems through research and collaboration. Languages</div>
                </div>
            </div>
        </div >
    }
}

export default TimeLineComponent;
