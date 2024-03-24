import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-6 rounded-xl mb-5'>VINEET DAGA</h1>
    <Card username="Vineet Daga" btntext='idhar click kar'/>
    <Card username='hitesh chai'/>


    </>
  )
}

export default App
