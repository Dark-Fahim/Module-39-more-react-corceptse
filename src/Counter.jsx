import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    function handleReduce() {
        setCount(count - 1)
    }

    return (
        <div style={{ border: '2px solid red', margin: "20px", padding: "20px", borderRadius: "10px" }}>
            <h2>Counter: {count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}