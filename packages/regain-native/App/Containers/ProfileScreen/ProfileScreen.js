import React from 'react'
import { Button } from 'react-native'

import { Auth } from 'aws-amplify'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

class ProfileScreen extends React.Component {
  handleSignOut(e) {
    e.preventDefault()
    Auth.signOut()
  }

  render() {
    return <Button onPress={(e) => this.handleSignOut(e)} title="Sign Out" />
  }
}

export default ProfileScreen
