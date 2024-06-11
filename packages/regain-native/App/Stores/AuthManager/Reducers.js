/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { AuthTypes } from './Actions'

export const loginSuccess = (state) => ({
  ...state,
  authErrorMessage: null,
})

export const loginFailure = (state, { error }) => ({
  ...state,
  authErrorMessage: error,
})

export const logoutSuccess = (state) => ({
  ...state,
  authErrorMessage: null,
})

export const logoutFailure = (state, { error }) => ({
  ...state,
  authErrorMessage: error,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [AuthTypes.LOGIN_SUCCESS]: loginSuccess,
  [AuthTypes.LOGIN_FAILURE]: loginFailure,
  [AuthTypes.LOGOUT_SUCCESS]: logoutSuccess,
  [AuthTypes.LOGOUT_FAILURE]: logoutFailure,
})
