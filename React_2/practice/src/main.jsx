import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Day8 from './Day8.jsx'
import App from './App.jsx'
// import Head from './Head.jsx'
// import Todo from './Todo.jsx'
// import Day_3 from './Day_3.jsx'
// import Day_4 from './Day_4.jsx'
// import States from './States.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Day8/>
    {/* <App /> */}
    {/* <Day_3/>
    <Day_4/>
    <States/> */}
    {/* <Head/> */}
    {/* <Todo/> */}
  </StrictMode>,
)
