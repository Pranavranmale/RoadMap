import User from './User';
import Collage from './Collage';
import { useState } from 'react';
import Student from './Student';
function Day9(){
    const User1Obj={
        name:"Pranav",
        age:22,
        occupation:"Software Engineer",
        Email:"pranavRanmale@gmail.com"
    }
      const User2Obj={
        name:"omkar",
        age:22,
        occupation:"Software Engineer",
        Email:"omkarRanmale@gmail.com"
    }
      const User3Obj={
        name:"manoj",
        age:22,
        occupation:"Software Engineer",
        Email:"manojRanmale@gmail.com"
    }
    let collageName=["IIT","VIT","KIT","LIT"]
    // let name="paranav"
    // let age="22"
    // let email="pranavRanmale@gmail.com"
    const [student,setStudent]=useState("Pranav")
    return(<>
    <hr />
    <Collage cname={collageName} />
    {student && <Student name={student}/>}
    <button onClick={()=>setStudent("Pranav Ranmale")}>Update_StudeName</button>
    {/* <User name="Pranav" age={29} Email="Pranav@gmail.com"/> */}
   {/* <User name={name} age={parseInt(age)} Email={email}/> */}
   <User user={User1Obj}/>
    <User user={User2Obj}/>
   <User user={User3Obj}/>
   


    </>)
}
export default Day9;