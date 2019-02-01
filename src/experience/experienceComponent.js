import React, { Component } from 'react';

import TimeLineComponent from '../common/timeLineComponent/timeLineComponent'
import './experience.css'

class ExperienceComponent extends Component {
    render() {
        let timeLineComponentArray = this.props.data.coreData.reduce((acc, element) => {
            acc.push(<TimeLineComponent data={element} imageStyle={this.props.data.imageStyle} />);
            return acc;
        }, []);

        return <div>
            {timeLineComponentArray}
        </div >
    }
}

export default ExperienceComponent;
