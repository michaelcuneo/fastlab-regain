/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      phone
      onboard
      overallProgress
      groups {
        items {
          id
          userID
          groupID
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      stats {
        items {
          id
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          exercise {
            id
            exerciseGroups {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
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
            description
            video {
              id
              key
              mime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            exerciseThumbnailId
            exerciseVideoId
          }
          pain
          complexity
          comments
          createdAt
          updatedAt
          userStatsId
          statsUserId
          statsExerciseId
        }
        nextToken
      }
      messages {
        items {
          id
          content
          type
          createdAt
          isSent
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          updatedAt
          userMessagesId
          messagesUserId
        }
        nextToken
      }
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
      username
      email
      phone
      onboard
      overallProgress
      groups {
        items {
          id
          userID
          groupID
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      stats {
        items {
          id
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          exercise {
            id
            exerciseGroups {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
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
            description
            video {
              id
              key
              mime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            exerciseThumbnailId
            exerciseVideoId
          }
          pain
          complexity
          comments
          createdAt
          updatedAt
          userStatsId
          statsUserId
          statsExerciseId
        }
        nextToken
      }
      messages {
        items {
          id
          content
          type
          createdAt
          isSent
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          updatedAt
          userMessagesId
          messagesUserId
        }
        nextToken
      }
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
      username
      email
      phone
      onboard
      overallProgress
      groups {
        items {
          id
          userID
          groupID
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      stats {
        items {
          id
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          exercise {
            id
            exerciseGroups {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
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
            description
            video {
              id
              key
              mime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            exerciseThumbnailId
            exerciseVideoId
          }
          pain
          complexity
          comments
          createdAt
          updatedAt
          userStatsId
          statsUserId
          statsExerciseId
        }
        nextToken
      }
      messages {
        items {
          id
          content
          type
          createdAt
          isSent
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          updatedAt
          userMessagesId
          messagesUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createStats = /* GraphQL */ `
  mutation CreateStats(
    $input: CreateStatsInput!
    $condition: ModelStatsConditionInput
  ) {
    createStats(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        phone
        onboard
        overallProgress
        groups {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        stats {
          items {
            id
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            pain
            complexity
            comments
            createdAt
            updatedAt
            userStatsId
            statsUserId
            statsExerciseId
          }
          nextToken
        }
        messages {
          items {
            id
            content
            type
            createdAt
            isSent
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            updatedAt
            userMessagesId
            messagesUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      exercise {
        id
        exerciseGroups {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
          nextToken
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
        description
        video {
          id
          key
          mime
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        exerciseThumbnailId
        exerciseVideoId
      }
      pain
      complexity
      comments
      createdAt
      updatedAt
      userStatsId
      statsUserId
      statsExerciseId
    }
  }
`;
export const updateStats = /* GraphQL */ `
  mutation UpdateStats(
    $input: UpdateStatsInput!
    $condition: ModelStatsConditionInput
  ) {
    updateStats(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        phone
        onboard
        overallProgress
        groups {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        stats {
          items {
            id
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            pain
            complexity
            comments
            createdAt
            updatedAt
            userStatsId
            statsUserId
            statsExerciseId
          }
          nextToken
        }
        messages {
          items {
            id
            content
            type
            createdAt
            isSent
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            updatedAt
            userMessagesId
            messagesUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      exercise {
        id
        exerciseGroups {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
          nextToken
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
        description
        video {
          id
          key
          mime
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        exerciseThumbnailId
        exerciseVideoId
      }
      pain
      complexity
      comments
      createdAt
      updatedAt
      userStatsId
      statsUserId
      statsExerciseId
    }
  }
`;
export const deleteStats = /* GraphQL */ `
  mutation DeleteStats(
    $input: DeleteStatsInput!
    $condition: ModelStatsConditionInput
  ) {
    deleteStats(input: $input, condition: $condition) {
      id
      user {
        id
        username
        email
        phone
        onboard
        overallProgress
        groups {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        stats {
          items {
            id
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            pain
            complexity
            comments
            createdAt
            updatedAt
            userStatsId
            statsUserId
            statsExerciseId
          }
          nextToken
        }
        messages {
          items {
            id
            content
            type
            createdAt
            isSent
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            updatedAt
            userMessagesId
            messagesUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      exercise {
        id
        exerciseGroups {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
          nextToken
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
        description
        video {
          id
          key
          mime
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        exerciseThumbnailId
        exerciseVideoId
      }
      pain
      complexity
      comments
      createdAt
      updatedAt
      userStatsId
      statsUserId
      statsExerciseId
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
      users {
        items {
          id
          userID
          groupID
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      groupExercises {
        items {
          id
          groupID
          exerciseID
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          exercise {
            id
            exerciseGroups {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
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
            description
            video {
              id
              key
              mime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            exerciseThumbnailId
            exerciseVideoId
          }
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
      users {
        items {
          id
          userID
          groupID
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      groupExercises {
        items {
          id
          groupID
          exerciseID
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          exercise {
            id
            exerciseGroups {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
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
            description
            video {
              id
              key
              mime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            exerciseThumbnailId
            exerciseVideoId
          }
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
      users {
        items {
          id
          userID
          groupID
          user {
            id
            username
            email
            phone
            onboard
            overallProgress
            groups {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            stats {
              items {
                id
                pain
                complexity
                comments
                createdAt
                updatedAt
                userStatsId
                statsUserId
                statsExerciseId
              }
              nextToken
            }
            messages {
              items {
                id
                content
                type
                createdAt
                isSent
                updatedAt
                userMessagesId
                messagesUserId
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      groupExercises {
        items {
          id
          groupID
          exerciseID
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          exercise {
            id
            exerciseGroups {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
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
            description
            video {
              id
              key
              mime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            exerciseThumbnailId
            exerciseVideoId
          }
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
      exerciseGroups {
        items {
          id
          groupID
          exerciseID
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          exercise {
            id
            exerciseGroups {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
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
            description
            video {
              id
              key
              mime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            exerciseThumbnailId
            exerciseVideoId
          }
          createdAt
          updatedAt
        }
        nextToken
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
      description
      video {
        id
        key
        mime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      exerciseThumbnailId
      exerciseVideoId
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
      exerciseGroups {
        items {
          id
          groupID
          exerciseID
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          exercise {
            id
            exerciseGroups {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
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
            description
            video {
              id
              key
              mime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            exerciseThumbnailId
            exerciseVideoId
          }
          createdAt
          updatedAt
        }
        nextToken
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
      description
      video {
        id
        key
        mime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      exerciseThumbnailId
      exerciseVideoId
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
      exerciseGroups {
        items {
          id
          groupID
          exerciseID
          group {
            id
            title
            users {
              items {
                id
                userID
                groupID
                createdAt
                updatedAt
              }
              nextToken
            }
            groupExercises {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          exercise {
            id
            exerciseGroups {
              items {
                id
                groupID
                exerciseID
                createdAt
                updatedAt
              }
              nextToken
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
            description
            video {
              id
              key
              mime
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
            exerciseThumbnailId
            exerciseVideoId
          }
          createdAt
          updatedAt
        }
        nextToken
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
      description
      video {
        id
        key
        mime
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      exerciseThumbnailId
      exerciseVideoId
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
      createdAt
      updatedAt
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const createMessages = /* GraphQL */ `
  mutation CreateMessages(
    $input: CreateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    createMessages(input: $input, condition: $condition) {
      id
      content
      type
      createdAt
      isSent
      user {
        id
        username
        email
        phone
        onboard
        overallProgress
        groups {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        stats {
          items {
            id
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            pain
            complexity
            comments
            createdAt
            updatedAt
            userStatsId
            statsUserId
            statsExerciseId
          }
          nextToken
        }
        messages {
          items {
            id
            content
            type
            createdAt
            isSent
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            updatedAt
            userMessagesId
            messagesUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      userMessagesId
      messagesUserId
    }
  }
`;
export const updateMessages = /* GraphQL */ `
  mutation UpdateMessages(
    $input: UpdateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    updateMessages(input: $input, condition: $condition) {
      id
      content
      type
      createdAt
      isSent
      user {
        id
        username
        email
        phone
        onboard
        overallProgress
        groups {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        stats {
          items {
            id
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            pain
            complexity
            comments
            createdAt
            updatedAt
            userStatsId
            statsUserId
            statsExerciseId
          }
          nextToken
        }
        messages {
          items {
            id
            content
            type
            createdAt
            isSent
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            updatedAt
            userMessagesId
            messagesUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      userMessagesId
      messagesUserId
    }
  }
`;
export const deleteMessages = /* GraphQL */ `
  mutation DeleteMessages(
    $input: DeleteMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    deleteMessages(input: $input, condition: $condition) {
      id
      content
      type
      createdAt
      isSent
      user {
        id
        username
        email
        phone
        onboard
        overallProgress
        groups {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        stats {
          items {
            id
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            pain
            complexity
            comments
            createdAt
            updatedAt
            userStatsId
            statsUserId
            statsExerciseId
          }
          nextToken
        }
        messages {
          items {
            id
            content
            type
            createdAt
            isSent
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            updatedAt
            userMessagesId
            messagesUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      userMessagesId
      messagesUserId
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
      userID
      groupID
      user {
        id
        username
        email
        phone
        onboard
        overallProgress
        groups {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        stats {
          items {
            id
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            pain
            complexity
            comments
            createdAt
            updatedAt
            userStatsId
            statsUserId
            statsExerciseId
          }
          nextToken
        }
        messages {
          items {
            id
            content
            type
            createdAt
            isSent
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            updatedAt
            userMessagesId
            messagesUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      group {
        id
        title
        users {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        groupExercises {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
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
      userID
      groupID
      user {
        id
        username
        email
        phone
        onboard
        overallProgress
        groups {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        stats {
          items {
            id
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            pain
            complexity
            comments
            createdAt
            updatedAt
            userStatsId
            statsUserId
            statsExerciseId
          }
          nextToken
        }
        messages {
          items {
            id
            content
            type
            createdAt
            isSent
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            updatedAt
            userMessagesId
            messagesUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      group {
        id
        title
        users {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        groupExercises {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
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
      userID
      groupID
      user {
        id
        username
        email
        phone
        onboard
        overallProgress
        groups {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        stats {
          items {
            id
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            pain
            complexity
            comments
            createdAt
            updatedAt
            userStatsId
            statsUserId
            statsExerciseId
          }
          nextToken
        }
        messages {
          items {
            id
            content
            type
            createdAt
            isSent
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            updatedAt
            userMessagesId
            messagesUserId
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      group {
        id
        title
        users {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        groupExercises {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
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
export const createExerciseGroups = /* GraphQL */ `
  mutation CreateExerciseGroups(
    $input: CreateExerciseGroupsInput!
    $condition: ModelExerciseGroupsConditionInput
  ) {
    createExerciseGroups(input: $input, condition: $condition) {
      id
      groupID
      exerciseID
      group {
        id
        title
        users {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        groupExercises {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      exercise {
        id
        exerciseGroups {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
          nextToken
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
        description
        video {
          id
          key
          mime
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        exerciseThumbnailId
        exerciseVideoId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateExerciseGroups = /* GraphQL */ `
  mutation UpdateExerciseGroups(
    $input: UpdateExerciseGroupsInput!
    $condition: ModelExerciseGroupsConditionInput
  ) {
    updateExerciseGroups(input: $input, condition: $condition) {
      id
      groupID
      exerciseID
      group {
        id
        title
        users {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        groupExercises {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      exercise {
        id
        exerciseGroups {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
          nextToken
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
        description
        video {
          id
          key
          mime
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        exerciseThumbnailId
        exerciseVideoId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteExerciseGroups = /* GraphQL */ `
  mutation DeleteExerciseGroups(
    $input: DeleteExerciseGroupsInput!
    $condition: ModelExerciseGroupsConditionInput
  ) {
    deleteExerciseGroups(input: $input, condition: $condition) {
      id
      groupID
      exerciseID
      group {
        id
        title
        users {
          items {
            id
            userID
            groupID
            user {
              id
              username
              email
              phone
              onboard
              overallProgress
              groups {
                nextToken
              }
              stats {
                nextToken
              }
              messages {
                nextToken
              }
              createdAt
              updatedAt
            }
            group {
              id
              title
              users {
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
          nextToken
        }
        groupExercises {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      exercise {
        id
        exerciseGroups {
          items {
            id
            groupID
            exerciseID
            group {
              id
              title
              users {
                nextToken
              }
              groupExercises {
                nextToken
              }
              createdAt
              updatedAt
            }
            exercise {
              id
              exerciseGroups {
                nextToken
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
              description
              video {
                id
                key
                mime
                createdAt
                updatedAt
              }
              createdAt
              updatedAt
              exerciseThumbnailId
              exerciseVideoId
            }
            createdAt
            updatedAt
          }
          nextToken
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
        description
        video {
          id
          key
          mime
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        exerciseThumbnailId
        exerciseVideoId
      }
      createdAt
      updatedAt
    }
  }
`;
