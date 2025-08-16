import { useEffect } from "react"

export default function Counter({count,data}){
    useEffect(()=>{
        console.log("mounting phese only");
        
    },[])

        useEffect(()=>{
        console.log("Update phese only");
        
    },[count])
    return(<>
    <h1>Counter value{count}</h1>
    <h1>Data Value{data}</h1>
    </>)
}