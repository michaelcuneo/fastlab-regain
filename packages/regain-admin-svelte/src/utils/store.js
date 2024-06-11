"use strict";

import { persist, localStorage, sessionStorage } from '@macfja/svelte-persistent-store';
import { writable } from 'svelte/store';

export const messages = persist(writable([
  {
    visible: true,
    message: "Hey",
    stayOn: false,
  },
  {
    visible: true,
    message: "Welcome to Regain, you can click the Minus Button to the left to remove these messages",
    stayOn: true,
  },
  {
    visible: true,
    message: "Good. Messages will pop up here to let you know your progress and feedback.",
    stayOn: false,
  },
  {
    visible: true,
    message: "Are you sure the body areas you've chosen are correct? You can change them by using the Settings button on the top right.",
    stayOn: false,
  }
]), sessionStorage(), 'messages');

export const landing = persist(writable(true), sessionStorage(), 'landing');
export const onboard = persist(writable(false), sessionStorage(), 'onboard');

// Temporary User while logging in, for MFA and Confirmation.
export const transitionUser = persist(writable([]), sessionStorage(), 'transitionUser');

// Logged in User.
export const user = persist(writable([]), sessionStorage(), 'user');

// MFA and Confirmation States.
export const mfa = persist(writable(false), sessionStorage(), 'mfa');
export const signupConfirm = persist(writable(false), sessionStorage(), 'signupConfirm');

// Error States.
export const error = persist(writable(false), sessionStorage(), 'error');
export const errorMessage = persist(writable(''), sessionStorage(), 'errorMessage');

// Version.
export const version = persist(writable('version'), sessionStorage(), '1.0.0');
