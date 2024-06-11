/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from 'App/Components/TabBarIcon'
import MainScreen from 'App/Containers/HomeScreen/HomeScreen'
import ProfileScreen from 'App/Containers/ProfileScreen/ProfileScreen'

const HomeStack = createStackNavigator({
  Home: MainScreen,
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => {
    return <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  },
}

const ProfileStack = createStackNavigator({
  ProfileScreen: ProfileScreen,
})

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => {
    return <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
  },
}

export default createBottomTabNavigator({
  HomeStack,
  ProfileStack,
})
