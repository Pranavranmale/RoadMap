import { useState } from "react";
import States from "./states";
import User from "./User";
export default function Day6(){
    const[disply,setdisply]=useState(true)
    return(<>
     <h1>togal in react js</h1>
    {
        disply? <User/>:"name is not visibal"
    }
    <button onClick={()=>setdisply(!disply)}>onclick</button>
    </>)
}