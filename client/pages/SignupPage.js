import React from 'react'
import { Link } from 'react-router-dom'

const SignupPage = () => (
  <div className="background" id="background">
    <div className="container mt-10 mb-5 mb-sm-1">
      <div className="row">
        <div className="col-md-6 col-lg-5">
          <div className="signupContainer">
            <form>
              <h2 className="mb-4 text-center">Create your free account</h2>
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
                <label htmlFor="username">First name</label>
                <input
                  className="transparent border-left-0 border-top-0 border-right-0"
                  type="text"
                  placeholder="e.g. Yuttasak"
                  required
                />
              </p>
              <p>
                <label htmlFor="username">Last name</label>
                <input
                  className="transparent border-left-0 border-top-0 border-right-0"
                  type="text"
                  placeholder="e.g. Pannawat"
                  required
                />
              </p>
              <p>
                <label htmlFor="username">Email</label>
                <input
                  className="transparent border-left-0 border-top-0 border-right-0"
                  type="email"
                  placeholder="e.g. test@example.com"
                  required
                />
              </p>
              <p>
                <label htmlFor="username">Confirm email</label>
                <input
                  className="transparent border-left-0 border-top-0 border-right-0"
                  type="email"
                  placeholder="e.g. test@example.com"
                  required
                />
              </p>
              <p>
                <label htmlFor="username">Password</label>
                <input
                  className="transparent border-left-0 border-top-0 border-right-0"
                  type="password"
                  placeholder="Your password"
                  required
                />
              </p>
              <p>
                <label htmlFor="password">Confirm assword</label>
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
                Sign Up
              </button>
              <small className="form-text text-muted text-center mt-3">
                Already have an account? <Link to="/login">Login here.</Link>
              </small>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default {
  component: SignupPage
}
