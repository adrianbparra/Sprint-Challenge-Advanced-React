import { useState, useEffect } from "react";


export const usePlayersHook = (id, initialValue) => {
    const [player, setPlayer] = useState(initialValue)



    useEffect(()=>{

        if(player === true){
            document.getElementById(id).classList.add("player-selected")
        } else {
            document.getElementById(id).classList.remove("player-selected")
        }

    },[player])


    return [player, setPlayer]

}
