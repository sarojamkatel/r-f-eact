import { useState } from 'react'

import './App.css'

function App() {
 
  let [counter,setCounter]=useState(15);

  // let counter=15;

  const addValue=()=>{

    if (counter>=0 && counter<=20){
    counter=counter+1; 
    setCounter(counter); // setCounter is a method and what setCounter does is that it tells  what new value to add under counter variable.
  }
 else {alert('the counter must be in the range 0-20 ');
  counter=counter-1;
  setCounter(counter);
 }
}


  const removeValue=()=>{
if (counter>=0 && counter<=20){
    counter =counter-1;
    setCounter(counter);
  }
  else {
    alert('the counter must be in the range 0-20');
    counter=counter+1;
    setCounter(counter);
  }
}

  return (
<>
<h1>Hola !</h1>
<h1>counter value: {counter} </h1>

<button onClick={addValue}>add value{counter}</button>

<br/>

<button onClick={removeValue}>remove value{counter}</button>


</>
  )
}

export default App
