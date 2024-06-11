/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Hub } from 'aws-amplify'

import AuthActions from 'App/Stores/AuthManager/Actions'

/* eslint-disable react/prefer-stateless-function */
class AuthManager extends React.Component {
  constructor(props) {
    super(props)

    Hub.listen('auth', (data) => {
      const { channel, payload } = data
      if (channel === 'auth') {
        this.onAuthEvent(payload)
      }
    })
  }

  componentWillUnmount() {
    Hub.remove()
  }

  onAuthEvent(payload) {
    const { event } = payload

    switch (event) {
      case 'signIn':
        this.props.onLoggedIn(event)
        break
      case 'signOut':
        this.props.onLoggedOut(event)
        break
      default:
        break
    }
  }

  render() {
    return [React.Children.only(this.props.children)]
  }
}

AuthManager.propTypes = {
  children: PropTypes.element.isRequired,
  onLoggedIn: PropTypes.func,
  onLoggedOut: PropTypes.func,
}

const mapDispatchToProps = (dispatch) => ({
  onLoggedIn: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    dispatch(AuthActions.login())
  },
  onLoggedOut: (evt) => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault()
    dispatch(AuthActions.logout())
  },
})

export default connect(
  null,
  mapDispatchToProps
)(AuthManager)
