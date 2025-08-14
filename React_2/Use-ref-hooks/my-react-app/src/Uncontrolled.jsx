import { useRef } from "react"

export default function Uncontrolled(){
    const useref=useRef()
    const PasswordRef=useRef()
    const HandalFormref=(e)=>{
        e.preventDefault()
     //   console.log("HandalFormref");
       const user= useref.current.value
       console.log(user);
       const pass=PasswordRef.current.value
       console.log(pass);
       
       
        
    }

    const HandalForm=(e)=>{ 
        e.preventDefault()
        const name=document.querySelector("#Name").value
        console.log(name);
        const Pass=document.querySelector("#Password").value
        console.log(Pass);   
    }
    return(<>
    <h1>Uncontrolled Component</h1>
    <form action="" method="Post" onSubmit={HandalForm}>
     <input type="text" id="Name" placeholder="Enter Your name"/><br /><br />
    <input type="Password" id="Password" placeholder="Enter Your Password" /><br /><br />
    <button >Submit with ref</button>
    </form>

    <hr />

    <h1>Uncontrolled Component With Useref</h1>
    <form action="" method="Post" onSubmit={HandalFormref}>
     <input type="text" ref={PasswordRef} id="Nameref" placeholder="Enter Your name"/><br /><br />
    <input type="Password" ref={useref} id="PasswordRef" placeholder="Enter Your Password" /><br /><br />
    <button >Submit</button>
    </form>
   
    </>)
}