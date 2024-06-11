import { persist, setSerialization, createLocalStorage, createSessionStorage } from '@macfja/svelte-persistent-store';
import type { PersistentStore } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

// Must put Serialization here otherwise persistent store does not work.
setSerialization(JSON.stringify, JSON.parse);

export type helpMessageType = {
  id: string,
  createdAt: string,
  content: string,
  type: string,
  isSent: boolean,
  messagesUserId: string,
  user?: userType,
}

export type errorType = {
  status: boolean,
  message: string,
};

export type buttonType = {
  title: string,
  result: string,
}

export type exerciseGroup = {
  id: string,
  exerciseID: string;
  groupID: string;
}

export type messageType = {
  closeIcon: false,
  message: string,
  stayOn: boolean,
  buttons: buttonType[],
};

export type groupType = {
  id: string,
  title: string,
  users: {
    items: userType[],
  },
  groups: {
    items: exerciseType[],
  },
  group: groupType,
  groupID: string,
}

export type statType = {
  id: string,
  user: userType,
  exercise: exerciseType,
  pain: number,
  complexity: number,
  comments: string,
}

export type videoType = {
  id: string,
  key: string,
  mime: string,
}

export type imageType = {
  id: string,
  key: string,
  mime: string,
}

export type userType = {
  id: string,
  username: string,
  email: string,
  phone: string,
  onboard: boolean,
  overallProgress: number,
  groups: {
    items: groupType[],
  },
  stats: {
    items: statType[],
  },
}

export type exerciseType = {
  id: string,
  title: string,
  time: number,
  description?: string,
  thumbnail?: imageType,
  exerciseVideoId?: string,
  exerciseThumbnailId?: string,
  groups?: object,
  video?: videoType,
  exerciseGroups?: {
    items: groupType[],
  }
}

export type loggedInUserType = {
  attributes: {
    email: string,
    email_verified: boolean,
    phone_number: string,
    phone_number_verified: boolean,
    sub: string,
  },
  username: string,
  preferredMFA: string,
  keyPrefix: string,
  ess_cn: string,
  authenticationFlowType: string,
  Session: string,
}

export type areaType = {
  id: string,
  status: boolean,
}

export const messages: PersistentStore<Array<messageType>> = persist(writable([]), createSessionStorage(), 'messages');

export const activeAreas: PersistentStore<Array<areaType>> = persist(writable([
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
]), createLocalStorage(), 'activeAreas')

export const helpMessages: PersistentStore<Array<helpMessageType>> = persist(writable(<Array<helpMessageType>>([])), createLocalStorage(), 'messages');
export const updateHelpMessages: PersistentStore<boolean> = persist(writable(false), createSessionStorage(), 'updateMessages');

export const landing: PersistentStore<boolean> = persist(writable(true), createSessionStorage(), 'landing');
export const isPaused: PersistentStore<boolean> = persist(writable(false), createSessionStorage(), 'isPaused');
export const isHalfway: PersistentStore<boolean> = persist(writable(false), createSessionStorage(), 'isHalfway');
export const isCompleted: PersistentStore<boolean> = persist(writable(false), createSessionStorage(), 'isCompleted');

// Temporary User while logging in, for MFA and Confirmation.
export const transitionUser: PersistentStore<any> = persist(writable([]), createSessionStorage(), 'transitionUser');

export const pain: PersistentStore<boolean> = persist(writable(false), createSessionStorage(), 'pain');
export const difficult: PersistentStore<boolean> = persist(writable(false), createSessionStorage(), 'difficult');

// Logged in User. Keep this in Local Storage to stop the app breaking.
export const user: PersistentStore<loggedInUserType> = persist(writable(<loggedInUserType>({})), createLocalStorage(), 'user');
export const usersettings: PersistentStore<userType> = persist(writable(<userType>({})), createLocalStorage(), 'usersettings');
export const allUsers: PersistentStore<Array<userType>> = persist(writable(<Array<userType>>([])), createLocalStorage(), 'allUsers');
export const groups: PersistentStore<Array<groupType>> = persist(writable(<Array<groupType>>([])), createLocalStorage(), 'groups');
export const exercises: PersistentStore<Array<exerciseType>> = persist(writable(<Array<exerciseType>>([])), createLocalStorage(), 'exercises');

// MFA and Confirmation States.
export const mfa: PersistentStore<boolean> = persist(writable(false), createSessionStorage(), 'mfa');
export const passwordReset: PersistentStore<boolean> = persist(writable(false), createSessionStorage(), 'passwordReset');
export const signupConfirm: PersistentStore<boolean> = persist(writable(false), createSessionStorage(), 'signupConfirm');

// Error States.
export const error: PersistentStore<errorType> = persist(writable(<errorType>({})), createSessionStorage(), 'error');

export const userExercises: PersistentStore<Array<exerciseType>> = persist(writable(<Array<exerciseType>>([])), createLocalStorage(), 'userExercises');
// Admin Mode.
export const currentMode: PersistentStore<string> = persist(writable("display"), createSessionStorage(), 'currentMode');
export const currentGroup: PersistentStore<groupType> = persist(writable(<groupType>({})), createSessionStorage(), 'currentGroup');
export const currentExercise: PersistentStore<exerciseType> = persist(writable(<exerciseType>({})), createSessionStorage(), 'currentExercise');

// Version.
export const version: PersistentStore<string> = persist(writable('1.0.0'), createSessionStorage(), 'version');
