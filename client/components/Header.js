import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="navbar navbar-expand-lg navbar-inverse bg-inverse">
      <div className="container">
        <Link className="navbar-brand inline" to="/">
          <div className="d-flex">
            <div className="bg-warning px-2 text-dark rounded-left">JS</div>
            <div className="bg-light px-2 text-dark rounded-right">
              Full Stack
            </div>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <Link to="/signup" className="btn btn-warning">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  </header>
)

export default Header
