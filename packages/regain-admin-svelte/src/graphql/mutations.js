/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createUserGroups = /* GraphQL */ `
  mutation CreateUserGroups(
    $input: CreateUserGroupsInput!
    $condition: ModelUserGroupsConditionInput
  ) {
    createUserGroups(input: $input, condition: $condition) {
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
export const updateUserGroups = /* GraphQL */ `
  mutation UpdateUserGroups(
    $input: UpdateUserGroupsInput!
    $condition: ModelUserGroupsConditionInput
  ) {
    updateUserGroups(input: $input, condition: $condition) {
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
export const deleteUserGroups = /* GraphQL */ `
  mutation DeleteUserGroups(
    $input: DeleteUserGroupsInput!
    $condition: ModelUserGroupsConditionInput
  ) {
    deleteUserGroups(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
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
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
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
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
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
