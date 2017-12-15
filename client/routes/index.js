import React from 'react'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import MainPage from '../pages/MainPage'
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
        ...MainPage,
        path: '/playing'
      },
      {
        ...HomePage,
        path: '/'
      }
    ]
  }
]
