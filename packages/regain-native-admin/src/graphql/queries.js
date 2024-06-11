// eslint-disable
// this is an auto generated file. This will be overwritten

export const getReTask = `query GetReTask($id: ID!) {
  getRETask(id: $id) {
    id
    title
    description
    status
  }
}
`;
export const listReTasks = `query ListReTasks(
  $filter: ModelRETaskFilterInput
  $limit: Int
  $nextToken: String
) {
  listRETasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      status
    }
    nextToken
  }
}
`;
export const getRePrivateNote = `query GetRePrivateNote($id: ID!) {
  getREPrivateNote(id: $id) {
    id
    content
  }
}
`;
export const listRePrivateNotes = `query ListRePrivateNotes(
  $filter: ModelREPrivateNoteFilterInput
  $limit: Int
  $nextToken: String
) {
  listREPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
    }
    nextToken
  }
}
`;
