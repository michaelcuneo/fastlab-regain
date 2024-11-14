import { persistedState } from './persistedState.svelte';

export const messages = persistedState('messages', []);

export const activeAreas = persistedState('activeAreas', [
  {
    id: "e536c320-1e5e-4be1-96c4-620e34b0bce0",
    status: false,
  },
  {
    id: "bf5fc8a5-d933-40cb-94cb-36d6e157b0d1",
    status: false,
  },
  {
    id: "77d2f51d-8981-4261-b90f-e5901fef066b",
    status: false,
  },
  {
    id: "4939f4c0-fc8d-4a56-ab99-b67f921568aa",
    status: false,
  },
  {
    id: "1cb15f70-c553-460e-833c-b4753f66bd25",
    status: false,
  },
  {
    id: "b2e20191-9d7a-484e-9c49-13f1329b4b3e",
    status: false,
  },
  {
    id: "89de7e09-a1fe-4a93-9421-dda0c70aa956",
    status: false,
  }
]);

export const helpMessages = persistedState('messages', [], { storage: 'session' });
export const updateHelpMessages = persistedState('updateMessages', false, { storage: 'session' });

export const landing = persistedState('isLanding', true, { storage: 'session' });
export const isPaused = persistedState('isPaused', false, { storage: 'session' });
export const isHalfway = persistedState('isHalfway', false, { storage: 'session' });
export const isCompleted = persistedState('isCompleted', false, { storage: 'session' });

// Temporary User while logging in, for MFA and Confirmation.
export const transitionUser = persistedState('transitionUser', <loggedInUserType>({}), { storage: 'session' });

export const pain = persistedState('pain', 0, { storage: 'session' });
export const difficult = persistedState('difficult', 0, { storage: 'session' });

// Logged in User. Keep this in Local Storage to stop the app breaking.
export const user = persistedState('user', <loggedInUserType>({}), { storage: 'local' });
export const usersettings = persistedState('usersettings', <userSettingsType>({}), { storage: 'local' });
export const allUsers = persistedState('allUsers', <Array<loggedInUserType>>([]), { storage: 'local' });
export const groups = persistedState('groups', <Array<groupType>>([]), { storage: 'local' });
export const exercises = persistedState('exercises', <Array<exerciseType>>([]), { storage: 'local' });

// MFA and Confirmation States.
export const mfa = persistedState('mfa', false, { storage: 'session' });
export const passwordReset = persistedState('passwordReset', false, { storage: 'session' });
export const signupConfirm = persistedState('signupConfirm', false, { storage: 'session' });

// Error States.
export const error = persistedState('error', <errorType>({}), { storage: 'session' });

export const userExercises = persistedState('userExercises', <Array<exerciseType>>([]), { storage: 'session' });

// Admin Mode.
export const currentMode = persistedState('currentMode', 'display', { storage: 'session' });
export const currentGroup = persistedState('currentGroup', <groupType>({}), { storage: 'session' });
export const currentExercise = persistedState('currentExercise', <exerciseType>({}), { storage: 'session' });

// Version.
export const version = persistedState('version', '0.0.0', { storage: 'local' });
