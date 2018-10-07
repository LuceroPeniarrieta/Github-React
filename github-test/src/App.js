import React, { Component } from 'react';
import * as GithubAPI from './backend/GithubAPI';
import Table from './components/Table';

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
        <Table
          rows={users}
        />
      </div>


    );
  }
}

export default App;
