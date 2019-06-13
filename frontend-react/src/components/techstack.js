import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#292929',
    color: 'white',
    padding: '10px',
    borderRadius: '5px'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: '#3F51B5'
  },
  header: {
    background: '#292929'
  },
  text: {
    color: '#3F51B5'
  }
}));

function TechStack () {
  const classes = useStyles();

  return (
    <div style={{ margin: '4%' }} className={classes.root}>
      <ScrollAnimation duration='8' animateIn='fadeIn'>
        <Grid container spacing={2}>
          {/* <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-javascript-plain' />
          </Grid>
          {/* </Hidden> */}
          {/* <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-python-plain-wordmark' />
          </Grid>
          {/* </Hidden> */}

          {/* <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-c-plain' />
          </Grid>
          {/* </Hidden> */}
          {/* <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-html5-plain-wordmark' />
          </Grid>
          {/* </Hidden> */}
          {/* <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-css3-plain-wordmark' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-mysql-plain-wordmark' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-react-original-wordmark' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-nodejs-plain-wordmark' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-express-original-wordmark' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-bootstrap-plain-wordmark' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i class='devicon-github-plain-wordmark' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-git-plain-wordmark' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-jquery-plain' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-linux-plain' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-nginx-original' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i class='devicon-amazonwebservices-original' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-ubuntu-plain' />
          </Grid>
          {/* </Hidden>
          <Hidden only={['xs']}> */}
          <Grid item xs>
            <i className='devicon-visualstudio-plain' />
          </Grid>
          {/* </Hidden> */}
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default TechStack;
