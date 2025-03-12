import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  // normal variable
  // const age = 50;
  // const name = 'pramod'

  // react state
  const [age, setAge] = useState(50)
  const [favSub, setFavSubject] = useState("English");


  const increaseAge = ()=>{
    setAge(age+1)
  }

  const decreaseAge = ()=>{
    setAge(age-1)
  }


  return (
    <div>
      <h3>{favSub}</h3>
      <h3>{age}</h3>
      <button onClick={increaseAge}>increase age</button>
      <button onClick={decreaseAge}>decrease age</button>

      {/* props drilling */}
      {/* props drilling is always one way.
      It means you can only send the props value from parent to child
      but not from child to parent. It's also called one way data binding.

      */}
      <Profile age={age} name="jackie chan" roll={21} favSub={favSub} setFavSubject={setFavSubject} />
    </div>
  );
}

export default App;




// file structure react
// jsx
// components
// why should we use components
// states => state is a kind of variable which gives an extra feature such as a function to manage its value

// 20% => components/states/props/props drilling/ state lifting
// 20% => api call/hooks
// 30% => routing
// 30% => assembling  all of the upper things