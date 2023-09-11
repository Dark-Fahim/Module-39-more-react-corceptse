import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick() {
    alert('Button clicked')
  }
  const handleClick2 = () => {
    alert('Button 3 clicked')
  }
  return (
    <>

      <h4>React Core Concept React</h4>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => alert('Button 2 clicked')}>Buton 2</button>
      <button onClick={() => handleClick2()}>Button 3</button>


    </>
  )
}

export default App
