import React, { Component } from 'react';
 import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
class App extends Component {
  constructor(props){
     super(props);

     this.state = {
       input:"0",
       previousNumber : "",
       currentNumber : "",
       operator : ""
       
     };
  }
  addToInput = val =>{
    this.setState({input: this.state.input + val});
  };
  addZeroToInput = val =>{
    // if this.state.input is not zero
    if(this.state.input !==""){
      this.setState({input: this.state.input + val});
    }
  };
  addDecimal = val =>{
    if(this.state.input.indexOf(".")=== -1){
      this.setState({input: this.state.input + val});
    }
  };
  clearInput = () =>{
   this.setState({input:""});
  };
  add = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator="plus";

  };
  subtract = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator="subtract";

  };
  multiply = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator="multiply";

  };
  divide = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator="divide";

  };
  square = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator="square";

  };
  sqrt = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator="sqrt";

  };
  pie = () =>{
    this.state.previousNumber = this.state.input;
    this.setState({input: "3.141592654"});
    this.state.operator="pie";

  };
  evaluate = () =>{
    this.state.currentNumber = this.state.input;
    if(this.state.operator == "plus"){
      this.setState({
        input:parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber) 
      });
    }else if(this.state.operator == "subtract"){
      this.setState({
        input:parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber) 
      });
    }else if(this.state.operator == "multiply"){
      this.setState({
        input:parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber) 
      });
    }else if(this.state.operator == "divide"){
      this.setState({
        input:parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber) 
      });
    }else if(this.state.operator == "square"){
      this.setState({
        input:parseFloat(this.state.currentNumber) * parseFloat(this.state.currentNumber)  
      });
    } else if(this.state.operator == "sqrt"){
      this.setState({input: Math.sqrt(this.state.currentNumber)});
    }
  };
  render(){
  return (
    <div className="App">
      <div className="calc-wrapper">
        <div className="row">
         <Input>{this.state.input}</Input>
        </div> 
        <div className="row">
          <Button handleClick={this.addToInput}
          >7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.divide}>÷</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.add}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.evaluate}>=</Button>
          <Button handleClick={this.subtract}>-</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={this.clearInput}>C</ClearButton>
          <ClearButton handleClear={this.square}>χ2</ClearButton>
          <ClearButton handleClear={this.sqrt}>√</ClearButton>
          <ClearButton handleClear={this.pie}>π</ClearButton>
        </div>
      </div>
    </div>
  );
}
}
export default App;
