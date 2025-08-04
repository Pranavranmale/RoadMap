import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Head from './Head.jsx'
// import Todo from './Todo.jsx'
import Day_3 from './Day_3.jsx'
import Day_4 from './Day_4.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Day_3/>
    <Day_4/>
    {/* <Head/> */}
    {/* <Todo/> */}
  </StrictMode>,
)
