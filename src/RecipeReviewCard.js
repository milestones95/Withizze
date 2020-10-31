/*global chrome*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
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

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgba(255, 255, 255, 0.75)',
    maxWidth: 200,
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
      width: '10px',
      height: '10px',
    },
}));

const insideBox = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const theme = createMuiTheme({
  typography: {
    fontSize: 8,
    fontFamily: 'Inter',
  }
});
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
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Grid container spacing={2} align='center'>
            <Grid item xs={6} align='center'>
              <Avatar align='center' alt="Remy Sharp" src="https://i.ibb.co/tYScJ38/Frame.png"/>
              <Typography align='center'>Strechy</Typography>
            </Grid>
            <Grid item xs={6}>
              <Avatar align='center' alt="Travis Howard" src="https://i.ibb.co/tYScJ38/Frame.png" />
              <Typography align='center'>True To Size</Typography>
            </Grid>
            <Grid item xs={6}>
              <Avatar align='center' alt="Cindy Baker" src="https://i.ibb.co/tYScJ38/Frame.png"/>
              <Typography align='center'>People Similar To You Bought These Jeans</Typography>
            </Grid>
            <Grid item xs={6}>
              <Avatar align='center' alt="Cindy Baker" src="https://i.ibb.co/tYScJ38/Frame.png"/>
              <Typography align='center'>Soft</Typography>
            </Grid>
          </Grid>
          </CardContent>
        </Collapse>
      </ThemeProvider>
    </Card>
  );
}
