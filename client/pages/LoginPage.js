import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-4 mt-sm-10 mt-md-10 mt-lg-20">
        <div className="loginContainer">
          <form>
            <h2 className="mb-4 text-center">Login to your account</h2>
            <p>
              <label htmlFor="username">Username</label>
              <input
                className="transparent border-left-0 border-top-0 border-right-0"
                type="text"
                placeholder="e.g. yoprogrammer"
                required
              />
            </p>
            <p>
              <label htmlFor="password">Password</label>
              <input
                className="transparent border-left-0 border-top-0 border-right-0"
                type="password"
                placeholder="Your password"
                required
              />
            </p>
            <button
              type="submit"
              className="btn btn-lg btn-block btn-outline-light mt-5"
            >
              Login
            </button>
            <small className="form-text text-muted text-center mt-3">
              Don't have an accont yet? <Link to="/signup">Signup here.</Link>
            </small>
          </form>
        </div>
      </div>

      <div className="col-md-6 col-lg-8 mt-5 mt-md-10 mt-lg-15 pl-lg-10">
        <div className="loginText">
          <h1>Get great music, right now</h1>
          <h2>Listen to loads of songs for free</h2>
          <ul>
            <li>Discover music you'll fall in love with</li>
            <li>Create your own playlists</li>
            <li>Follow artists to keep to date</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default {
  component: LoginPage
}
