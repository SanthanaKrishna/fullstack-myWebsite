import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import homeSlider from '../container/homePage/homeSlider.scss';

class Header extends Component {

  // window.scroll({
  //   top: refElement.current.offsetTop - (window.innerWidth < 767 ? 66 : 80),
  //   left: refElement.current.offsetLeft,
  //   behavior: "smooth"
  // })

  ScrollToElement = (id) => {
    let refElement;
    refElement = document.getElementById(id);
    if (refElement && refElement.offsetTop) {
      window.scroll({
        top: refElement.offsetTop - (window.innerWidth < 767 ? 45 : 55),
        left: refElement.offsetLeft,
        behavior: "smooth"
      })
    }
  }


  render() {
    return (
      <header id="header" className="home-header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <NavLink className="navbar-brand" to='/'>Logo</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to='/' onClick={() => this.ScrollToElement('my-activity')}>What we Do</NavLink>
                  {/* <a href="#what-we-do">What we Do</a> */}
                  {/* <p className="nav-link header-heading" >What we Do</p> */}
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/' onClick={() => this.ScrollToElement('services')}>Services</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/shopping'>Shop</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/blog'>Blog</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/login'>Login</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to='/signup'>Signup</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default withRouter(Header);
