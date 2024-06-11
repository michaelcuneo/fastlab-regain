/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUserGroups = /* GraphQL */ `
  query GetUserGroups($id: ID!) {
    getUserGroups(id: $id) {
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
export const listUserGroupss = /* GraphQL */ `
  query ListUserGroupss(
    $filter: ModelUserGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroupss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user {
          id
          name
          email
          phone
          onboard
          owner
          createdAt
          updatedAt
        }
        group {
          id
          title
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getImage = /* GraphQL */ `
  query GetImage($id: ID!) {
    getImage(id: $id) {
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
export const listImages = /* GraphQL */ `
  query ListImages(
    $filter: ModelImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
