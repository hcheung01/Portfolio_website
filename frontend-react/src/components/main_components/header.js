import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from './drawer';
import HomeIcon from '@material-ui/icons/Home';
import ImageAvatars from '../avatar';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
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
  svg: {
    fill: 'currentColor',
    paddingBottom: '15px'
  }
}));

const url = {
  url1: 'www.google.com',
  url2: 'www.linkedin.com/heindrick-cheung'
};

function ButtonAppBar () {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.header} position='static'>
        <Toolbar>
          <TemporaryDrawer />
          <Typography variant='h6' className={classes.title}>
            Welcome to my playground...
          </Typography>
          <Button color='inherit' className={classes.text} href='/home'>
            Home
          </Button>
          <HomeIcon img href='/home' />
        </Toolbar>
        <ScrollAnimation duration='2' animateIn='fadeIn'>
          <ImageAvatars />
        </ScrollAnimation>

        <Container className={classes.text} maxWidth='md'>
          <ScrollAnimation delay='8' duration='8' animateIn='fadeIn'>
            <Typography align='center' paragraph variant='h2'>
              HEINDRICK CHEUNG
            </Typography>
            <Typography align='center' paragraph variant='h3'>
              I love to build
            </Typography>
            <Typography align='center' paragraph variant='h6'>
              heindrickcheung.website
            </Typography>
            <Typography align='center' paragraph variant='p'>
              I am a software engineer based in San Francisco, CA specializing
              in web developments and applications
            </Typography>
          </ScrollAnimation>
        </Container>

        <Container maxWidth='xs'>
          <ScrollAnimation duration='3' animateIn='fadeIn'>
            <Grid container spacing={2}>
              <Hidden only={['xs']}>
                <Grid
                  item
                  xs
                  onClick={e =>
                    window.open(
                      'http://www.linkedin.com/in/heindrick-cheung',
                      '_blank'
                    )
                  }
                >
                  <svg
                    className={classes.svg}
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>LinkedIn icon</title>
                    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
                  </svg>{' '}
                </Grid>
              </Hidden>
              <Hidden only={['xs']}>
                <Grid
                  item
                  xs
                  onClick={e =>
                    window.open(
                      'http://www.twitter.com/@heindrickcheung',
                      '_blank'
                    )
                  }
                >
                  <svg
                    className={classes.svg}
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Twitter icon</title>
                    <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z' />
                  </svg>{' '}
                </Grid>
              </Hidden>

              <Hidden only={['xs']}>
                <Grid
                  item
                  xs
                  onClick={e =>
                    window.open(
                      'http://www.facebook.com/heindrick.cheung',
                      '_blank'
                    )
                  }
                >
                  <svg
                    className={classes.svg}
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Facebook icon</title>
                    <path d='M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z' />
                  </svg>{' '}
                </Grid>
              </Hidden>
              <Hidden only={['xs']}>
                <Grid
                  item
                  xs
                  onClick={e =>
                    window.open(
                      'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=hcheung01@mail.com',
                      '_blank'
                    )
                  }
                >
                  <svg
                    className={classes.svg}
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Gmail icon</title>
                    <path d='M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z' />
                  </svg>{' '}
                </Grid>
              </Hidden>
              <Hidden only={['xs']}>
                <Grid
                  item
                  xs
                  onClick={e =>
                    window.open(
                      'https://www.medium.com/@heindrickcheung',
                      '_blank'
                    )
                  }
                >
                  <svg
                    className={classes.svg}
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Medium icon</title>
                    <path d='M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z' />
                  </svg>{' '}
                </Grid>
              </Hidden>
              <Hidden only={['xs']}>
                <Grid
                  item
                  xs
                  onClick={e =>
                    window.open(
                      'https://www.github.com/hcheung01',
                      '_blank'
                    )
                  }
                >
                  <svg
                    className={classes.svg}
                    role='img'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>GitHub icon</title>
                    <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                  </svg>{' '}
                </Grid>
              </Hidden>
            </Grid>
          </ScrollAnimation>
        </Container>
      </AppBar>
    </div>
  );
}

export default ButtonAppBar;
