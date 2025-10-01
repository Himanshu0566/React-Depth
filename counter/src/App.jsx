import { useState } from 'react'
import './App.css'

function App() {
  // 
  let [counter, setcounter] = useState(15)
  // let counter = 15
  const addValue = () => {
    if (counter < 20) {
      setcounter(counter + 1)
    }
    else {
      counter = 20
    }
  }
  const removeValue = () => {
    if (counter > 0) {
      setcounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai and react
      </h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>fotter: {counter}</p>
    </>
  )
}

export default App
