import { useState } from 'react'
import './App.css'
import Cclock from './Cclock'
function App() {
  const[color,setcolor]=useState("green")
  return (
    <>
    <select name="" id="" onChange={(e)=>setcolor(e.target.value)}>
      <option value="red">Red</option>
      <option value="Blue">Blue</option>
      <option value="Black">Black</option>
      <option value="green">green</option>
    </select>
     <Cclock color={color}/>
    </>
  )
}

export default App
