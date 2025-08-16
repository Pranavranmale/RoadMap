import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import Appli from './Appli.jsx'
import Comp from './Comp.jsx'
import Appx from './Appx.jsx'
import Boot from './Boot.jsx'
import Boot2 from './Boot2.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Appli/> */}
   {/* <div style={{display:'flex', flexWrap:'wrap'}}>
     <Comp/>
      <Comp/>
       <Comp/>
        <Comp/>
         <Comp/>
          <Comp/>
           <Comp/>
            <Comp/>
             <Comp/>
              <Comp/>
               <Comp/>
                <Comp/>
   </div> */}

   {/* <Appx/> */}
   <Boot2/>
  </StrictMode>,
)
