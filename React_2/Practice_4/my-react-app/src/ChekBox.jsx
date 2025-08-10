import { useState } from "react";

function ChekBox(){
    const[skill,setSkill]=useState([])
    const handalSkill=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setSkill([...skill,event.target.value])
        }
        else{
            setSkill([...skill.filter((item)=>item!=event.target.value)])
        }
        
    }
    return(<>
       <h1>Select your skills</h1>
       <input onChange={handalSkill} type="checkbox"  id="js" value="js" />
       
       <label htmlFor="js">JavaScript</label><br />

       <input onChange={handalSkill} type="checkbox" id="node" value="node" />
       <label htmlFor="node">NodeJs</label> <br />

       <input onChange={handalSkill} type="checkbox" value="ReactJs"  id="ReactJs" /><label htmlFor="ReactJs">ReactJs</label> <br />

       <input onChange={handalSkill} type="checkbox" value="Express" id="Express" /><label htmlFor="Express">Express</label>

    <br /> <br />

<h1>{skill.toString(",")}</h1>
    </>)
}
export default ChekBox;