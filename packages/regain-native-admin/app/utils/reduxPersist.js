import storage from 'redux-persist/lib/storage';

const KEY = 'storage-key-here';

export const persistConfig = {
  key: KEY,
  storage,
};
