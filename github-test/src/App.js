import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as GithubAPI from './backend/GithubAPI';
import Table from './components/Table';
import Repository from './pages/Repository';

class App extends Component {

  state = {
    username: '',
    users: [],
    repos: []
  }

  componentDidMount() {
    GithubAPI.getAll().then((users) => {
        this.setState({ users })
    })
  }

  getRepos = (username) => {
    GithubAPI.getRepos(username).then((repos) => {
        this.setState({ repos, username })
    })
  }

  render() {
    const { username, users, repos } = this.state

    return (
      <div className="App">
        <Route exact path='/users/:username/repos' render={() => (
          <Repository
            repos={this.getRepos}
            user_name={username}
            list_repos={repos}
            users_component={false}
          />
        )}/>
        <Route exact path='/' render={() => (
          <Table
            rows={users}
            users_component={true}
          />
        )}/>
      </div>
    );
  }
}

export default App;
