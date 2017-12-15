import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../client/actions'

class HomePage extends Component {
  render() {
    return <div className="container">Home Page</div>
  }
}

const loadData = store => store.dispatch(fetchUsers())

const mapStateToProps = ({ users }) => ({ users })

export default {
  loadData,
  component: connect(mapStateToProps)(HomePage)
}
