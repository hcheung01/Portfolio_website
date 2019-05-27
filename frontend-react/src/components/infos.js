import React, { Component } from 'react';
import InfoItem from './infoItem';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import { ThemeProvider } from '@material-ui/styles';

const theStyle = {
  width: '90%',
  maxWidth: '100%',
  backgroundColor: 'paper'
};
class Infos extends Component {
  render () {
    return this.props.infos.map(info => (
      <List dense style={theStyle}>
        <InfoItem key={info.id} info={info} />
      </List>
    ));
  }
}

// PropTypes
Infos.propTypes = {
  infos: PropTypes.array.isRequired
};
export default Infos;
