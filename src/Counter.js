
import React , {Component} from "react";
export class Counter extends Component {
    
    constructor(){

        super();

        this.state={

            counter:0,
            timer:0 ,
            interval: null,
            show:false 

        }
    }
 componentDidMount(){
    console.log('componentDidMount');
    this.setState({
        interval:setInterval (() => this.setState({timer:this.state.timer+1}),
        1000)
        
        
 });

}

componentDidUpdate(){
    console.log('');

}

 }
  toggle =()=>{
    this.setState({
show:!this.state.show
    })
  }
 
    
    
    increment = () =>{

       this.setState({
counter:this.state.counter+1
       } )
    }
   decrement =()=> {
    this.setState({
        counter:this.state.counter-1
   })
}
reset =()=>{
    this.setState({
        counter:0
    })
}
    render() {
return(
<div>
    <p>counter state class component</p>
    <button onClick={this.increment}>plus</button><br/>
    
    <button onClick={this.decrement}>moins</button><br/>
    <button onClick={this.reset}>reset</button>
    <button onClick={this.toggle}>show/hide</button>
    <p>{this.state.counter}</p>
    
</div>
    );
}

 

export default Counter;