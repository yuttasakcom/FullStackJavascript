import React from 'react'
import HomePage from '../pages/HomePage'
import App from '../App'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/'
      }
    ]
  }
]
