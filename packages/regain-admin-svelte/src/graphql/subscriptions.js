/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String!) {
    onCreateUser(owner: $owner) {
      id
      name
      email
      phone
      onboard
      selectedGroups {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String!) {
    onUpdateUser(owner: $owner) {
      id
      name
      email
      phone
      onboard
      selectedGroups {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String!) {
    onDeleteUser(owner: $owner) {
      id
      name
      email
      phone
      onboard
      selectedGroups {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUserGroups = /* GraphQL */ `
  subscription OnCreateUserGroups {
    onCreateUserGroups {
      id
      user {
        id
        name
        email
        phone
        onboard
        selectedGroups {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      group {
        id
        title
        user {
          nextToken
        }
        groupExercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUserGroups = /* GraphQL */ `
  subscription OnUpdateUserGroups {
    onUpdateUserGroups {
      id
      user {
        id
        name
        email
        phone
        onboard
        selectedGroups {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      group {
        id
        title
        user {
          nextToken
        }
        groupExercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUserGroups = /* GraphQL */ `
  subscription OnDeleteUserGroups {
    onDeleteUserGroups {
      id
      user {
        id
        name
        email
        phone
        onboard
        selectedGroups {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      group {
        id
        title
        user {
          nextToken
        }
        groupExercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup {
    onCreateGroup {
      id
      title
      user {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      groupExercises {
        items {
          id
          title
          time
          url
          shortDescription
          longDescription
          video
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup {
    onUpdateGroup {
      id
      title
      user {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      groupExercises {
        items {
          id
          title
          time
          url
          shortDescription
          longDescription
          video
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup {
    onDeleteGroup {
      id
      title
      user {
        items {
          id
          createdAt
          updatedAt
        }
        nextToken
      }
      groupExercises {
        items {
          id
          title
          time
          url
          shortDescription
          longDescription
          video
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise {
    onCreateExercise {
      id
      group {
        id
        title
        user {
          nextToken
        }
        groupExercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      time
      thumbnail {
        id
        key
        mime
        exerciseThumbnail {
          id
          title
          time
          url
          shortDescription
          longDescription
          video
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      url
      shortDescription
      longDescription
      video
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise {
    onUpdateExercise {
      id
      group {
        id
        title
        user {
          nextToken
        }
        groupExercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      time
      thumbnail {
        id
        key
        mime
        exerciseThumbnail {
          id
          title
          time
          url
          shortDescription
          longDescription
          video
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      url
      shortDescription
      longDescription
      video
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise {
    onDeleteExercise {
      id
      group {
        id
        title
        user {
          nextToken
        }
        groupExercises {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      time
      thumbnail {
        id
        key
        mime
        exerciseThumbnail {
          id
          title
          time
          url
          shortDescription
          longDescription
          video
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      url
      shortDescription
      longDescription
      video
      createdAt
      updatedAt
    }
  }
`;
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage {
    onCreateImage {
      id
      key
      mime
      exerciseThumbnail {
        id
        group {
          id
          title
          createdAt
          updatedAt
        }
        title
        time
        thumbnail {
          id
          key
          mime
          createdAt
          updatedAt
        }
        url
        shortDescription
        longDescription
        video
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage {
    onUpdateImage {
      id
      key
      mime
      exerciseThumbnail {
        id
        group {
          id
          title
          createdAt
          updatedAt
        }
        title
        time
        thumbnail {
          id
          key
          mime
          createdAt
          updatedAt
        }
        url
        shortDescription
        longDescription
        video
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage {
    onDeleteImage {
      id
      key
      mime
      exerciseThumbnail {
        id
        group {
          id
          title
          createdAt
          updatedAt
        }
        title
        time
        thumbnail {
          id
          key
          mime
          createdAt
          updatedAt
        }
        url
        shortDescription
        longDescription
        video
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
