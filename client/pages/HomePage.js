import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { fetchUsers } from '../../client/actions'

class HomePage extends Component {
  render() {
    return <Redirect to="/login" />
  }
}

const loadData = store => store.dispatch(fetchUsers())

const mapStateToProps = ({ users }) => ({ users })

export default {
  loadData,
  component: connect(mapStateToProps)(HomePage)
}
