import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const formStyle = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 260,
    marginLeft: '1%'
  },
  input: {
    background: '#292929'
  }

};
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
    return (
      <form style={formStyle.main} onSubmit={this.handleSubmit}>
        <TextField
          label='name'
          onChange={e => this.setState({ name: e.target.value })}
          margin='normal'
          variant='outlined'
          style={formStyle.input}
        />
        <TextField
          label='title'
          onChange={e => this.setState({ title: e.target.value })}
          margin='normal'
          variant='outlined'
          style={formStyle.input}

        />
        <TextField
          label='company'
          onChange={e => this.setState({ company: e.target.value })}
          margin='normal'
          variant='outlined'
          style={formStyle.input}
        />
        <TextField
          label='email'
          onChange={e => this.setState({ email: e.target.value })}
          margin='normal'
          variant='outlined'
          style={formStyle.input}
        />
        <TextField
          label='phone'
          onChange={e => this.setState({ phone: e.target.value })}
          margin='normal'
          variant='outlined'
          style={formStyle.input}
        />
        <TextField
          label='note'
          onChange={e => this.setState({ note: e.target.value })}
          margin='normal'
          variant='outlined'
          style={formStyle.input}
        />
        <TextField
          label='id'
          onChange={e => this.setState({ id: e.target.value })}
          margin='normal'
          variant='outlined'
          style={formStyle.input}
        />
        <Button
          variant='outlined'
          component='span'
          style={{ margin: 'spacing(1)' }}
          size='large'
          onClick={this.handleSubmit}
          style={formStyle.input}
        >
          Upload your info!!
        </Button>
      </form>
    );
  }
}

export default InfoForm;
