import React, { Component } from 'react';
import InfoItem from './infoItem';
import PropTypes from 'prop-types';
// import Icon from '@material-ui/core/Icon';
// import IconButton from "@material-ui/core/IconButton";
// import SvgIcon from "@material-ui/core/SvgIcon";

class Infos extends Component {
  render () {
    return this.props.infos.map(info => (
      <InfoItem key={info.id} info={info} />
    ));
  }
}

// PropTypes
Infos.propTypes = {
  infos: PropTypes.array.isRequired
};
export default Infos;
