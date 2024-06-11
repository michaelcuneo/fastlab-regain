import { StyleSheet } from 'react-native'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    height: '100%',
    margin: 30,
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    width: '100%',
    height: 100,
    marginBottom: 25,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
})
