import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  let changecolor = ()=>{
    let str = "0123456789ABCDEF";
    let colorch = "#";
    for(let i =1;i<7;i++){
      let index = Math.floor(Math.random()*16);
      colorch += str[index];
    }
    setColor(colorch);
  }

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          <button onClick={changecolor}
          className='outline-none px-4 rounded-xl p-3' 
          style={{backgroundColor:color }}>Change Color {color}</button>
        </div>
      </div>
    </div>
  )
}

export default App
