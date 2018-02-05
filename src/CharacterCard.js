import React, {Component} from "react";


export default class CharacterCard extends Component{
    constructor(props){
        super(props);

        this.state={ 
            name: this.props.player.name,
            race: this.props.player.race,
            class: this.props.player.class,
                skill: this.props.player.skill,
            //     health: '',
            //     prfcy: '',
            // abilityScore: '',
            // bio: "",
            // equipment: '',
            //     armor: '',
            //     weapon: '',
            //     Shield: ''        
        };
        //binding
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    //event handlers
    handleNameChange(e){
        this.setState({name:e.target.value});
    }
    

    render(){
        return(
            <div>
                <h1>{this.props.player.name}</h1>
                <input type="text" onChange={e => this.handleNameChange(e)} />
                <h2>{this.props.player.races}</h2>
                <h2>{this.props.player.classes}</h2>
                <h2>{this.props.player.skills}</h2>
                <button onClick={()=>this.props.playerUpdate(this.props.index, this.state.name, this.state.race, this.state.class, this.state.skill)}>
                Edit Character
                </button>
                <button onClick={() => this.props.death(this.props.index)}>
                Character has died
                </button>
            </div>
        )
    }
}