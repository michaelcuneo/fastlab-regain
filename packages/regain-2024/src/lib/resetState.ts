import { user, usersettings, landing, activeAreas, messages, pain, difficult, error, userExercises, currentMode, currentGroup, currentExercise, allUsers, mfa, signupConfirm } from "$lib/store";

export const resetState = () => {
  activeAreas.value = ([
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
    },
  ]);
  user.value = {
    attributes: {
      email: '',
      email_verified: false,
      phone_number: '',
      phone_number_verified: false,
      sub: '',
    },
    username: '',
    preferredMFA: '',
    keyPrefix: '',
    ess_cn: '',
    authenticationFlowType: '',
    Session: '',
  };
  usersettings.value = {
    onboard: false,
  };
  pain.value = 0;
  difficult.value = 0;
  landing.value = true;
  userExercises.value = [];
  messages.value = [];
  currentMode.value = 'display';
  currentGroup.value = {
    id: '',
    title: '',
    users: {
      items: [],
    },
    groups: {
      items: [],
    },
    group: '',
    groupID: '',
  };
  currentExercise.value = { id: '', title: '', time: 0 };
  allUsers.value = [];
  mfa.value = false;
  signupConfirm.value = false;
  error.value = {
    status: false,
    message: '',
  };
}