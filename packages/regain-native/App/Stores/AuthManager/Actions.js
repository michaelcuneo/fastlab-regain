import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  login: null,
  loginSuccess: null,
  logoutSuccess: null,
  logout: null,
  loginFailure: null,
  logoutFailure: null,
})

export const AuthTypes = Types
export default Creators
