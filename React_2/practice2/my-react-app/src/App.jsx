import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  function ChangeName(){
      setName(name)
  }

  return (
    <>
        <input type="text" placeholder='Enter the name' value={name} onChange={(e) => setName(e.target.value)} />
        <h1>{name}</h1>
        <button onClick={()=>setName("")}>Clear</button>
    </>
  )
}

export default App
