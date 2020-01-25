import React from "react";
import PlayerCard  from "./PlayerCard.js"


class Players extends React.Component {
    constructor(){
        super()
        this.state={
            players: []
        }
    }

    componentDidMount() {

        fetch(`http://localhost:5000/api/players`)
            .then((response) =>{
                console.log(response)
            return response.json();
            })
            .then((data)=>{

                this.setState({
                    ...this.state,
                    players : data
                })
                console.log(data)
            })

            

    }

    render() {
        return(
            <div >
                <h1>Select Your Favorite Players</h1>
                <div className="player-container">
                
                    {this.state.players.length > 1 && this.state.players.map( (player) => {
                        return <PlayerCard key={player.id} player={player}/>
                    })}
                    
                </div>

            </div>
        )
    }
}

export default Players