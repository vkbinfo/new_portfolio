import React, { Component } from 'react';
import axios from 'axios';
import './githubComponent.css';

class GithubComponent extends Component {
  state = {
    commits: []
  }
  // componentDidMount() {
  //   axios.get('https://api.github.com/users/vkbinfo/events').then((eventData) => {
  //     console.log(eventData);
  //     let commitsInLastThreePushEvent = eventData.data.slice(5, 9).reduce((acc, event) => acc.concat(event.payload.commits.map(commit => {
  //       let commitDiffUrl = `https://github.com/${event.repo.name}/commit/${commit.sha}`;
  //       let repoName = event.repo.name.split('/')[1] // the format is username/reponame so I am splitting it.
  //       let timeAfterPush = Date.now() - Date.parse(event.created_at);
  //       return { ...commit, url: commitDiffUrl, timeAfterPush, repoName }
  //     })), []);
  //     let commits = commitsInLastThreePushEvent.sort((commitA, commitB) => commitA.timeAfterPush > commitB.timeAfterPush).map(commit => {
  //       let commitMessage = commit.message;
  //       let commitUrl = commit.url;
  //       let timeAfterPush = commit.timeAfterPush;
  //       let minutes = Math.round((timeAfterPush % (1000 * 60 * 60)) / (1000 * 60))
  //       let hours = Math.round(timeAfterPush / (1000 * 60 * 60));
  //       let timeAfterPushString = `${hours} hours and ${minutes} minutes ago in `
  //       return { commitMessage, commitUrl, timeAfterPushString, repoName: commit.repoName };
  //     }).slice(0, 4); // Only showing 4 commit messages.
  //     this.setState({ commits })
  //   })
  // }

  render() {
    let commitListElements = this.state.commits.map(commit => {
      return (<div class='Commit-container'>
        <a href={commit.commitUrl} target="_blank" rel="noopener noreferrer">{commit.commitMessage}</a>
        <div className='Time-repo'>{commit.timeAfterPushString}<a href={`https://github.com/${commit.repoName}`} target="_blank" rel="noopener noreferrer">{commit.repoName}</a></div>
      </div>)
    }
    )
    return <div className='GitHub-part'>
      <span className='Github-title'>Latest Commits on </span>
      <div><img className='GitHub-logo' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt='Github Logo'></img></div>
      <div className='Commits'>
        {commitListElements}
      </div>
    </div>
  }
}

export default GithubComponent;
