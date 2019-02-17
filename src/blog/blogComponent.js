import React, { Component } from 'react';

import './blogComponent.css'


class BlogComponent extends Component {
  render() {
    return <div>
      <div className='Element-container'>
        <div className="Text-container">
          <a href="https://medium.com/@vkb.info/functional-way-to-do-quick-sort-in-javascript-73f2917cfe31" target="_blank" rel="noopener noreferrer"><h3 className="element-heading">Functional Way to do Quick Sort in JavaScript.</h3></a>
          <p>You should be familiar with Recursion, if you are not then please go and learn it, It is a really important concept for a Software Engineer...</p>
          <time>11 Feb 2019 .<span> 1 Min Read</span></time>
        </div>
      </div>

      <div className='Element-container'>
        <div className="Text-container">
          <a href="https://medium.com/@vkb.info/understanding-parallel-computing-teamwork-of-computers-with-mapreduce-363e23a1803b" target="_blank" rel="noopener noreferrer"><h3 className="element-heading">Understanding parallel computing(teamwork of computers) with MapReduce</h3></a>
          <p>Last week I joined Pesto Tech to make myself a better programmer and a better human being and I am also being good as*hole about time value. They are teaching us the best way possible and also that in minimum time...</p>
          <time>14 Jan 2019 .<span> 6 Min Read</span></time>
        </div>
      </div>

    </div >
  }
}

export default BlogComponent;


