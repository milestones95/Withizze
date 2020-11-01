import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


 class Randomness extends Component {
   constructor(props) {
    super(props);
    this.state = { x: undefined};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const min = 0
    const max = 3
    const rand = Math.round(min + Math.random() * (max - min))
    const phrases = ["Stretchy","True To Size","People Similar To You Bought These Jeans","Soft"]
    this.setState({
     x: phrases[rand]
   });
  }

  componentDidMount(){
   this.handleClick();
 }

    render(){
      return (
        <Typography align='center'>{this.state.x}</Typography>
      );
    }
}

export default Randomness;
