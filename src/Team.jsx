import { useState } from "react"

export default function Team() {

    const [team, setTeam] = useState(11)

    function handleAdd(){
        setTeam(team+1)
    }
    function handleRemove(){
        setTeam(team-1)
    }

    const teamStyle = {
        border: '2px solid aqua',
        margin: '20px',
        padding: "20px",
        borderRadius: '10px'
    }

    return (
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add player</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}