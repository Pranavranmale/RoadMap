import { useEffect } from "react"

function Count({count,data}){
    useEffect(()=>{
            Counter()
    },[count])

    useEffect(()=>{
        handalData()
    },[data])
     function handalData(){
        console.log("handalData Called")
    }
      function Counter(){
        console.log("Handal Counter");   
    }
    useEffect(()=>{
        return ()=>{
            console.log("Unmount Phase Only");
        }
        
    })
    
    return(<>
        <h1>Counter  value: {count} </h1>
        <h1>what is data:{data}</h1>
    </>)
}
export default Count