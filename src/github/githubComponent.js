import React, { Component } from 'react';
import axios from 'axios';
import './githubComponent.css';

class GithubComponent extends Component {
  state = {
    commits: []
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/vkbinfo/events').then((eventData) => {
      let commitsInLastThreePushEvent = eventData.data.slice(0, 4).reduce((acc, event) => acc.concat(event.payload.commits.map(commit => {
        let commitDiffUrl = `https://github.com/${event.repo.name}/commit/${commit.sha}`;
        let timeAfterPush = Date.now() - Date.parse(event.created_at);
        let minutes = Math.round((timeAfterPush % (1000 * 60 * 60)) / (1000 * 60))
        let hours = Math.round(timeAfterPush / (1000 * 60 * 60));
        return { ...commit, url: commitDiffUrl }
      })), []);
      let commits = commitsInLastThreePushEvent.map(commit => {
        let commitMessage = commit.message;
        let commitUrl = commit.url;
        return { commitMessage, commitUrl };
      }).slice(0, 4);
      console.log(commits);
      this.setState({ commits })
    })
  }
  render() {
    let commitListElements = this.state.commits.map(commit => <a href={commit.commitUrl} target="_blank" rel="noopener noreferrer">{commit.commitMessage}</a>)
    return <div className='GitHub-part'>
      <span className='Github-title'>Latest Commits on => </span>
      <span><img className='GitHub-logo' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='Github Logo'></img></span>
      <div className='Commits'>
        {commitListElements}
      </div>
    </div>
  }
}

export default GithubComponent;
