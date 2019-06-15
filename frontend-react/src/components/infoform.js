import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/styles';
import { spacing } from '@material-ui/system';
import { createMuiTheme } from '@material-ui/core/styles';

// const formStyle = {
//   main: {
//     display: 'flex',
//     flexDirection: 'column',
//     maxWidth: 260,
//     marginLeft: '1%'
//   },
//   input: {
//     background: '#292929'
//   }
// };
// const theme = createMuiTheme({
//   spacing: 2
// });

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    background: '#292929',
    justifyContent: 'center',
    margin: '5%',
    borderRadius: '5px',
    padding: '2%'
  },
  textField: {
    color: '#3F51B5',
    margin: '2%'
  }
});
class InfoForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      title: '',
      company: '',
      email: '',
      phone: '',
      note: '',
      id: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePost (event) {
    this.setState({
      [event.target.name]: event
    });
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });

    if (this.state.name && this.state.title && !this.state.id) {
      delete this.state.id;
      fetch('/allinfo', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(results => {
        return results.json();
      }).then(data => {
        this.props.getInfo();
      });
    } else if (this.state.name && this.state.title && this.state.id) {
      console.log(this.state);
      fetch('/api/info/' + this.state.id, {
        method: 'PUT',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(results => {
        return results.json();
      }).then(data => {
        this.props.getInfo();
      });
    }
  }
  render () {
    const { classes } = this.props;
    return (
      <form className={classes.container} onSubmit={this.handleSubmit}>
        <TextField
          label='name'
          onChange={e => this.setState({ name: e.target.value })}
          margin='normal'
          variant='outlined'
          className={classes.textField}
        />
        <TextField
          label='title'
          onChange={e => this.setState({ title: e.target.value })}
          margin='normal'
          variant='outlined'
          className={classes.textField}
        />
        <TextField
          label='company'
          onChange={e => this.setState({ company: e.target.value })}
          margin='normal'
          variant='outlined'
          className={classes.textField}
        />
        <TextField
          label='email'
          onChange={e => this.setState({ email: e.target.value })}
          margin='normal'
          variant='outlined'
          className={classes.textField}
        />
        <TextField
          label='phone'
          onChange={e => this.setState({ phone: e.target.value })}
          margin='normal'
          variant='outlined'
          className={classes.textField}
        />
        <TextField
          label='note'
          onChange={e => this.setState({ note: e.target.value })}
          margin='normal'
          variant='outlined'
          className={classes.textField}
        />
        <TextField
          label='id'
          onChange={e => this.setState({ id: e.target.value })}
          margin='normal'
          variant='outlined'
          className={classes.textField}
        />
        <Button
          variant='outlined'
          component='span'
          style={{ margin: 'spacing(1)' }}
          size='large'
          onClick={this.handleSubmit}
          className={classes.textField}
        >
          Upload your info!!
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(InfoForm);
