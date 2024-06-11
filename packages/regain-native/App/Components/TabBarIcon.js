import React from 'react'
import PropTypes from 'prop-types'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Colors from 'App/Theme/Colors'

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Ionicons
        name={this.props.name}
        size={20}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    )
  }
}

TabBarIcon.propTypes = {
  name: PropTypes.string,
  focused: PropTypes.bool,
}
