
import React, { Component } from 'react'
import Table from '../components/Table';

class Repository extends Component {

    componentDidMount() {
        this.props.repos('mojombo')
    }
 
    render() {
        const { list_repos, users_component } = this.props
        
        return (
            <div> 
                <Table
                    rows={list_repos}
                    users_component={users_component}
                />
            </div>
        )
    }
}

export default Repository