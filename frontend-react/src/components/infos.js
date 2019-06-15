import React, { Component } from 'react';
import InfoItem from './infoItem';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class Infos extends Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete (id) {
    fetch('/info/' + id, {
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
    return this.props.infos.map((info, index) => (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth='lg'>
          <List
            dense
          >
            <InfoItem handleDelete={this.handleDelete} info={info} />
          </List>
        </Container>
      </React.Fragment>
    ));
  }
}

// PropTypes
Infos.propTypes = {
  infos: PropTypes.array.isRequired
};
export default Infos;
