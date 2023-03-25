
import React , { Component } from 'react';
import './App.css';
import Counter from './Counter';

 export class App extends Component {

constructor(){
  super();
  this.state={
    name:'zohra'
  }
}
  render()
     {
       return (
    <div className="App">
      <h1>
        state class Component
      </h1>
<h1> {this.state.name}</h1>
<hr/>
<Counter/>
    </div>
  );
}

     }

  
 
export default App;
