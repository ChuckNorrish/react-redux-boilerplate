// MAIN
import React, { Component } from "react"
import { connect } from "react-redux"
import { NavLink } from 'react-router-dom'

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({

})

class Header extends Component 
{
  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav 
        className="navbar"
        aria-label="main navigation">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-item">
            <img
              style={{
                borderTopLeftRadius: '50%',
                borderTopRightRadius: '50%',
                borderBottomLeftRadius: '50%',
                borderBottomRightRadius: '50%',
                marginRight: 15
              }}
              src=""
              width="30px" alt="" />
            <span>Studio Norrish</span>
          </NavLink>
          <button className="button navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
            <a className="navbar-item">
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span>
              Story
            </a>
            <NavLink to="/blog" className="navbar-item">
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span>
              Blog
            </NavLink>
            <a className="navbar-item">
              <span className="icon has-text-primary" style={{ marginRight: 5 }}>
                <i className="fas fa-code"></i>
              </span>
              Contact
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" >
                Projects
              </a>
              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Overview
                </a>
                <hr className="navbar-divider" />
                <a className="navbar-item">
                  Studio Norrish
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-end">
            <a className="navbar-item">
              <span className="icon" style={{ color: '#000000' }}>
                <i className="fab fa-lg fa-github"></i>
              </span>
            </a>
            <a className="navbar-item">
              <span className="icon" style={{ color: '#0084FF' }}>
                <i className="fab fa-lg fa-twitter"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)