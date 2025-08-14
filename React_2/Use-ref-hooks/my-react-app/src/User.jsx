import { useState } from "react"

export default function User({displyName,name,getuser}){
    
    
    return(<>
    <h1>call parent function from child component </h1>
    <button onClick={()=>displyName(name)}>Disply userName</button>
    <button onClick={()=>getuser()}>get User</button>
    </>)
}