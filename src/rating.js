import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';


class Rating extends Component {

  constructor(props) {
   super(props);
   this.state = { x: undefined};
   this.generateRating = this.generateRating.bind(this);
 }

     generateRating(){
     var rand = 3 + Math.random() * (5 - 3)
     const dec = rand.toFixed(1)
     this.setState({
      x:dec
    });
  }

  componentDidMount(){
   this.generateRating();
 }

  render(){
    return(
      <Typography style={{ "fontWeight": 600}} >{this.state.x}</Typography>
    )
  }
}

export default Rating;
