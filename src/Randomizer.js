import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

function determineRandomNumber(list) {
  if (list.length == 2)
    return Math.round(0 + Math.random() * (1 - 0));
  return Math.round(0 + Math.random() * (2 - 0));
}

 class Randomness extends Component {

   constructor(props) {
    super(props);
    this.state = { x: undefined};
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    var min = 0
    var max = 3
    var randos = []
    const randomNumbers = new Set()
    var count = 0;

    do{
      var rand = Math.round(min + Math.random() * (max - min))
      if(!randomNumbers.has(rand))
      {
        randos.push(rand)
        randomNumbers.add(rand)
        count++
      }
    }while(count<4)

    const phrases = [
                       ["Stretchy", 'Stiff'],
                       ["True To Size", "Runs Small", "Runs Big"],
                       ["People Similar To You Bought These Jeans", "People Similar To You Dislike These Jeans"],
                       ["Soft", "Harsh"]
                     ]
    const phrasesToImg = [
      ["https://i.ibb.co/5G8r8wv/Group-215-7.png", "https://i.ibb.co/xCB5FC1/Group-215-10.png"],
      ["https://i.ibb.co/7YdXKbg/Group-215.png", "https://i.ibb.co/4MNjhM4/Group-215-1.png", "https://i.ibb.co/z87c9J9/Group-215-11.png"],
      ["https://i.ibb.co/McQZ75H/Group-215-9.png", "https://i.ibb.co/bzqcVT7/Group-215-12.png"],
      ["https://i.ibb.co/1nZRZPT/Group-215-8.png", "https://i.ibb.co/ZGsT2p8/Group-215-13.png"],
    ]

    min = 0
    max = 1
    var randX = determineRandomNumber(phrases[randos[0]])
    var randY = determineRandomNumber(phrases[randos[1]])
    var randZ = determineRandomNumber(phrases[randos[2]])
    var randW = determineRandomNumber(phrases[randos[3]])

    this.setState({
     x: phrases[randos[0]][randX],
     xImg: phrasesToImg[randos[0]][randX],
     y: phrases[randos[1]][randY],
     yImg: phrasesToImg[randos[1]][randY],
     z: phrases[randos[2]][randZ],
     zImg: phrasesToImg[randos[2]][randZ],
     w: phrases[randos[3]][randW],
     wImg: phrasesToImg[randos[3]][randW],
     fontWeight: 600
   });
  }

  componentDidMount(){
   this.handleClick();
 }

    render(){
      return (
        <Grid container spacing={2} align='center'>
          <Grid item xs={6} align='center'>
            <Avatar align='center' alt="Remy Sharp" src={this.state.xImg}/>
            <Typography align='center' style={{ "fontWeight": this.state.fontWeight}}>{this.state.x}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Avatar align='center' alt="Travis Howard" src={this.state.yImg} />
            <Typography align='center' style={{ "fontWeight": this.state.fontWeight}}>{this.state.y}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Avatar align='center' alt="Cindy Baker" src={this.state.zImg}/>
            <Typography align='center' style={{ "fontWeight": this.state.fontWeight}}>{this.state.z}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Avatar align='center' alt="Cindy Baker" src={this.state.wImg}/>
            <Typography align='center' style={{ "fontWeight": this.state.fontWeight}}>{this.state.w}</Typography>
          </Grid>
        </Grid>
      );
    }
}

export default Randomness;
