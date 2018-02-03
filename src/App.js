import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import CharCard from "./CharacterCard";

class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        playerCharacter: [],
        name: "",
        race: [],
        classSet: []

      };

      // bindings
      this.handleNameInput = this.handleNameInput.bind(this);
      this.createRace = this.createRace.bind(this);
      this.createClass = this.createClass.bind(this);
      this.handleRace = this.handleRace.bind(this);
      // this.createPlayerChar = this.createPlayerChar.bind(this);
      // this.updatePlayerChar = this.updatePlayerChar.bind(this);
      // this.playerDeath = this.playerDeath.bind(this);

    }

    componentDidMount(){
      axios
      .get("/api/race")
      .then(response=>{
        this.setState({race: response.data.results});
      });

      axios
      .get("/api/class")
      .then(response=>{
        this.setState({classSet: response.data.results})
      });

     }

     createRace(){
       const race = {
         race: this.state.race
       };
       axios
       .post("/api/race", race)
       .then(response=>{
         this.setState({race:response.data});
       }).catch(e=>alert(e));
     }

     createClass(){
       const classSet = {
         race: this.state.classSet
       };
       axios
       .post("/api/class", classSet)
       .then(response=>{
         this.setState({class:response.data});
       }).catch(e=>alert(e));
     }
           
    

    //event handlers 
    handleNameInput(e){
      this.setState({name:e.target.value});
    }

    handleRace(e){
      this.setState({raceSelection:e.target.value});
    }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
        <h1>Player Character placeholder</h1>


         <h2>test race</h2>
            <select onChange={this.handleRace}>
            <option>Select</option>
            {this.state.race && this.state.race.map((curr, index)=>{
              return <option key={index} vaule={curr.name}>{curr.name}</option>
            })}
            </select>
         <h2>test class</h2>


         </div>
      </div>
    );
  }
}

export default App;
