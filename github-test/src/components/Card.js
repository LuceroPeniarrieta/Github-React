import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LinkIcon from '@material-ui/icons/Link';
import BoxIcon from '@material-ui/icons/AccountBox';

const styles = {
    card: {
      maxWidth: 245,
    },
    media: {
      width: 245,
      height: 240,
    },
};

class MediaCard extends Component {

    goTo(url) {
        window.open(url, '_blank');
    }

    render() {
        const { classes, 
                avatar, username, github, users_component,
                repo_name, repo_description, open_issues, forks_count } = this.props
        var user_repo = `/users/${username}/repos`
      
        return (
          <Card className={classes.card}>
            <CardActionArea>
              {users_component  &&  (
                <CardMedia className={classes.media} image={avatar}/>
              )}

              {users_component ? (
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                    {username}
                    </Typography>
                </CardContent>
              ) : (
                <CardContent>
                    <Typography component="p">Name: {repo_name}</Typography>
                    <Typography component="p">Description: {repo_description}</Typography>
                    <Typography component="p">Open Issues: {open_issues}</Typography>
                    <Typography component="p">Forks: {forks_count}</Typography>
                </CardContent>
              )}
            </CardActionArea>

            {users_component && (
                <CardActions>
                    <IconButton className={classes.button} aria-label="Delete">
                        <LinkIcon onClick={()=> this.goTo(github)}/>
                    </IconButton>
                    <IconButton className={classes.button} aria-label="Delete">
                        <BoxIcon />
                        <Link to={user_repo}>Repos</Link>
                    </IconButton>
                </CardActions>
            )}
          </Card>
        );
      }
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);