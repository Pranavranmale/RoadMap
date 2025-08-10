import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nested from './Nested'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nested/>
    </>
  )
}

export default App
