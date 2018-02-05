import React, { Component } from 'react';
import axios from "axios";
// import logo from './logo.svg';
import './App.css';
import CharacterCard from "./CharacterCard";

class App extends Component {
    constructor(props){
      super(props);

      this.state = {
        playerCharacter: [],
        name: "",
        races: [],
        classes: [],
        skills1: [],
        skills2: [],
        selectedRace: "",        
        selectedClass: "",        
        selectedSkill1: "",
        selectedSkill2: "",
        health: "",
        gold: "",
        bio: "",
        equipment1: [],
        equipment2: [],
        equipment3: [],
        selectedEquipment1: "",
        selectedEquipment2: "",
        selectedEquipment3: ""
        
      };

      // bindings

      
      this.createPlayer = this.createPlayer.bind(this);
      this.playerUpdate = this.playerUpdate.bind(this);

      this.handleNameInput = this.handleNameInput.bind(this);
      this.handleSelectedRace = this.handleSelectedRace.bind(this);
      this.handleSelectedClass = this.handleSelectedClass.bind(this);
      this.handleSelectedSkill1 = this.handleSelectedSkill1.bind(this);
      this.handleSelectedSkill2 = this.handleSelectedSkill2.bind(this);
      this.handleSeletedEquipment1 = this.handleSeletedEquipment1.bind(this);
      this.handleSeletedEquipment2 = this.handleSeletedEquipment2.bind(this);
      this.handleSeletedEquipment3 = this.handleSeletedEquipment3.bind(this);
      
      this.health = this.health.bind(this); 
      this.gold = this.gold.bind(this); 
      this.handleBioInput = this.handleBioInput.bind(this)

      this.death = this.death.bind(this)    

    }

    componentDidMount(){
      axios
      .get("/api/all")
      .then(response=>{
        console.log(response.data)
        this.setState({ races: response.data.pRace, classes: response.data.pClass, skills1: response.data.pSkill1, skills2: response.data.pSkill2,equipment1: response.data.pEquip1, equipment2: response.data.pEquip2, equipment3: response.data.pEquip3 })
      });   
     }


     createPlayer(){
       const player = {
         name: this.state.name,
         races: this.state.selectedRace,
         classes: this.state.selectedClass,
         skills1: this.state.selectedSkill1,
         skills2: this.state.selectedSkill2,
         health: this.state.health,
         gold: this.state.gold,
         bio: this.state.bio,
         equipment1: this.state.selectedEquipment1,
         equipment2: this.state.selectedEquipment2,
         equipment3: this.state.selectedEquipment3
       };

       axios
       .post("/api/all", player)
       .then(response=>{
         console.log(response)
         this.setState({playerCharacter: response.data});
       })
       .catch(e=>alert(e));
     }
     playerUpdate(id, name, selectedRace, selectedClass, selectedSkill1, selectedSkill2, health, gold, bio, selectedEquipment1, selectedEquipment2, selectedEquipment3){
      console.log("here i am")
       const playerUpdated ={
         name,
         selectedRace,
         selectedClass,
         selectedSkill1,
         selectedSkill2,
         health,
         gold,
         bio,
         selectedEquipment1,
         selectedEquipment2,
         selectedEquipment3
       }
       axios
       .put("/api/all/"+id, playerUpdated)
       .then(response=>{
         console.log(response.data)
         this.setState({playerCharacter: response.data});
       })
       .catch(console.log);
     }
 
     death(id){
       axios
       .delete("/api/all/"+id)
       .then(response=>{
         this.setState({playerCharacter:response.data});
       })
       .catch(console.log);
     }

    
     health(){
      let health=Math.ceil(Math.random()*20);
    console.log(health)
    this.setState({ health })
     }

     gold(){
      let gold=Math.ceil(Math.random()*20);
      console.log(gold)
      this.setState({ gold })
    }   

    //event handlers 

    handleNameInput(e){
      this.setState({name:e.target.value});
    }
    handleBioInput(e){
      this.setState({bio:e.target.value})
    }
    handleSelectedRace(e){
      this.setState({selectedRace:e.target.value});
    }
    handleSelectedClass(e){
      this.setState({selectedClass:e.target.value});
    }
    handleSelectedSkill1(e){
      this.setState({selectedSkill1:e.target.value});
    }
    handleSelectedSkill2(e){
      this.setState({selectedSkill2:e.target.value});
    }
    handleSeletedEquipment1(e){
      this.setState({selectedEquipment1: e.target.value});
    }
    handleSeletedEquipment2(e){
      this.setState({selectedEquipment2: e.target.value});
    }
    handleSeletedEquipment3(e){
      this.setState({selectedEquipment3: e.target.value});
    }



  render() {
       
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
        </header>
        <div>
          <div className="playerTitle" id="title">  
           <h1>CREATE YOUR PLAYER</h1>
          </div>

          <div className="nameInput" id="nInput">
          <h2>Name</h2>
            <input type="text" onChange={e => this.handleNameInput(e)} />
          </div>

          <div className="raceSel" id="raSel">
          <h2>Race</h2>
            <select onChange={this.handleSelectedRace}>
            <option>Select</option>
            {this.state.races && this.state.races.map((curr, index)=>{
              return <option key={index} value={curr.name}>{curr.name}</option>
            })}
            </select>
          </div>
          
          <div className="classSel" id="claSel">
          <h2>Class</h2>
            <select onChange={this.handleSelectedClass}>
            <option>Select</option>
            {this.state.classes && this.state.classes.map((curr, index)=>{
              return <option key={index} value={curr.name}>{curr.name}</option>
            })} 
            </select>
          </div>

          <div className="skillSel" id="skSel"> 
          <h2>Skill</h2>
            <select onChange={this.handleSelectedSkill1}>
            <option>Select</option>
            {this.state.skills1 && this.state.skills1.map((curr, index) => {
              return <option key={index} value={curr.name}>{curr.name}</option>
            })}            
            </select>

            <select onChange={this.handleSelectedSkill2}>
            <option>Select</option>
            {this.state.skills2 && this.state.skills2.map((curr, index) => {
              return <option key={index} value={curr.name}>{curr.name}</option>
            })}            
            </select>
          </div>

          <div>
            <h2>Starting Health</h2>
            <button className="healthRoll" id="hpRoll" onClick={this.health}> Roll for your Health </button>
          </div>

          <div>
            <h2>Starting Gold</h2>
            <button className="goldRoll" id="gRoll" onClick={this.gold}> Roll for your Gold </button>
          </div>

          <div className="bioSet" id="bSet">
            <h2>Bio</h2>
            <input className="bioSet" id="bSet" type="text" onChange={e => this.handleBioInput(e)} />
          </div>

          <div className="equipmentSel" id="equipSel">
            <h2>Equipment (select 3)</h2>

            <select onChange={this.handleSeletedEquipment1}>
            <option>Select</option>
            {this.state.equipment1 && this.state.equipment1.map((curr, index) => {
              return <option key={index} value={curr.name}>{curr.name}</option>
            })}            
            </select>
        
            <select onChange={this.handleSeletedEquipment2}>
            <option>Select</option>
            {this.state.equipment2 && this.state.equipment2.map((curr, index) => {
              return <option key={index} value={curr.name}>{curr.name}</option>
            })}            
            </select>         

            <select onChange={this.handleSeletedEquipment3}>
            <option>Select</option>
            {this.state.equipment3 && this.state.equipment3.map((curr, index) => {
              return <option key={index} value={curr.name}>{curr.name}</option>
            })}            
            </select>
          </div>

          <div>
          <button className="createButton" id="createBut" onClick={()=>{this.createPlayer()}}>CREATE Player</button>
        </div>

            <hr/>
          <div classname="playerCard" id="playCard">
            {this.state.playerCharacter &&
             this.state.playerCharacter.map((val, i) =>(              
              <CharacterCard
                key={i}
                playerUpdate={this.playerUpdate}
                death={this.death}
                player={val}
                index={i}
              />
            ))}
         </div>
         <hr/>

        
      </div>
     </div>
    );
  }
}

export default App;
