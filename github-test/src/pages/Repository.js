
import React, { Component } from 'react'
import * as GithubAPI from '../backend/GithubAPI';
import Table from '../components/Table';

class Repository extends Component {

    state = {
        repositories: []
    }    
    
    getRepos = async(username) => {
        return await GithubAPI.getRepos(username)
    }

    async componentDidMount() {
        const repos = await this.getRepos(this.props.match.params.username)
        this.setState({ repositories: repos })
    }
 
    render() {
        const { users_component } = this.props

        return (
            <div> 
                <Table
                    rows={this.state.repositories}
                    users_component={users_component}
                />
            </div>
        )
    }
}

export default Repository