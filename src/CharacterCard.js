import React, {Component} from "react";


export default class CharacterCard extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: this.props.playerChar.name
           
        };

        //binding
        this.handlePlayCharInput = this.handlePlayCharInput.bind(this);
    }

    //event handlers
    handlePlayCharInput(e){
        this.setState({name: e.target.value});
    }
    

    render(){
        return(
            <div>
                <h1>{this.props.playerChar.name}</h1>

                <button onClick={()=>this.props.updatePlayerChar(this.props.index, this.state.name)}>
                Edit Character
                </button>
                <button onClick={() => this.props.playerDeath(this.props.index)}>
                Character has died
                </button>
            </div>
        )
    }
}