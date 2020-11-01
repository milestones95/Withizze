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

  export default useStyles;
