import { useState } from "react";
import "./App.css";

function App() {
  // normal variable
  // const age = 50;
  // const name = 'pramod'

  // react state
  const [age, setAge] = useState(50)

  const increaseAge = ()=>{
    setAge(age+1)
  }

  const decreaseAge = ()=>{
    setAge(age-1)
  }


  return (
    <div>
      <h3>{age}</h3>
      <button onClick={increaseAge}>increase age</button>
      <button onClick={decreaseAge}>decrease age</button>
    </div>
  );
}

export default App;


// file structure react
// jsx
// components
// why should we use components
// states => state is a kind of variable which gives an extra feature such as a function to manage its value

// 20% => state
// 20% => api call
// 30% => routing
// 30% => assembling  all of the upper things