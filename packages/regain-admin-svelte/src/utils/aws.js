import Auth from '@aws-amplify/auth';
import API from '@aws-amplify/api';
import { user, error, signupConfirm, errorMessage, mfa, transitionUser } from './store.js';
import { createUser } from '../graphql/mutations';

let localLoginVariables;
let localTransitionalUser;

export const isEmpty = obj => {
  return obj && Object.keys(obj).length === 0;
};

const handleErrors = err => {
  error.set(true);
  if (err.errors) errorMessage.set(err.errors[0].message);
  if (err.message) errorMessage.set(err.message);
};

const createAccount = async () => {
  await API.graphql(graphqlOperation(
    createUser, 
    {
      input: {
        id: todoId,
        name: localLoginVariables.username,
        email: localLoginVariables.email,
        phone: localLoginVariables.phoneNumber,
        onboard: false,
        owner: localTransitionalUser.userSub,
      }
    })
  )
    .then(result => console.log(result))
    .catch(err => console.log(err));
};

export const getCurrentCredentials = async () => await Auth.currentCredentials()
  .then(result => result)
  .catch(err => {
    error.set(true);
    errorMessage.set(err);
  });

  export const signUp = async (username, password, phone, email) => {
    let phoneNumber = `+61${phone}`;
    await Auth.signUp(username, password, email, phoneNumber)
      .then(result => {
        transitionUser.set(result);
        localLoginVariables = {
          username,
          password,
          email,
          phoneNumber
        };
        localTransitionalUser = result;
        signupConfirm.set(true);
      })
      .catch(err => handleErrors(err));
  };
  
  export const confirmMFA = async (transuser, code) => await Auth.confirmSignIn(transuser, code, 'SMS_MFA')
    .then(result => {
      transitionUser.set(null);
      localTransitionalUser = null;
      mfa.set(false);
      user.set(result);
    })
    .catch(err => handleErrors(err));
  
  export const signIn = async (username, password) => await Auth.signIn(username, password)
    .then(result => {
      if (result.challengeName === 'SMS_MFA') {
        transitionUser.set(result);
        localTransitionalUser = result;
        mfa.set(true);
      } else {
        user.set(result);
      }
    })
    .catch(err => handleErrors(err));
  
  export const confirmSignUp = async (username, validation) => {
    await Auth.confirmSignUp(username, validation)
      .then(result => {
        result === "SUCCESS" && createAccount();
      })
      .catch(err => handleErrors(err));
  };
  