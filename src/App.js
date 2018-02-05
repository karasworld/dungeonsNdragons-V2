import React, { Component } from 'react';
import axios from "axios";
// import logo from './logo.svg';
import './App.css';
import CharCard from "./CharacterCard";

class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        playerCharacter: [],
        name: "",

        races: [],
        selectedRace: "",

        classes: [],
        selectedClass: "",
        skills: [],
        selectedSkill: "",
        health: "",
        prfcy: "",

        abilityScore: "",

        bio: "",

        Equipment: [],
        armor: "",
        weapon: "",
        shield: ""
      };

      // bindings

      // this.createRace = this.createRace.bind(this);
      // this.raceUpdate = this.raceUpdate.bind(this);

      // this.createClass = this.createClass.bind(this);
      // this.classUpdate = this.classUpdate.bind(this);
      
      // this.createSkill = this.createSkill.bind(this);
      // this.skillUpdate = this.skillUpdate.bind(this);

      this.handleNameInput = this.handleNameInput.bind(this);
      this.handleSelectedRace = this.handleSelectedRace.bind(this);
      this.handleSelectedClass = this.handleSelectedClass.bind(this);
      this.handleSelectedSkill = this.handleSelectedSkill.bind(this);

      this.createPlayer = this.createPlayer.bind(this);
      this.playerUpdate = this.playerUpdate.bind(this);
      


      // this.death = this.death.bind(this)
      


    }

    componentDidMount(){
      axios
      .get("/api/all")
      .then(response=>{
        console.log(response.data)
        this.setState({races: response.data.pRace, classes: response.data.pClass, skills: response.data.pSkill })
      });

    //   axios
    //   .get("/api/races")
    //   .then(response=>{
    //     console.log(response.data)
    //     this.setState({races: response.data});
    //   });     

    //   axios
    //  .get("/api/classes")
    //  .then(response=>{
    //    console.log(response.data)
    //    this.setState({classes: response.data.results});
    //  });

    //  axios
    //  .get("/api/skills")
    //  .then(response=>{
    //    console.log(response.data)
    //    this.setState({skills:response.data.results});
    //  });

     }

     createPlayer(){
       const player = {
         name: this.state.name,
         races: this.state.races,
         classes: this.state.classes,
         skills: this.state.skills
       };

       axios
       .post("/api/all", player)
       .then(response=>{
         this.setState({playerCharacter: response.data.results});
       })
       .catch(e=>alert(e));
     }
     playerUpdate(id, name, races, classes, skills){
       const playerUpdated ={
         name: name,
         races: races,
         classes: classes,
         skills: skills
       }
       axios
       .put("/api/all/"+id, playerUpdated)
       .then(response=>{
         this.setState({playerCharacter: response.data.results});
       })
       .catch(console.log);
     }

     
//RACE
    //  createRace(){
    //    const race = {
    //      selectedRace: this.state.selectedRace
    //    };
    //    axios
    //    .post("/api/races", race)
    //    .then(response=>{
    //      this.setState({races:response.data});
    //    }).catch(e=>alert(e));
    //  }

    //  raceUpdate(id, selectedRace){
    //    const updatedRace = {
    //      selectedRace: selectedRace
    //    };

    //    axios
    //    .put("/api/races/"+id, updatedRace)
    //    .then(response => {
    //      this.setState({races:response.data});
    //    })
    //    .catch(console.log);
    //  }

//CLASS
    //  createClass(){
    //    const classes={
    //      classes: this.state.classes,
    //  };
    //  axios
    //  .post("/api/classes", classes)
    //  .then(response=>{
    //     this.setState({classes: response.data});
    //  })
    //  .catch(e=>alert(e));
    // }

    // classUpdate(id, selectedClass){
    //   const updatedClass = {
    //     selectedClass: selectedClass
    //   };

    //   axios
    //   .put("/api/classes/"+id, updatedClass)
    //   .then(response => {
    //     this.setState({races:response.data});
    //   })
    //   .catch(console.log);
    // }

//SKILL
    // createSkill(){
    //   const skills = {
    //     skills: this.state.skills
    //   };
    //   axios
    //   .post("/api/skills", skills)
    //   .then(response=>{
    //     this.setState({skills: response.data});
    //   })
    //   .catch(e=>alert(e));
    // }

    // skillUpdate(id, selectedSkill){
    //   const updatedSkill={
    //     selectedSkill: selectedSkill
    //   };
    //   axios
    //   .put("/api/skills/"+id, updatedSkill)
    //   .then(response=>{
    //     this.setState({skills:response.data});
    //   })
    //   .catch(console.log)
    // }


     death(id){
       axios
       .delete("/api/races/"+id)
       .then(response=>{
         this.setState({races:response.data});
       })
       .catch(console.log);
     }

           
    

    //event handlers 

    handleNameInput(e){
      this.setState({name:e.target.value});
    }
    handleSelectedRace(e){
      this.setState({selectedRace:e.target.value});
    }
    handleSelectedClass(e){
      this.setState({selectedClass:e.target.value});
    }
    handleSelectedSkill(e){
      this.setState({selectedSkill:e.target.value});
    }



  render() {
    console.log(this.state.playerCharacter)

    // console.log(this.state.classes)
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <div>
        <h1>Player Character placeholder</h1>


         <h2>test race</h2>
            <select onChange={this.handleSelectedRace}>
            <option>Select</option>
            {this.state.races && this.state.races.map((curr, index)=>{
              return <option key={index} value={curr.name}>{curr.name}</option>
            })}
            </select>
            

          <h2>test class</h2>
            <select onChange={this.handleSelectedClass}>
            <option>Select</option>
            {this.state.classes && this.state.classes.map((curr, index)=>{
              return <option key={index} value={curr.name}>{curr.name}</option>
            })} 
            </select>


          <h2>test skill</h2>
            <select onChange={this.handleSelectedSkill}>
            <option>Select</option>
            {this.state.skills && this.state.skills.map((curr, index) => {
              return <option key={index} value={curr.name}>{curr.name}</option>
            })}            
            </select>

            {/* {this.state.playerCharacter.map((val, i)=>(
              
            <CharCard
              key={i}
              playerUpdate={this.playerUpdate}
              death={this.death}
              player={val}
              index={i}
            />
      ))} */}

      <div>
      <button onClick={this.createPlayer}>CREATE CHARACTER</button>
      </div>
         </div>
      </div>
    );
  }
}

export default App;
