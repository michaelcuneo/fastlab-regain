import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  User: a
    .model({
      id: a.id(),
      username: a.string().required(),
      email: a.string().required(),
      phone: a.string().required(),
      onboard: a.boolean().required(),
      overallProgress: a.integer().required(),
      groups: a
        .hasMany('Group', 'userID'),
      stats: a
        .hasMany('Stat', 'userID'),
      messages: a
        .hasMany('Message', 'userID')
    })
    .authorization((allow) => [allow.guest()]),
  Stat: a
    .model({
      id: a.id(),
      userID: a.string().required(),
      statID: a.string().required(),
      exercise: a.hasOne('Exercise', 'exerciseID').required(),
      pain: a.integer().required(),
      complexity: a.integer().required(),
      comments: a.string().required(),
    })
    .authorization((allow) => [allow.guest()]),
  Group: a
    .model({
      id: a.id(),
      title: a.string().required(),
      userID: a.string().required(),
      exerciseID: a.string().required(),
    })
    .authorization((allow) => [allow.guest()]),
  Exercise: a
    .model({
      id: a.id(),
      title: a.string().required(),
      time: a.integer().required(),
      description: a.string().required(),
      thumbnail: a.ref('Image').required(),
      video: a.hasOne('Video', 'videoID').required(),
      groups: a
        .hasMany('Group', 'exerciseID'),
    })
    .authorization((allow) => [allow.guest()]),
  Image: a
    .model({
      id: a.id(),
      key: a.string().required(),
      mime: a.string().required(),
    })
    .authorization((allow) => [allow.guest()]),
  Video: a
    .model({
      id: a.id(),
      key: a.string().required(),
      mime: a.string().required(),
    })
    .authorization((allow) => [allow.guest()]),
  Message: a
    .model({
      id: a.id(),
      content: a.string().required(),
      type: a.string().required(),
      createdAt: a.string().required(),
      isSent: a.boolean().required(),
      userID: a.string().required(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
