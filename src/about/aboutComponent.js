import React, { Component } from 'react';
import './aboutComponent.css'


class AboutComponent extends Component {
  render() {
    return (<div class='About'>
      <h3> About Vikash Kumar Bijarnia</h3>
      <p>I am a full stack developer. I know JavaScript, Python, and Java(Expertise in Same Order). With time I am becoming a language agnostic person. Although I love JavaScript and Python. I have a love for JavaScript's Asynchronous behavior. I love to learn new technologies, making mistakes and learning from them(Don't worry I will not make mistakes in production).  My interest lies in solving logical problems on the back-end and handling that logical problem solution on front-end. Remote work is something that I look for, all the artist works remotely in a way (Yes, I do consider myself as an artist, I also write code then rewrite it. and I do understand the value of teamwork).  There is a 3p's principle in my life that says, follow Programming, Philosophy, and Psychology. Apart from programming, I love to read about Philosophy(To make myself question about stuff).
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

      <p className='Links'>Contact info:</p>
      <a href="mailto:vkb.info@gmail.com">vkb.info@gmail.com</a>
    </div>)
  };
}

export default AboutComponent;
