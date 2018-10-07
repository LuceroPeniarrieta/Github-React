import React, { Component } from 'react';
import GridCard from './components/GridCard';
import * as GithubAPI from './backend/GithubAPI';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    GithubAPI.getAll().then((users) => {
        this.setState({ users })
    })
  }

  render() {
    const { users } = this.state

    return (
      <div className="App">
        <GridCard
          users={users}
        />
      </div>
    );
  }
}

export default App;
