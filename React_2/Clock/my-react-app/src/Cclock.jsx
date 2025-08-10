import { useState,useEffect } from "react"

const Cclock=({color})=>{
    const[time,setTime]=useState(0)
    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    },[])
    return(<>
    <h2>This  is digital clock</h2>
    <h1 style={{color:color,background:"white",borderRadius:"10px",padding:"10px",margin:"10px"}}>{time}</h1>
    </>)
}
export default Cclock