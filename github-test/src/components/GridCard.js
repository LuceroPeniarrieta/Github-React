import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const styles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class GridCard extends Component {

  render() {
    const { classes, items, users_component } = this.props;
    console.log('GRIDCARD', this.props)

    return (
      <Grid container className={classes.root} spacing={24}>
        <Grid item xs={9}>
          <Grid container className={classes.demo} justify="center" spacing={24}>
            {items.map( item => (
                <li key={item.id}>
                  {users_component  ?  (
                    <Card
                      avatar={item.avatar_url}
                      username={item.login}
                      github={item.html_url}
                      users_component={users_component}
                    />
                  ) : (
                    <Card
                      github={item.git_url}
                      repo_name={item.name}
                      repo_description={item.description}
                      open_issues={item.open_issues}
                      forks_count={item.forks_count}
                    />
                  )}
                </li>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

GridCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GridCard);
