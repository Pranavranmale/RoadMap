import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function App() {
  const inputRef=useRef(null)
  const h1ref=useRef()
  const inputFild=()=>{
      console.log(inputRef);
      inputRef.current.focus()
      inputRef.current.style.color="red"
      inputRef.current.placeholder="Enter Password"
      inputRef.current.value="123"
  }

  const h1Fild=()=>{
    h1ref .current.style.color='red'
  }

  return (
    <>
     <input ref={inputRef} type="text" placeholder='Enter User Name' />
     <button onClick={inputFild}>Focus on input fild</button>
     <h1 ref={h1ref}>Pranav</h1>
     <button onClick={h1Fild}>Change color of h1</button>
    </>

  )
}

export default App
