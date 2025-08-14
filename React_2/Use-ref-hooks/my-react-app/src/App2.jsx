import User from "./User"
export default function App2(){
     const disply=(name)=>{
        alert(name)
    }
    const getUser=()=>{
        alert("getUser Function Has been called")
    }
    return(<>
     <User displyName={disply} name="Rahul" getuser={getUser}/>
     <User displyName={disply} name="Ashu" getuser={getUser}/>
     <User displyName={disply} name="Pranav "getuser={getUser}/>
     <User displyName={disply} name="Pranali" getuser={getUser}/>
     <User displyName={disply} name="asmita" getuser={getUser}/>
    </>)
}