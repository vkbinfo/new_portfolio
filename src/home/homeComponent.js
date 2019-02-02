import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './homeComponent.css';
import NavBarComponent from '../navbar/navbarComponent'
import BioComponent from '../bio/bioComponent'
import ExperienceComponent from '../experience/experienceComponent';

import { experienceData, projectData } from '../data/timeLineData';
import GithubComponent from '../github/githubComponent';
import AboutComponent from '../about/aboutComponent';
class HomeComponent extends Component {
    render() {
        return (<div className='Container'>
            <img className='Cover-photo' src='https://d2gn4xht817m0g.cloudfront.net/p/profiles/cover_photos/background/002/830/445/2830445-e815298efe0a673323265a6e94bcd6e016b4dd9d.jpg?1470004877' alt='Git'></img>
            <img className='Profile-pic' src='https://pbs.twimg.com/profile_images/1075185651681652737/9nYafrNP_400x400.jpg' alt='My profile pic'></img>
            <article className='Article'>
                <NavBarComponent forceUpdate={this.forceUpdate}></NavBarComponent>
                <div className='MainContent'>
                    <div className='Bio'>
                        <BioComponent ></BioComponent>
                    </div>
                    <div className='Time-line'>
                        <Switch>
                            <Route exact path={'/experience'} render={(props) =>
                                <ExperienceComponent {...props} data={experienceData} />
                            }
                            />
                            <Route exact path={'/projects'} render={(props) =>
                                <ExperienceComponent {...props} data={projectData} />
                            }
                            />
                            <Route exact path={'/about'} component={AboutComponent} />
                            <Route exact path={'/'} render={() => (<Redirect to="/about" />)} />
                        </Switch>
                    </div>
                    <div className='Recent-commits'>
                        <GithubComponent></GithubComponent>
                    </div> {/* // placeholder for whom I follow. */}
                </div>
            </article>
        </div >);
    }
}

export default HomeComponent;
