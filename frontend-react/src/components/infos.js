import React, { Component } from 'react';
import InfoItem from './infoItem';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';

const theStyle = {
  width: '90%',
  maxWidth: '100%',
  backgroundColor: 'paper',
  display: 'flex',
  flexDirection: 'column'
};
class Infos extends Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete (id) {
    fetch('/api/info/' + id, {
      method: 'DELETE'
    })
      .then(results => {
        return results.json();
      })
      .then(data => {
        this.props.getInfo();
      });
  }
  render () {
    return this.props.infos.map(info => (
      <List dense style={theStyle}>
        <InfoItem handleDelete={this.handleDelete} key={info.id} info={info} />
      </List>
    ));
  }
}

// PropTypes
Infos.propTypes = {
  infos: PropTypes.array.isRequired
};
export default Infos;
