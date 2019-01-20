import React, { Component } from 'react';
import './homeComponent.css';
import NavBarComponent from '../navbar/navbarComponent'
import BioComponent from '../bio/bioComponent'
import TimeLineComponent from '../timeline/timeLineComponent'

class HomeComponent extends Component {
    render() {
        return (<div className='Container'>
            <img className='Cover-photo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/David_-_The_Death_of_Socrates.jpg/1420px-David_-_The_Death_of_Socrates.jpg' alt='The death of Socrates painting.'></img>
            <img className='Profile-pic' src='https://pbs.twimg.com/profile_images/1075185651681652737/9nYafrNP_400x400.jpg' alt='My profile pic'></img>
            <article className='Article'>
                <NavBarComponent></NavBarComponent>
                <div className='MainContent'>
                    <div className='Bio'>
                        <BioComponent ></BioComponent>
                    </div>
                    <div className='Time-line'>
                        <TimeLineComponent ></TimeLineComponent>
                    </div>
                    <div className='Follow'></div> {/* // placeholder for whom I follow. */}
                </div>
            </article>
        </div>);
    }
}

export default HomeComponent;
