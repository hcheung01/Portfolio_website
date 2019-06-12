import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from './drawer';
import HomeIcon from '@material-ui/icons/Home';
import ImageAvatars from '../avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  header: {
    background: '#292929'
  }
}));

const icons = {
  width: '100px',
  height: '100px'
};

function ButtonAppBar () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <TemporaryDrawer />
          <Typography variant='h6' className={classes.title}>
            Welcome to Heindrick's Portfolio
          </Typography>
          <Button color='inherit' href='/home'>Home</Button>
          <HomeIcon button href='/home' />
        </Toolbar>
        <ImageAvatars />
        <div className='icons'>
          <i className='devicon-react-original-wordmark' />
          <i className='devicon-javascript-plain' />
          <i className='devicon-python-plain-wordmark' />
          <i className='devicon-nodejs-plain-wordmark' />
          <i className='devicon-html5-plain-wordmark' />
          <i className='devicon-css3-plain-wordmark' />
          <i className='devicon-mysql-plain-wordmark' />
          <i className='devicon-c-plain' />
          <i className='devicon-express-original-wordmark' />
          <i className='devicon-bootstrap-plain-wordmark' />
          <i className='devicon-git-plain-wordmark' />
          <i className='devicon-jquery-plain' />
          <i className='devicon-linux-plain' />
          <i className='devicon-nginx-original' />
          <i className='devicon-ubuntu-plain' />
          <i className='devicon-visualstudio-plain' />
        </div>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
