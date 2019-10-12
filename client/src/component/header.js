import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import homeSlider from '../container/homePage/homeSlider.scss';

class Header extends Component {
  render() {
    return (
      <header id="header" className="home-header">
        <nav className="navbar navbar-expand-sm mt-2">
          <div className="container">
            <NavLink className="navbar-brand" to='/'>Logo</NavLink>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link header-heading"  to='/'>What we Do</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link header-heading" to='/'>Fashion</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link header-heading" to='/'>Testmonial</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link header-heading" to='/login'>Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link header-heading" to='/signup'>Signup</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header;
