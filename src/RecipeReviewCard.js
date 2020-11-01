/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
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
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Icon from '@material-ui/core/Icon';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Randomness from './Randomizer';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import StarIcon from '@material-ui/icons/Star';
import Divider from '@material-ui/core/Divider'; 

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgba(255, 255, 255, 0.75)',
    maxWidth: 400,
    borderRadius: '12px',
    position: 'absolute',
    width: '200px',
    left: '0px',
    alignContent: 'center',
  },

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
      padding: 0,
    },
    avatar:{
      marginLeft: '-10px',
    },
    cardheader:{
      margin: 0,
    },
    cardAction:{
      padding: 0,
    },
    small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  icon: {
    verticalAlign: 'bottom',
    height: 18,
    width: 1,
  },

  }));


const insideBox = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  }}));


const theme = createMuiTheme({
  typography: {
    fontSize: 5,
    fontFamily: 'Inter',
  }
});

 function CreateDescriptors() {
 const classes = useStyles();

 return(
   <Grid container spacing={2} align='center'>
     <Grid item xs={6} align='center'>
       <Avatar align='center' alt="Remy Sharp" src="https://i.ibb.co/tYScJ38/Frame.png"/>
       <Randomness></Randomness>
     </Grid>
     <Grid item xs={6}>
       <Avatar align='center' alt="Travis Howard" src="https://i.ibb.co/tYScJ38/Frame.png" />
       <Randomness></Randomness>
     </Grid>
     <Grid item xs={6}>
       <Avatar align='center' alt="Cindy Baker" src="https://i.ibb.co/tYScJ38/Frame.png"/>
       <Randomness></Randomness>
     </Grid>
     <Grid item xs={6}>
       <Avatar align='center' alt="Cindy Baker" src="https://i.ibb.co/tYScJ38/Frame.png"/>
       <Randomness></Randomness>
     </Grid>
   </Grid>
 )
}

export default function RecipeReviewCard() {
  const classes = useStyles();
  const insideBoxClass = insideBox();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
    <ThemeProvider theme={theme}>
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs>
      <Typography>Withizze</Typography>
      </Grid>
      <Grid item xs>
        <Divider className={classes.icon} style={{ color: "black" }}/>
      </Grid>
      <Grid item xs>
        <StarIcon style={{ color: "gold" }} />
      </Grid>
      <Grid item xs>
        <Typography>4.9</Typography>
      </Grid>
      <Grid item xs>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://i.ibb.co/tYScJ38/Frame.png"  className={classes.small}/>
          <Avatar alt="Travis Howard" src="https://i.ibb.co/tYScJ38/Frame.png" className={classes.small}/>
          <Avatar alt="Cindy Baker" src="https://i.ibb.co/tYScJ38/Frame.png" className={classes.small}/>
          <Avatar alt="Agnes Walker" src="https://i.ibb.co/tYScJ38/Frame.png" className={classes.small}/>
        </AvatarGroup>
      </Grid>
        <CardActions disableSpacing>
        <Grid item xs>
          <IconButton
            className={clsx(classes.root.expand, {
              [classes.root.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
            iconStyle={classes.root.buttonIcon}
          >
            <ExpandMoreIcon />
          </IconButton>
          </Grid>
        </CardActions>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CreateDescriptors></CreateDescriptors>
          </CardContent>
        </Collapse>
      </ThemeProvider>
    </Card>
  );
}
