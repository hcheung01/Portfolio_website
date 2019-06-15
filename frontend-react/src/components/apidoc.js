import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import PaperSheet from './paper';
import React, { Component } from 'react';

const styles = {
  title: {
    color: '#3F51B5',
    margin: '15px',
    textAlign: 'center'
  },
  body: {
    color: '#3F51B5',
    backgroundColor: '#292929',
    height: '100vh'
  },
  theme: {
    background: 'black'
  }
};

class APIdoc extends Component {
  render () {
    return (
      <React.Fragment>
        <Container maxWidth='md'>
          <Typography variant='h3' component='h2' style={styles.title}>
            INTERACT DIRECTLY TO THE API
          </Typography>
          <Typography variant='h6' style={styles.title}>
            RESTful backend designed using Python3, Flask, SQLAlchemy, MySQL
          </Typography>
          <CssBaseline />
          <PaperSheet />
        </Container >
      </React.Fragment>

    );
  }
}
export default APIdoc;
