import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './Card';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class GridCard extends Component {

  render() {
    const { classes, users } = this.props;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(16)}>
            {users.map( user => (
                <li key={user.id}>
                    <Card
                        avatar={user.avatar_url}
                        username={user.login}
                    />
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
