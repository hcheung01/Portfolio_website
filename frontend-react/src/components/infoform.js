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
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });

    if (this.state.name && this.state.title && this.state.id === '') {
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
    } else if (this.state.name && this.state.title && this.state.id !== '') {
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
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
          value={this.state.name}
        />
        <TextField
          label='title'
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='company'
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='email'
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='phone'
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='note'
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <TextField
          label='id'
          onChange={this.handleChange}
          margin='normal'
          variant='outlined'
        />
        <Button
          variant='outlined'
          component='span'
          style={{ margin: 'spacing(1)' }}
          size='large'
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
