import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import { ListItem } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 400,
    background: '#292929',
    color: '#3F51B5'
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  textColor: {
    color: '#3F51B5'
  }
}));

function InfoItem (props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick () {
    setExpanded(!expanded);
  }
  return (
    <ListItem key={props.info.id}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton
              onClick={props.handleDelete.bind(this, props.info.id)}
            >
              <DeleteIcon className={classes.textColor} />
            </IconButton>
          }
          title={props.info.name}
          // subheader={props.info.title + ', ' + props.info.company}
        />
        <CardContent>
          <Typography variant='body2' color='inherit' component='p'>
            {'Title: ' + props.info.title + ', ' + props.info.company}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant='body2' color='inherit' component='p'>
            {props.info.created_at}
          </Typography>
          <Typography variant='body2' color='inherit' component='p'>
            {'POST ID# - ' + props.info.id}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton color='inherit' aria-label='Add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton color='inherit' aria-label='Share'>
            <ShareIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='Show more'
            color='inherit'
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography color='inherit' paragraph>
              {'note: ' + props.info.note}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ListItem>
  );
}

export default InfoItem;
