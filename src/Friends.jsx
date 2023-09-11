import { useEffect, useState } from "react"
import "./Friends.css"
import Friend from "./Friend"
export default function Friends() {
    const [friends, setFrineds] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFrineds(data))
    }, [])
    return (
        <div className="box">
            <h3>Friends</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

/**
 * 1. state to hold data
 * 2.use effect with depedency array
 * 3.usa fetch to load data
 * 4. set loaded data to the state
 * 5. display data on the component
 */