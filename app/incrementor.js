import React,{Component} from "react";

export default class Incrementor extends Component{
  constructor(props){
    super(props);
    this.state = {
      count : 0
    }

  }
  handleClick (event){
        console.log('Heya shine');
        this.setState({count : this.state.count+1});
  }
  render (){
    return (
      <button onClick={this.handleClick.bind(this)}>+{this.state.count}</button>
    )
  }


}
