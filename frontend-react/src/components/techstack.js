import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#292929',
    color: 'white',
    borderRadius: '5px',
    margin: '5% 7%',
    padding: '5%'
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
  },
  tech: {
    textAlign: 'center',
    padding: '15px',
    color: '#3F51B5'
  }
}));

function TechStack () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ScrollAnimation duration={4} animateIn='fadeIn'>
        <Hidden only={['xs']}>
          {' '}
          <Typography variant='h4' className={classes.tech} component='h3'>
            My Techstack
          </Typography>
        </Hidden>
        <Grid container spacing={6}>
          <Grid item xs>
            <i className='devicon-javascript-plain' />
          </Grid>
          <Grid item xs>
            <i className='devicon-python-plain-wordmark' />
          </Grid>
          <Grid item xs>
            <i className='devicon-c-plain' />
          </Grid>
          <Grid item xs>
            <i className='devicon-html5-plain-wordmark' />
          </Grid>
          <Grid item xs>
            <i className='devicon-css3-plain-wordmark' />
          </Grid>
          <Grid item xs>
            <i className='devicon-mysql-plain-wordmark' />
          </Grid>
          <Grid item xs>
            <i className='devicon-react-original-wordmark' />
          </Grid>
          <Grid item xs>
            <i className='devicon-nodejs-plain-wordmark' />
          </Grid>
          <Grid item xs>
            <i className='devicon-express-original-wordmark' />
          </Grid>
          <Grid item xs>
            <i className='devicon-bootstrap-plain-wordmark' />
          </Grid>
          <Grid item xs>
            <i class='devicon-github-plain-wordmark' />
          </Grid>
          <Grid item xs>
            <i className='devicon-git-plain-wordmark' />
          </Grid>
          <Grid item xs>
            <i className='devicon-jquery-plain' />
          </Grid>

          <Grid item xs>
            <i className='devicon-linux-plain' />
          </Grid>
          <Grid item xs>
            <i className='devicon-nginx-original' />
          </Grid>
          <Grid item xs>
            <i class='devicon-amazonwebservices-original' />
          </Grid>
          <Grid item xs>
            <i className='devicon-ubuntu-plain' />
          </Grid>
          <Grid item xs>
            <i className='devicon-visualstudio-plain' />
          </Grid>
        </Grid>
      </ScrollAnimation>
    </div>
  );
}

export default TechStack;
