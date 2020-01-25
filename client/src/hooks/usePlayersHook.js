import { useState, useEffect } from "react";


export const usePlayersHook = (key, initialValue) => {
    const [player, setPlayer] = useState(initialValue)


    const setAllPlayers = updatePlayer => {
        setPlayer(updatePlayer)
    }


    useEffect(()=>{

        if(player === true){
            document.getElementById(key).classList.add("player-selected")
        } else {
            document.getElementById(key).classList.remove("player-selected")
        }

    },[player])


    return [player, setPlayer]

}
