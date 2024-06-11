/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStats = /* GraphQL */ `
  query GetStats($id: ID!) {
    getStats(id: $id) {
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
export const listStats = /* GraphQL */ `
  query ListStats(
    $filter: ModelStatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              user {
                id
                username
                email
                phone
                onboard
                overallProgress
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
                createdAt
                updatedAt
              }
              exercise {
                id
                title
                time
                description
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
                createdAt
                updatedAt
              }
              exercise {
                id
                title
                time
                description
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
      nextToken
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
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
      nextToken
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
      id
      key
      mime
      createdAt
      updatedAt
    }
  }
`;
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        key
        mime
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessages = /* GraphQL */ `
  query GetMessages($id: ID!) {
    getMessages(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              user {
                id
                username
                email
                phone
                onboard
                overallProgress
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
                createdAt
                updatedAt
              }
              exercise {
                id
                title
                time
                description
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
      nextToken
    }
  }
`;
export const getUserGroups = /* GraphQL */ `
  query GetUserGroups($id: ID!) {
    getUserGroups(id: $id) {
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
export const listUserGroups = /* GraphQL */ `
  query ListUserGroups(
    $filter: ModelUserGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              user {
                id
                username
                email
                phone
                onboard
                overallProgress
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
                createdAt
                updatedAt
              }
              exercise {
                id
                title
                time
                description
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
          groupExercises {
            items {
              id
              groupID
              exerciseID
              group {
                id
                title
                createdAt
                updatedAt
              }
              exercise {
                id
                title
                time
                description
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
      nextToken
    }
  }
`;
export const getExerciseGroups = /* GraphQL */ `
  query GetExerciseGroups($id: ID!) {
    getExerciseGroups(id: $id) {
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
export const listExerciseGroups = /* GraphQL */ `
  query ListExerciseGroups(
    $filter: ModelExerciseGroupsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
              user {
                id
                username
                email
                phone
                onboard
                overallProgress
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
          groupExercises {
            items {
              id
              groupID
              exerciseID
              group {
                id
                title
                createdAt
                updatedAt
              }
              exercise {
                id
                title
                time
                description
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
                createdAt
                updatedAt
              }
              exercise {
                id
                title
                time
                description
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
      nextToken
    }
  }
`;
export const messagesByDate = /* GraphQL */ `
  query MessagesByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
              user {
                id
                username
                email
                phone
                onboard
                overallProgress
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
                createdAt
                updatedAt
              }
              exercise {
                id
                title
                time
                description
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
      nextToken
    }
  }
`;
