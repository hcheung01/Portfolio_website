import React, { Component } from 'react';
// import InfoItem from "./infoItem";
// import PropTypes from 'prop-types';
// import Icon from '@material-ui/core/Icon';
// import IconButton from "@material-ui/core/IconButton";
// import SvgIcon from "@material-ui/core/SvgIcon";

class InfoForm extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const APIdata = {
      name: data.get("name"),
      title: data.get("title"),
      company: data.get("company"),
      email: data.get("email"),
      phone: data.get("phone"),
      note: data.get("note")
    };
    fetch("http://localhost:5000/api/allinfo", {
      method: "POST",
      body: JSON.stringify(APIdata),
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  formStyle = {
    display: "flex",
    flexDirection: "column",
    width: "300px"
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} style={this.formStyle}>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" />

        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" />

        <label htmlFor="phone">Phone</label>
        <input id="phone" name="phone" type="phone" />

        <label htmlFor="note">Leave me a note!</label>
        <input id="note" name="note" type="note" />

        <button>Send data!</button>
      </form>
    );
  }
}


export default InfoForm;
