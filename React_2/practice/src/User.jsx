export default function User({user}){
    console.log(user);
    
    return(<>
    <hr />
    <h1>age:{user.age}</h1>
    <h1>name:{user.name}</h1>
    <h2>email:{user.Email}</h2>
    <h1>occupation:{user.occupation}</h1>
 
    </>)
}