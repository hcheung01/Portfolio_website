import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListItemText, ListItem, ListItemSecondaryAction, IconButton, Typography, ListItemAvatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

export class InfoItem extends Component {
  render () {
    return (
      <ListItem alignItems='flex-start' style={{ marginLeft: '6%', borderBottom: '1px solid gray' }}>
        <ListItemAvatar >
          <DeleteIcon style={{ textAlign: 'center' }} />
        </ListItemAvatar>
        <ListItemText
          primary={'ID #' + this.props.info.id + '   ' + this.props.info.title + ' - ' + this.props.info.company}
          secondary={
            <React.Fragment>
              <Typography
                component='span'
                variant='body2'
                style={{ display: 'inline' }}
                color='gray'
              >
                {this.props.info.name + ' - ' + this.props.info.note}
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    );
  }
}

InfoItem.propTypes = {
  info: PropTypes.object.isRequired
};
export default InfoItem;
