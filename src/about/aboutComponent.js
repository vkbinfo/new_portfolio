import React, { Component } from 'react';
import './aboutComponent.css'


class AboutComponent extends Component {
  render() {
    return <div class='About'>
      <h3> About Vikash Kumar Bijarnia</h3>
      <p> I am a full stack developer. I love to learn new technologies, making mistakes and learning from them(Don't worrry I will not make mistakes in production).
        I like to solve logical problems on back-end. I like to work remotely.
         I follow 3p's of my life, and these are Programming, Philosophy, and Psychology.
         I love to read about Philosophy(To make myself question everything.).
         Currently learning ReasonML and always learning how to be a better software Engineer.
      </p>
      <p>
        My current aim is to become a better Software Engineer by contributing to open source as much as possible.
        And I am also making my own command line reminder app. Right now, I am calling it <a href='https://github.com/vkbinfo/Tiara'>Tiara</a>.
      </p>

      <h3 className='Links'>Links</h3>
      <ul>
        <li><a href="https://angel.co/vikash-kumar-bijarnia" >AngelList</a></li>
        <li><a href="https://github.com/vkbinfo" >Github</a></li>
        <li><a href="https://stackoverflow.com/users/6603988/simplemath" >StackOverFlow</a></li>
        <li><a href="https://www.linkedin.com/in/vikash-kumar-bijarnia-6108a1a1/" >LinkeIn</a></li>
      </ul>
    </div>
  }
}

export default AboutComponent;
