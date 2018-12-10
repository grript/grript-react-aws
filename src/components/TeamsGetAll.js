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
    this.handleSync = this.handleSync.bind(this);

    this.state = {
      busy: false
    }
  }

  static defaultProps = {
    teams: [],
  }
  renderTeam = (team) => (
    <div className="team-name" key={team.id}>
      <Link to={`/team/${team.id}`} className="card" >
        <span className="team-name-raw">{team.name}</span>
      </Link>
    </div>  
  );

  handleSync = async () => {
    console.log('syncing with server');
    const { client } = this.props;
    const query = queryAllTeams;
    this.setState({ busy: true });
    await client.query({
        query,
        fetchPolicy: 'network-only',
    });
    this.setState({ busy: false });
  }

  // sort by name
  compare = (a,b) => {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
  render() {
    const { busy } = this.state;
    const { teams } = this.props;
    const newTeams = [].concat(teams);
    const sortedTeamsbyName = newTeams.sort(this.compare);
    console.log(this.props);
    console.log(sortedTeamsbyName);
    return (
      <div>
        <button className="basic button" onClick={this.handleSync} disabled={busy}>
          <span aria-hidden="true" className={`refresh icon ${busy && "loading"}`}></span>
          Sync with Server
        </button>
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
              fetchPolicy: 'cache-and-network',
          },
          props: ({ data: { listTeams = { items: [] } } }) => ({
              teams: listTeams.items
          })
      }
  )
)(TeamsGetAll));
