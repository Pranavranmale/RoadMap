import Stude from "./Stude";

export default function Clg({clg}){
   
    return<div style={{backgroundColor:"red",
        padding:"20px",
        borderRadius:"20px",
        margin:"30px",
        borderBottom:" 2px solid white"
    }}>
       <h3> name:{clg.name} </h3> 
            <ul>
                <li><h3>City Name:{clg.city}</h3></li>
                <Stude stude={clg.stude}/>
            </ul>         
    </div>
}