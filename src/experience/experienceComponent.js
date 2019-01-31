import React, { Component } from 'react';

import TimeLineComponent from '../common/timeLineComponent/timeLineComponent'
import './experience.css'

let experienceData = [{
    imageTag: 'Pesto Tech',
    imageSrc: "https://d1qb2nb5cznatu.cloudfront.net/startups/i/5001643-cc60fc70ac9239ed7f038da685f19928-medium_jpg.jpg?buster=1512196533",
    heading: 'Pesto Tech',
    subheading: 'JavaScript Developer',
    timeTaken: '(Jan-2019)',
    discription: 'Working on some Open Source Projects and also on a personal project.'
},
{
    imageTag: 'Elucidata',
    imageSrc: "https://d1qb2nb5cznatu.cloudfront.net/startups/i/800274-9da7166416e86d872510e14f8059d1b8-medium_jpg.jpg?buster=1504338785",
    heading: 'Elucidata',
    subheading: 'Full Stack Developer',
    timeTaken: '(July-2018 to Dec-2018)',
    discription: 'Front-end Development in Angular2.'
},
{
    imageTag: 'Chegg India',
    imageSrc: "https://img.grouponcdn.com/coupons/3G3tpCYibBfoFJ36FAzVBh/chegg-logo-500x500/v1/t200x200.png",
    heading: 'Chegg India',
    subheading: 'Expert QA',
    timeTaken: '(Jan-2018 to May-2018)',
    discription: 'Answer questions and gave expert advice. Solve technical problems through research and collaboration. Languages'
},
]

class ExperienceComponent extends Component {
    render() {
        let timeLineComponentArray = experienceData.reduce((acc, element) => {
            acc.push(<TimeLineComponent data={element} />);
            return acc;
        }, []);

        return <div>
            {timeLineComponentArray}
        </div >
    }
}

export default ExperienceComponent;
