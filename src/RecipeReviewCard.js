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
import blueGrey from '@material-ui/core/colors/blueGrey'; 
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgba(255, 255, 255, 0.75)',
    maxWidth: 400,
    borderRadius: '0px 0px 12px 0px',
    position: 'absolute',
    width: '210px',
    left: '0px',
    alignContent: 'center',
  },
  hover: {
    '&:hover': {
         backgroundColor: "red"
       }
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
    backgroundColor: 'black',
  },
  dividerTwo: {
    width: 50,
    padding: 0,
    backgroundColor: 'gray',
  },
  column: {
   flexBasis: '33%',
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
    fontSize: 7.5,
    fontFamily: 'Inter',
  }
});

 function CreateDescriptors() {
 const classes = useStyles();

 return(
   <Randomness></Randomness>
 )
}

export default function RecipeReviewCard() {
  const classes = useStyles();
  const insideBoxClass = insideBox();
  const [expanded, setExpanded] = React.useState(false);
  const fontWeight = 600
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };



  return (
    <Card className={classes.root}>
    <ThemeProvider theme={theme}>
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item xs>
        <div className={classes.column} />
      </Grid>
      <Grid item xs>
      <Typography style={{ "fontWeight": fontWeight}}>Withizze</Typography>
      </Grid>
      <Grid item xs>
        <div className={classes.column} />
      </Grid>
      <Grid item xs>
        <Divider className={classes.icon}/>
      </Grid>
      <Grid item xs>
        <StarIcon style={{ color: "#FFA336"}} />
      </Grid>
      <Grid item xs>
        <Typography style={{ "fontWeight": fontWeight}} >4.9</Typography>
      </Grid>
      <Grid item xs>
        <div className={classes.column} />
      </Grid>
      <Grid item xs>
      <AvatarGroup max={4}>
        <Avatar style={{ borderColor: 'white'}} src="https://i.ibb.co/ZN1S7hP/Group-215-6.png"  className={classes.small}/>
        <Avatar style={{ borderColor: 'white'}}  src="https://i.ibb.co/Y8JGfrp/Group-215-5.png" className={classes.small}/>
        <Avatar style={{ borderColor: 'white'}} src="https://i.ibb.co/4MNjhM4/Group-215-1.png" className={classes.small}/>
        <Avatar style={{ borderColor: 'white'}} src="https://i.ibb.co/bz4t0sb/Group-215-2.png" className={classes.small}/>
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
            style={{ background: '#F1F3FB'}}
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
