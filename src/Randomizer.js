import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';


 class Randomness extends Component {
   constructor(props) {
    super(props);
    this.state = { x: undefined};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const min = 0
    const max = 3
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

    const phrases = ["Stretchy","True To Size","People Similar To You Bought These Jeans","Soft"]
    const phrasesToImg = [
      "https://i.ibb.co/5G8r8wv/Group-215-7.png",
      "https://i.ibb.co/7YdXKbg/Group-215.png",
      "https://i.ibb.co/McQZ75H/Group-215-9.png",
      "https://i.ibb.co/1nZRZPT/Group-215-8.png",

    ]
    this.setState({
     x: phrases[randos[0]],
     xImg: phrasesToImg[randos[0]],
     y: phrases[randos[1]],
     yImg: phrasesToImg[randos[1]],
     z: phrases[randos[2]],
     zImg: phrasesToImg[randos[2]],
     w: phrases[randos[3]],
     wImg: phrasesToImg[randos[3]],
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
            <Typography align='center'>{this.state.x}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Avatar align='center' alt="Travis Howard" src={this.state.yImg} />
            <Typography align='center'>{this.state.y}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Avatar align='center' alt="Cindy Baker" src={this.state.zImg}/>
            <Typography align='center'>{this.state.z}</Typography>
          </Grid>
          <Grid item xs={6}>
            <Avatar align='center' alt="Cindy Baker" src={this.state.wImg}/>
            <Typography align='center'>{this.state.w}</Typography>
          </Grid>
        </Grid>
      );
    }
}

export default Randomness;
