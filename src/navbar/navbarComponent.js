import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import navBarLogoSVG from '../static/navbarLogo.svg'
import crossLogoSVG from '../static/crossLogo.svg'
import './navbar.css'


class NavBarComponent extends Component {
  constructor(props) {
    super(props);
    this.toggleNavBar = this.toggleNavBar.bind(this);
    this.state = {
      showNavbar: true
    }
    if (document.body.clientWidth < 600) {
      this.state.showNavbar = false;
    }
  }
  toggleNavBar() {
    if (document.body.clientWidth < 600) {
      const showNavbar = !this.state.showNavbar
      this.setState({ showNavbar })
    }
  }
  render() {
    return <div className='Navbar-Container'>
      <div className='NavBar-logo' >
        <img className='Navbar-symbol' onClick={this.toggleNavBar} src={(this.state.showNavbar ? crossLogoSVG : navBarLogoSVG)} alt='Navbar symbol'></img>
        <div className={'Navbar ' + (this.state.showNavbar ? 'Display' : 'No-display')} onClick={this.toggleNavBar}>
          <NavLink to="/projects" className="Nav-element" activeClassName="Selected">
            Projects
        </NavLink>
          <NavLink to="/experience" className="Nav-element" activeClassName="Selected">
            Experience
        </NavLink>
          <NavLink to="/blog" className="Nav-element" activeClassName="Selected">
            Blog
        </NavLink>
          <NavLink to="/about" className="Nav-element" activeClassName="Selected">
            About Me
        </NavLink>
        </div>
      </div>
    </div>
  }
}

export default NavBarComponent;
