import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectUser = state => state.user || initialState;

const makeSelectUser = () =>
  createSelector(
    selectUser,
    userState => userState.user,
  );

const makeSelectUserName = () =>
  createSelector(
    selectUser,
    userState => userState.username,
  );

const makeSelectLoggedIn = () =>
  createSelector(
    selectUser,
    userState => userState.loggedIn,
  );

const makeSelectPicture = () =>
  createSelector(
    selectUser,
    userState => userState.picture,
  );

export {
  selectUser,
  makeSelectUser,
  makeSelectUserName,
  makeSelectLoggedIn,
  makeSelectPicture,
};
