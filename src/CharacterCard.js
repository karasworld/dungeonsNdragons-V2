import React, {Component} from "react";


export default class CharacterCard extends Component{
    constructor(props){
        super(props);

        this.state={ 
            name: this.props.player.name,
            races: this.props.player.selectedRace,
            classes: this.props.player.selectedClass,
            skills1: this.props.player.selectedSkill1,
            skills2: this.props.player.selectedSkill2,
            health: "",
            gold: "",
            bio: "",
            equipment1: this.props.player.selectedEquipment1,
            equipment2: this.props.player.selectedEquipment2,
            equipment3: this.props.player.selectedEquipment3,
                 
        };
        //binding
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleBioChange = this.handleBioChange.bind(this);
    }

    //event handlers
    handleNameChange(e){
        this.setState({name:e.target.value});
    }
    handleBioChange(e){
        this.setState({bio:e.target.value});
    }
    

    render(){
        return(
            <div>
                <p>Player Name</p>
                <h1>{this.props.player.name}</h1>
                <p>Edit Name</p>
                <input type="text" onChange={e => this.handleNameChange(e)} />
                <p>Player Race</p>
                <h2>{this.props.player.races}</h2>
                <p>Player Class</p>
                <h2>{this.props.player.classes}</h2>
                <p>Player Skills</p>
                <h2>{this.props.player.skills1}</h2>
                <h2>{this.props.player.skills2}</h2>
                <p>Player Hit Points</p>
                <h2>{this.props.player.health}</h2>
                <p>Player Gold</p>
                <h2>{this.props.player.gold}</h2>
                <p>Player Bio</p>
                <h2>{this.props.player.bio}</h2>
                <p>Edit Bio</p>
                <input type="text" onChange={e => this.handleBioChange(e)} />
                <p>Player's Equipment</p>
                <h2>{this.props.player.equipment1}
                |
                {this.props.player.equipment2}
                |
                {this.props.player.equipment3}</h2>
                <button onClick={()=>this.props.playerUpdate(this.props.index, this.state.name, this.state.races, this.state.classes, this.state.skills1, this.state.skills2, this.state.health, this.state.gold, this.state.bio, this.state.equipment1, this.state.equipment2, this.state.equipment3)}>
                Edit Character
                </button>
                <button onClick={() => this.props.death(this.props.index)}>
                Character has died
                </button>
            </div>
        );
    }
}