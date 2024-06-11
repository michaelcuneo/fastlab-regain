import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    margin: 0,
    padding: 40,
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
  },
  title: {
    ...Fonts.style.h2,
    textAlign: 'center',
    marginBottom: 10,
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'left',
    marginBottom: 5,
  },
  loading: {
    ...Fonts.style.normal,
    textAlign: 'center',
    marginBottom: 5,
  },
  logoContainer: {
    width: '100%',
    height: 300,
  },
  logo: {
    width: '100%',
    height: '100%',
  },
})
