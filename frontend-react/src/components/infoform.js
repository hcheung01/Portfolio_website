import React, { Component } from 'react';
import InfoItem from "./infoItem";
// import PropTypes from 'prop-types';
// import Icon from '@material-ui/core/Icon';
// import IconButton from "@material-ui/core/IconButton";
// import SvgIcon from "@material-ui/core/SvgIcon";

class InfoForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      title: '',
      company: '',
      email: '',
      phone: '',
      note: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });

    if (this.state.name && this.state.title && this.state.company && this.state.email) {
      fetch("http://localhost:5000/api/allinfo", {
        method: "POST",
        body: JSON.stringify(this.state),
       headers: {
          "Content-Type": "application/json"
        }
      }).then(results => {
        return results.json();
      }).then(data => {
        this.props.getInfo()
      });
    }
  }
  formStyle = {
    display: "flex",
    flexDirection: "column",
    textAlign: 'left',
    width: "100%",
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={this.formStyle}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={this.handleChange}
          name="name"
          type="text"
        />

        <label htmlFor="title">Title:</label>
        <input
          onChange={this.handleChange}
          name="title"
          type="text"
        />

        <label htmlFor="company">Company:</label>
        <input
          onChange={this.handleChange}
          name="company"
          type="text"
        />

        <label htmlFor="email">Email:</label>
        <input
          onChange={this.handleChange}
          name="email"
          type="email"
        />

        <label htmlFor="phone">Phone:</label>
        <input
          onChange={this.handleChange}
          name="phone"
          type="phone"
        />

        <label htmlFor="note">Leave me a note:</label>
        <input
          onChange={this.handleChange}
          name="note"
          type="note"
        />

        <button>Send Data!</button>
      </form>
    );
  }
}


export default InfoForm;
