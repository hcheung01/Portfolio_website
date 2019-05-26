import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class InfoItem extends Component {
  render () {
    return (
      <div style={{ backgroundColor: 'lightblue' }}>
        <p>{this.props.info.title}</p>
        <p>{this.props.info.name}</p>
        <p>{this.props.info.note}</p>
        <p>{this.props.info.email}</p>
        <p>{this.props.info.phone}</p>
      </div>
    );
  }
}

InfoItem.propTypes = {
  info: PropTypes.object.isRequired
};
export default InfoItem;
