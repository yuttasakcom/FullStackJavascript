import React from 'react'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import App from '../App'

export default [
  {
    ...App,
    routes: [
      {
        ...LoginPage,
        path: '/login'
      },
      {
        ...SignupPage,
        path: '/signup'
      },
      {
        ...HomePage,
        path: '/'
      }
    ]
  }
]
