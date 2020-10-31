/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { borders } from '@material-ui/system';


const useStyles = makeStyles((theme) => ({
root: {     background: 'rgba(255, 255, 255, 0.75)',     maxWidth: 300,     borderRadius: '12px',     position: 'absolute',     width: '300px',     left: '0px',     alignContent: 'center',     display: 'flex',     '& > *': {       margin: theme.spacing(1),     }, 
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    buttonIcon:{
      width: '1px',
      height: '1px',
    }

  },

}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Withizze"
      />
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.root.expand, {
            [classes.root.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          iconStyle={classes.root.buttonIcon}
        >
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src={chrome.extension.getURL("../public/static/images/miles.jpeg")}  style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}/>
          <Avatar alt="Travis Howard" src="../public/static/images/miles.jpeg" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}/>
          <Avatar alt="Cindy Baker" src="../public/static/images/miles.jpeg" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}/>
          <Avatar alt="Agnes Walker" src="../public/static/images/miles.jpeg" style={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px'}}/>
        </AvatarGroup>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            This item fits you perfectly.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
