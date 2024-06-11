/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import history from 'utils/history';
import globalReducer from 'containers/App/reducer';
import userReducer from 'containers/User/reducer';
import languageProviderReducer from 'containers/LanguageProvider/reducer';

const globalPersistConfig = {
  key: 'global',
  storage,
};

const userPersistConfig = {
  key: 'user',
  storage,
};

const languageProviderConfig = {
  key: 'language',
  storage,
};

const routerPersistConfig = {
  key: 'router',
  storage,
};

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    global: persistReducer(globalPersistConfig, globalReducer),
    user: persistReducer(userPersistConfig, userReducer),
    language: persistReducer(languageProviderConfig, languageProviderReducer),
    router: persistReducer(routerPersistConfig, connectRouter(history)),
    ...injectedReducers,
  });

  return rootReducer;
}
