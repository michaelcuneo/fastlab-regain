import React from 'react'
import { View, Image } from 'react-native'
import { Images } from 'App/Theme'

import { Authenticator, Greetings, SignUp } from 'aws-amplify-react-native'
import { rprTheme } from './rprTheme'
import Style from './AuthScreenStyle'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

class AuthScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <View style={Style.logoContainer}>
          <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
        </View>
        <Authenticator hideDefaults={true} hide={[Greetings, SignUp]} theme={rprTheme} />
      </View>
    )
  }
}

export default AuthScreen
