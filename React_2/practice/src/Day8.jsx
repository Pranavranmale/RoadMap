import { useState } from "react";
export default function Day8(data){
    
    const[count,setCunt]=useState(0)
    return(<>
    <h1> {count}</h1>
    <h1>{data}</h1>
    <button onClick={()=>setCunt(count+1)}>Counter</button>
    {
        count==0?<h1>condition0</h1>
        :count==1?<h1>condition1</h1>
        :count==2?<h1>condition2</h1>
        :count==3?<h1>condition3</h1>:null
    }
    </>)
}