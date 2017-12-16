import React from 'react'
import { Link } from 'react-router-dom'
import PlayingBar from '../components/PlayingBar'

const MainPage = () => (
  <div className="mainContainer">
    <div className="topContainer">
      <div className="navBarContainer">
        <div className="navBar d-flex flex-column">
          <Link to="/" className="logo mb-3">
            <img src="/statics/img/icons/logo.png" alt="Logo" />
          </Link>

          <div className="group">
            <div className="navItem">
              <Link to="/search">
                Search
                <img
                  src="/statics/img/icons/search.png"
                  className="icon"
                  alt="Search"
                />
              </Link>
            </div>
          </div>

          <div className="group">
            <div className="navItem">
              <Link to="/browse">Browse</Link>
            </div>

            <div className="navItem">
              <Link to="/your-music">Your Music</Link>
            </div>

            <div className="navItem">
              <Link to="/profile">Reece Kenney</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PlayingBar />
  </div>
)

export default {
  component: MainPage
}
