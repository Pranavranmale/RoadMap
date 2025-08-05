import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import './Head'
// import Head from './Head'

function App() {
  const [count, setCount] = useState(10)
  const[R_count,R_setcount]=useState(10)


  return (
    <>
      <h1>{count}</h1>
      <h1>{R_count}</h1>
      <button onClick={()=>R_setcount(R_count-1)}>r count</button>
      <button onClick={()=>setCount(count+1)}> count</button>
    </>
  )
}

export default App
