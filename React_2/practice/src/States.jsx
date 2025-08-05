import { useState } from "react"
export default function States(){
const [newFrouit,oldfrouit]=useState("Apple")
function changen(){
    oldfrouit("Bannana")
}
    return(<>
    <h1>{newFrouit}</h1>
    <button onClick={changen}>Change frouit name</button>
    </>)
}