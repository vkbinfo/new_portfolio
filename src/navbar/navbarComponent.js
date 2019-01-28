import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './navbar.css'


class NavBarComponent extends Component {
  render() {
    return <div className='Navbar'>
      <NavLink to="/bio" className="Nav-element" activeClassName="Selected">
        Bio
      </NavLink>
      <NavLink to="/projects" className="Nav-element" activeClassName="Selected">
        Projects
      </NavLink>
      <NavLink to="/experience" className="Nav-element" activeClassName="Selected">
        Experience
      </NavLink>
      <NavLink to="/blog" className="Nav-element" activeClassName="Selected">
        Blog
      </NavLink>

    </div>
  }
}

export default NavBarComponent;
