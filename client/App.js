import React from 'react'
import { renderRoutes } from 'react-router-config'

const App = ({ route }) => <div>{renderRoutes(route.routes)}</div>

export default {
  component: App
}
