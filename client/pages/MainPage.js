import React from 'react'
import { Link } from 'react-router-dom'
import PlayingBar from '../components/PlayingBar'

const MainPage = () => (
  <div className="mainContainer">
    <div className="topContainer">
      <div className="navBarContainer">
        <nav className="navBar d-flex d-flex-column">
          <Link to="/" className="logo">
            <img src="/statics/img/icons/logo.png" alt="Logo" />
          </Link>
        </nav>
      </div>
    </div>
    <PlayingBar />
  </div>
)

export default {
  component: MainPage
}
