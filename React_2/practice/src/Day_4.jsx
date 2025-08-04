function Day_4(){
    function onclick(){
        alert("Love You")
    }
    const fruit=(name)=>{
        alert(name)
    }
    
    return<>
    <button onClick={onclick}>Click me</button>
    <button onClick={()=>fruit("apple")}>Apple</button>
    <button onClick={()=>fruit("banana")}>banana</button>

    </>
}
export default Day_4