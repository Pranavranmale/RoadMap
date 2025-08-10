import { useState } from "react"

export default function DropDown(){
    const[xgender,setgender]=useState("")
    const[city,setCity]=useState("")
    return (<>
        <h1>This is Practice for Radio buttons and DropDown</h1>
        <h4>Select Gender</h4>
        <input type="radio" checked={xgender=='Male'} onChange={(e)=>setgender(e.target.value)}  name="gender" id="male" value="Male"/><label htmlFor="male">Male</label><br />
        <input type="radio" name="gender" id="female" value="Female"  onChange={(e)=>setgender(e.target.value)} checked={xgender=='Female'}/><label htmlFor="female">Female</label>
        <br /><br />
        <h4>Gender is: {xgender}</h4>

        <br /><br /><br />
        <h4>Select City</h4>
        <select name="" id="" defaultValue={"Pune"} onChange={(e)=>setCity(e.target.value)} >
            <option value="Kolhapur">Kolhapur</option>
            <option value="Pune">Pune</option>
            <option value="Satara">Satara</option>
            <option value="Mumbai">Mumbai</option>
        </select>

        <h3>Selected city is : {city}</h3>
    </>)

}