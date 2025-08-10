import { useState } from 'react'
import './App.css'
import User from './User'

function App() {
  
    const Udata = [
    {
      User: "pranav",
      age: 22,
      email: "pranav@gmail.com"
    },
    {
      User: "Rohan",
      age: 23,
      email: "Rohan@gmail.com"
    },
    {
      User: "pratik",
      age: 22,
      email: "pratik@gmail.com"
    },
    {
      User: "Prathmesh",
      age: 23,
      email: "Prathmesh@gmail.com"
    },
    {
      User: "Prathmesh",
      age: 23,
      email: "Prathmesh@gmail.com"
    }

  ]

  return (
    <>
      <h1>Reuse_componant_unsing_loop</h1>
      {
        Udata.map((user)=>
        <div id='User'><User data= {user}/>
        </div>
      ) 
      }
     
    </>
  )
}

export default App
