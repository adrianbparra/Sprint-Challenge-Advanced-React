import React from "react";
import {usePlayersHook} from "../hooks/usePlayersHook";

const PlayerCard = (props) => {

    const {name, country, searches, id} = props.player
    
    const [selectPlayer, setSelectPlayer] = usePlayersHook(id, false)

    

    
    const togglePlayer = e => {
        console.log(name)
        setSelectPlayer(!selectPlayer);
    }


    return(
        <div 
            className={`player-card`}
            id={id}
            // style={{backgroundColor: "red"}}
            onClick={togglePlayer}
        >
            <h1>{name}</h1>
            <p>Country: {country}</p>
            <span>Searches: {searches}</span>
        </div>
    )


}


export default PlayerCard