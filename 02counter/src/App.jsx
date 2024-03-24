import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [msg1 , setMsg1] = useState("");
let [msg2 , setMsg2] = useState("");

let [counter,setCounter] = useState(21);
const addValue = () =>{
  console.log("clicked ",counter);
  counter += 1
  if(counter > 30 ){
    counter = 30;
    setMsg1("Age cannot go above 30");
  }
  setMsg2("");
  setCounter(counter);
}
const decvalue = () =>{
  console.log("clicked ",counter);
  counter -= 1;
  if(counter < 0 ){
    counter = 0;
    setMsg2("Age cannot go below 0");
  }
  setMsg1("");
  setCounter(counter)
}
  return (
    <>
       <h1>MY NAME IS VINEET DAGA</h1>
       <h2>My Age : {counter}</h2>
       <button onClick={addValue} >Add value</button> <p>{msg1}</p>
       <br />
       <button onClick={decvalue}>decrease value</button>
       <p>{msg2}</p>
    </>
  )
}

export default App
