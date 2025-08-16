import { useState } from "react";
import Count from "./Count";
import Counter from "./Counter";

export default function Appp(){
    const[count,setCount]=useState(0)
    const[data,setData]=useState(0)
    const[disply,setDisply]=useState(false)
  
    return(
        <>
        {/* <Count count={count} data={data}/> */}
        {
          disply?  <Counter count={count} data={data}/>:null
        }
        <button onClick={()=>setCount(count+1)}>countr{count}</button>
        <button onClick={()=>setData(data+1)}>data</button>
        <button onClick={()=>setDisply(!disply)}>Toggle</button>
        </>
    )
}