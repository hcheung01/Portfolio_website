import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    console.log(this.state);
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
      fetch('/api/allinfo', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(results => {
          return results.json();
        })
        .then(data => {
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
      })
        .then(results => {
          return results.json();
        })
        .then(data => {
          this.props.getInfo();
        });
    }
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          label='name'
          onChange={e => this.setState({ name: e.target.value })}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='title'
          onChange={e => this.setState({ title: e.target.value })}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='company'
          onChange={e => this.setState({ company: e.target.value })}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='email'
          onChange={e => this.setState({ email: e.target.value })}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='phone'
          onChange={e => this.setState({ phone: e.target.value })}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='note'
          onChange={e => this.setState({ note: e.target.value })}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='id'
          onChange={e => this.setState({ id: e.target.value })}
          margin='normal'
          variant='outlined'
        />
        <Button
          variant='outlined'
          component='span'
          style={{ margin: 'spacing(1)' }}
          size='large'
          // type='submit'
          onClick={this.handleSubmit}
        >
          Upload Data!!
        </Button>
      </form>
    );
  }
}

//   render () {
//     return (
//       <form onSubmit={this.handleSubmit} style={this.formStyle}>
//         <label htmlFor='name'>Name:</label>
//         <input onChange={this.handleChange} name='name' type='text' />

//         <label htmlFor='title'>Title:</label>
//         <input onChange={this.handleChange} name='title' type='text' />

//         <label htmlFor='company'>Company:</label>
//         <input onChange={this.handleChange} name='company' type='text' />

//         <label htmlFor='email'>Email:</label>
//         <input onChange={this.handleChange} name='email' type='email' />

//         <label htmlFor='phone'>Phone(optional):</label>
//         <input onChange={this.handleChange} name='phone' type='phone' />

//         <label htmlFor='note'>Leave me a note(optional):</label>
//         <input onChange={this.handleChange} name='note' type='note' />

//         <label htmlFor='note'>ID(optional) for updates only:</label>
//         <input onChange={this.handleChange} name='id' type='id' />

//         <button>Send Data!</button>
//       </form>
//     );
//   }
// }

export default InfoForm;
