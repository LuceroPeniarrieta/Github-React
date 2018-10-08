import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as GithubAPI from './backend/GithubAPI';
import Table from './components/Table';
import Repository from './pages/Repository';

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
        <BrowserRouter>
          <Switch>
            <Route path='/users/:username/repos' component={Repository}/>
            <Route exact path='/' render={() => (
              <Table
                rows={users}
                users_component={true}
              />
            )}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
