import { useState } from 'react'
import DropDown from './DropDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <DropDown/>
    </>
  )
}

export default App
