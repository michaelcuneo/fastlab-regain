/**
 * Gets the repositories of the user from Github
 */

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';

import decode from 'jwt-decode';

import { getCurrentSession } from 'utils/awsLib';

import userImage from 'images/user.svg';

import { setUser, setLoggedIn } from 'containers/User/actions';
import { AUTH_LOGIN, AUTH_LOGOUT } from './constants';

// import { listStaffs } from '../../../src/graphql/queries';
// import { updateStaff } from '../../../src/graphql/mutations';

export function* setLogin() {
  let token;
  let decoded;
  let user;

  // Call function to get Userdata from AWS Auth.
  const session = yield call(checkCurrentSession);

  // If the user isn't no current user...
  // Grab the Token, Decode the Token, and pull the username and picture.
  if (session !== 'No current user') {
    // Retrieve the staff list.

    // Get the username of the current logged in user
    token = session.idToken.jwtToken;
    decoded = decode(token);

    // If the current logged in user does not have a staff profile yet... just use their logged in username, and the default picture.
    user = {
      username: decoded['cognito:username'],
      picture: userImage,
    };
  }

  try {
    yield put(setUser(user));
    yield put(setLoggedIn(true));
    yield put(push('/'));
  } catch (err) {
    yield put(setLoggedIn(false, err));
    yield put(push('/'));
  }
}

export function* setLogout() {
  try {
    yield put(setLoggedIn(false));
    yield put(push('/'));
  } catch (err) {
    yield put(setLoggedIn(true, err));
  }
}

async function checkCurrentSession() {
  return getCurrentSession().then(result => result);
}

export default function* changeLoggedIn() {
  yield all([
    takeLatest(AUTH_LOGIN, setLogin),
    takeLatest(AUTH_LOGOUT, setLogout),
  ]);
}
