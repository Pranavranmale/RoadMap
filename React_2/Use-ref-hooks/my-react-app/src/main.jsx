import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Uncontrolled from './Uncontrolled.jsx'
import User from './User.jsx'
import App2 from './App2.jsx'


 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Uncontrolled/> */}
   
  <App2/>
  </StrictMode>,
)
