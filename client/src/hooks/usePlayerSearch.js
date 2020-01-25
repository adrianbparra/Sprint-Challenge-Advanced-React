import {useState} from "react"

export const usePlayerSearch = (key, initialValue) =>{
    const [players, setPlayer] = useState(initialValue)

    const handleChanges = updateValue => {
        setPlayer(updateValue);
    }

    return [players, setPlayer, handleChanges]

}