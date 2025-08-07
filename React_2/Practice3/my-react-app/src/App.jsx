import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const[SirName,setsirname]=useState("")
  const [collage, Setcollage] = useState("")
  const [roolnum, setRoolNum] = useState()


  return (
    <>
        <h1> Student Form</h1>
      <br /><br />
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name'  />
      <br /><br />
      <input type="text" value={SirName} onChange={(e)=>setsirname(e.target.value)} placeholder='Enter Your SirName'  />
      <br /><br />
      <input type="text" value={collage} onChange={(e)=>Setcollage(e.target.value)} placeholder='Enter Your Collage Name'  />
      <br /><br />
      <input type="text" value={roolnum} onChange={(e)=>setRoolNum(e.target.value)} placeholder='Enter Your Roll Number'  />
      <br /><br />
      <button onClick={()=>{setName(""); setRoolNum("");Setcollage("");setsirname("")}}>Submit</button>
      <button onClick={()=>{setName(""); setRoolNum("");Setcollage("");setsirname("")}}>cliar</button>
      <h1>{name}</h1>
      <h1>{SirName}
      <h1>{collage}</h1>
      <h1>{roolnum}</h1>
      </h1>
    </>
  )
}

export default App
