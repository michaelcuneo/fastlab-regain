/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateStats = /* GraphQL */ `
  subscription OnCreateStats($filter: ModelSubscriptionStatsFilterInput) {
    onCreateStats(filter: $filter) {
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
export const onUpdateStats = /* GraphQL */ `
  subscription OnUpdateStats($filter: ModelSubscriptionStatsFilterInput) {
    onUpdateStats(filter: $filter) {
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
export const onDeleteStats = /* GraphQL */ `
  subscription OnDeleteStats($filter: ModelSubscriptionStatsFilterInput) {
    onDeleteStats(filter: $filter) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onCreateGroup(filter: $filter) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup($filter: ModelSubscriptionGroupFilterInput) {
    onUpdateGroup(filter: $filter) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup($filter: ModelSubscriptionGroupFilterInput) {
    onDeleteGroup(filter: $filter) {
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
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
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
export const onCreateImage = /* GraphQL */ `
  subscription OnCreateImage($filter: ModelSubscriptionImageFilterInput) {
    onCreateImage(filter: $filter) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateImage = /* GraphQL */ `
  subscription OnUpdateImage($filter: ModelSubscriptionImageFilterInput) {
    onUpdateImage(filter: $filter) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteImage = /* GraphQL */ `
  subscription OnDeleteImage($filter: ModelSubscriptionImageFilterInput) {
    onDeleteImage(filter: $filter) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onCreateVideo(filter: $filter) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo($filter: ModelSubscriptionVideoFilterInput) {
    onUpdateVideo(filter: $filter) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo($filter: ModelSubscriptionVideoFilterInput) {
    onDeleteVideo(filter: $filter) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMessages = /* GraphQL */ `
  subscription OnCreateMessages($filter: ModelSubscriptionMessagesFilterInput) {
    onCreateMessages(filter: $filter) {
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
export const onUpdateMessages = /* GraphQL */ `
  subscription OnUpdateMessages($filter: ModelSubscriptionMessagesFilterInput) {
    onUpdateMessages(filter: $filter) {
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
export const onDeleteMessages = /* GraphQL */ `
  subscription OnDeleteMessages($filter: ModelSubscriptionMessagesFilterInput) {
    onDeleteMessages(filter: $filter) {
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
export const onCreateUserGroups = /* GraphQL */ `
  subscription OnCreateUserGroups(
    $filter: ModelSubscriptionUserGroupsFilterInput
  ) {
    onCreateUserGroups(filter: $filter) {
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
export const onUpdateUserGroups = /* GraphQL */ `
  subscription OnUpdateUserGroups(
    $filter: ModelSubscriptionUserGroupsFilterInput
  ) {
    onUpdateUserGroups(filter: $filter) {
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
export const onDeleteUserGroups = /* GraphQL */ `
  subscription OnDeleteUserGroups(
    $filter: ModelSubscriptionUserGroupsFilterInput
  ) {
    onDeleteUserGroups(filter: $filter) {
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
export const onCreateExerciseGroups = /* GraphQL */ `
  subscription OnCreateExerciseGroups(
    $filter: ModelSubscriptionExerciseGroupsFilterInput
  ) {
    onCreateExerciseGroups(filter: $filter) {
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
export const onUpdateExerciseGroups = /* GraphQL */ `
  subscription OnUpdateExerciseGroups(
    $filter: ModelSubscriptionExerciseGroupsFilterInput
  ) {
    onUpdateExerciseGroups(filter: $filter) {
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
export const onDeleteExerciseGroups = /* GraphQL */ `
  subscription OnDeleteExerciseGroups(
    $filter: ModelSubscriptionExerciseGroupsFilterInput
  ) {
    onDeleteExerciseGroups(filter: $filter) {
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
