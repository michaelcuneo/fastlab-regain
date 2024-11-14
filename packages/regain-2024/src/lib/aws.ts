import { v4 as uuidv4 } from 'uuid';

import {
  user,
  usersettings,
  error,
  signupConfirm,
  mfa,
  transitionUser,
  userExercises,
} from './store';

import { onlyUnique } from './helpers';

let localLoginVariables = {
  username: '',
  password: '',
  email: '',
  phoneNumber: '',
};
let localTransitionalUser = {
  userSub: '',
};

export const isEmpty = (obj: object) => {
  return obj && Object.keys(obj).length === 0;
};

/*
export const handleErrors = (err: any) => {
  if (err.errors) error.set({
    status: true,
    message: err.errors[0].message
  });
  if (err.message) error.set({
    status: true,
    message: err.message,
  });
};

export const addVideo = async (data: videoType) => {
  await API.graphql(graphqlOperation(
    createVideo,
    {
      input: data,
    }
  ));
};

export const editVideo = async (data: videoType) => {
  await API.graphql(graphqlOperation(
    updateVideo,
    {
      input: data,
    }
  ));
};

export const removeVideo = async (data: object) => {
  await API.graphql(graphqlOperation(
    deleteVideo,
    {
      input: data,
    }
  ));
};

export const addImage = async (data: imageType) => {
  await API.graphql(graphqlOperation(
    createImage,
    {
      input: data,
    }
  ));
};

export const editImage = async (data: imageType) => {
  await API.graphql(graphqlOperation(
    updateImage,
    {
      input: data,
    }
  ));
};

export const removeImage = async (data: object) => {
  await API.graphql(graphqlOperation(
    deleteImage,
    {
      input: data,
    }
  ));
};

export const addGroup = async (data: groupType) => {
  await API.graphql(graphqlOperation(
    createGroup,
    {
      input: data,
    }
  ));
};

export const editGroup = async (data: groupType) => {
  await API.graphql(graphqlOperation(
    updateGroup,
    {
      input: data,
    }
  ));
};

export const removeGroup = async (data: object) => {
  await API.graphql(graphqlOperation(
    deleteGroup,
    {
      input: data,
    }
  ));
};

export const addExerciseGroup = async (data: exerciseGroup) => {
  await API.graphql(graphqlOperation(
    createExerciseGroups,
    {
      input: data,
    }
  ));
};

export const EditExerciseGroup = async (data: exerciseGroup) => {
  await API.graphql(graphqlOperation(
    updateExerciseGroups,
    {
      input: data,
    }
  ));
};

export const removeExerciseGroup = async (data: object) => {
  await API.graphql(graphqlOperation(
    deleteExerciseGroups,
    {
      input: data,
    }
  ));
};

export const addExercise = async (data: exerciseType) => {
  await API.graphql(graphqlOperation(
    createExercise,
    {
      input: data,
    }
  ));
};

export const editExercise = async (data: exerciseType) => {
  await API.graphql(graphqlOperation(
    updateExercise,
    {
      input: data,
    }
  ));
};

export const removeExercise = async (data: object) => {
  await API.graphql(graphqlOperation(
    deleteExercise,
    {
      input: data,
    }
  ));
};

export const addMessage = async (data: helpMessageType) => {
  await API.graphql(graphqlOperation(
    createMessages,
    {
      input: data,
    }
  ));
};

export const editMessage = async (data: helpMessageType) => {
  await API.graphql(graphqlOperation(
    updateMessages,
    {
      input: data,
    }
  ));
};

export const removeMessage = async (data: object) => {
  await API.graphql(graphqlOperation(
    deleteMessages,
    {
      input: data,
    }
  ));
};

export const uploadFile = async (file: File) =>
  await Storage.put(file.name, file, {
    contentType: file.type,
  })
    .then(result => result)
    .catch(err => handleErrors(err));

export const downloadFile = async key =>
  await Storage.get(key)
    .then(result => result)
    .catch(err => handleErrors(err))

const createAccount = async () => {
  const userExists = await API.graphql(graphqlOperation(
    getUser,
    {
      id: localTransitionalUser.userSub,
    }
  ));

  (await API.graphql(graphqlOperation(
    createUser,
    {
      input: {
        id: localTransitionalUser.userSub,
        username: localLoginVariables.username,
        email: localLoginVariables.email,
        phone: localLoginVariables.phoneNumber,
        overallProgress: 0,
        onboard: true,
      }
    })
  ) as Promise<createUser>)
    .then(result => result)
    .catch(err => handleErrors(err));
};

export let setupUserExercises = async (exercises: exerciseType[], usersettings: userType) => {
  let exerciseList = [];
  for (let i = 0; i < exercises.length; i++) {
    for (let j = 0; j < usersettings.groups.items.length; j++) {
      if (usersettings.groups.items[j].group.id === exercises[i].exerciseGroups.items[0].groupID) {
        exerciseList.push(exercises[i]);
      }
    }
  }

  let unique = exerciseList.filter(onlyUnique);
  exerciseList = unique;
  // console.log(exerciseList);
  userExercises.set(exerciseList);
};

export const downloadUser = async user => {
  await (API.graphql(graphqlOperation(
    getUser,
    {
      id: user.attributes.sub,
    }
  )) as any)
    .then((result: any) => {
      usersettings.set(result.data.getUser);
    })
    .catch((err: any) => handleErrors(err));
};

export const modifyUserAreas = async (user: userType, areas: areaType[]) => {
  user.groups.items.map(group => {
    API.graphql(graphqlOperation(
      deleteUserGroups,
      {
        input: {
          id: group.id,
        }
      }
    ));
  });

  areas.map((area: areaType) => {
    if (area.status === true) {
      (API.graphql(graphqlOperation(
        createUserGroups,
        {
          input: {
            id: uuidv4(),
            userID: user.id,
            groupID: area.id,
          },
        }
      )) as any)
        .then((result: any) => result)
        .catch((err: any) => handleErrors(err));
    }
  });

  await (API.graphql(graphqlOperation(
    updateUser,
    {
      input: {
        id: user.id,
        onboard: false,
      }
    })
  ) as any)
    .then((result: any) => result)
    .catch((err: any) => handleErrors(err));
};

export const getCurrentCredentials = async () => await Auth.currentCredentials()
  .then(result => result)
  .catch(err => handleErrors(err));

export const signUp = async (username: string, password: string, phone: string, email: string) => {
  let phoneNumber = `+61${phone}`;
  await Auth.signUp(username, password, email, phoneNumber)
    .then(result => {
      transitionUser.set(result as any);
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

export const confirmPasswordReset = async (transuser: string, password: string) => await Auth.completeNewPassword(transuser, password)
  .then(result => {
    transitionUser.set(null);
    // confirmReset.set(false);
    user.set(result);
  })
  .catch(err => handleErrors(err));


export const confirmMFA = async (transuser: string, code: string) => await Auth.confirmSignIn(transuser, code, 'SMS_MFA')
  .then(result => {
    transitionUser.set(null);
    localTransitionalUser = null;
    mfa.set(false);
    downloadUser(result);
    user.set(result);
  })
  .catch(err => handleErrors(err));

export const signIn = async (username: string, password: string) => await Auth.signIn(username, password)
  .then(result => {
    if (result.challengeName === 'SMS_MFA') {
      transitionUser.set(result);
      localTransitionalUser = result;
      mfa.set(true);
    } else {
      let usersettings = downloadUser(result);
      // console.log(usersettings);
      // setupUserExercises(exercises, usersettings);
      user.set(result);
    }
  })
  .catch(err => handleErrors(err));

export const confirmSignUp = async (username: string, validation: string) => {
  await Auth.confirmSignUp(username, validation)
    .then(result => {
      result === "SUCCESS" && createAccount();
    })
    .catch(err => handleErrors(err));
};
*/