import React, { Component } from 'react';

import TimeLineComponent from '../timeLineComponent/timeLineComponent'
import './experience.css'

class ExperienceComponent extends Component {
    render() {
        let timeLineComponentArray = this.props.data.coreData.reduce((acc, element) => {
            acc.push(<TimeLineComponent data={element} elementData={this.props.data} />);
            return acc;
        }, []);

        return <div className='Main-container'>
            {timeLineComponentArray}
        </div >
    }
}

export default ExperienceComponent;
