import React from 'react';
import { graphql, compose, withApollo } from "react-apollo";
import gql from "graphql-tag";
import { listTeams } from '../graphql/queries.js';
import {
  Link,
} from 'react-router-dom';
const queryAllTeams = gql(listTeams);
  
class TeamsGetAll extends React.Component {
  constructor() {
    super();
    this.compare = this.compare.bind(this);
    this.renderTeam = this.renderTeam.bind(this);
  }
  renderTeam = (team) => (
    <div className="team-name">
      <Link to={`/team/${team.id}`} className="card" key={team.id}>
        <span className="team-name-raw">{team.name}</span>
      </Link>
    </div>  
  );

  // sort by name
  compare = (a,b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
  render() {
    const { teams } = this.props;
    const newTeams = [].concat(teams);
    const sortedTeamsbyName = newTeams.sort(this.compare);
    console.log(this.props);
    console.log(sortedTeamsbyName);
    return (
      <div>
        <h1>Teams</h1>
        {sortedTeamsbyName.map(this.renderTeam)}
      </div>
    );
  }
}

// export default TeamsGetAll;

export default withApollo(compose(
  graphql(
      queryAllTeams,
      {
          options: {
              fetchPolicy: 'cache-first',
          },
          props: ({ data: { listTeams = { items: [] } } }) => ({
              teams: listTeams.items
          })
      }
  )
)(TeamsGetAll));
