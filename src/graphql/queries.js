// eslint-disable
// this is an auto generated file. This will be overwritten

export const getTeam = `query GetTeam($id: ID!) {
  getTeam(id: $id) {
    id
    name
    isActive
  }
}
`;
export const listTeams = `query ListTeams(
  $filter: TableTeamFilterInput
  $limit: Int
  $nextToken: String
) {
  listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      isActive
    }
    nextToken
  }
}
`;
