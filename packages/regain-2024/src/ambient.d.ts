type helpMessageType = {
  id: string,
  createdAt: string,
  content: string,
  type: string,
  isSent: boolean,
  messagesUserId: string,
  user?: userType,
}

type errorType = {
  status: boolean,
  message: string,
};

type buttonType = {
  title: string,
  result: string,
}

type exerciseGroup = {
  id: string,
  exerciseID: string;
  groupID: string;
}

type messageType = {
  closeIcon: false,
  message: string,
  stayOn: boolean,
  buttons: buttonType[],
};

type groupType = {
  id: string,
  title: string,
  users: {
    items: userType[],
  },
  groups: {
    items: exerciseType[],
  },
  group: string,
  groupID: string,
}

type statType = {
  id: string,
  user: userType,
  exercise: exerciseType,
  pain: number,
  complexity: number,
  comments: string,
}

type videoType = {
  id: string,
  key: string,
  mime: string,
}

type imageType = {
  id: string,
  key: string,
  mime: string,
}

type userType = {
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

type userSettingsType = {
  onboard: boolean,
}

type exerciseType = {
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

type loggedInUserType = {
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

type areaType = {
  id: string,
  status: boolean,
}

type leafType = {
  height: number;
  width: number;
  top: number;
  left: number;
  scale: number;
  opacity: number;
  rotate: number;
};
