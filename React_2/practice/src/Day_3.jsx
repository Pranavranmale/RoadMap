  function Day_3(){
    const name="pranav"
    let num1=20
    let num2=10
    function sub(){
      return num1-num2
    }
    function opration(a,b,op){
      if(op=="-"){
        return a-b
      }
      else if(op=="+"){
        return a+b
      }
      else{
        return a*b
      }
    }
    let namei={
      Name:"pranav",
      sirName:"ranmale"
    }
    return<>
        <h1>{name}</h1>
        <h1>{num1+num2}</h1>
        <h1>{sub()}</h1>
        <h1>{opration(20,10,"")}</h1>
        <h1>{namei.sirName}</h1>
    </>
 }
 export default Day_3;