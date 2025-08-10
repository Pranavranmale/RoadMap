const User = ({data}) => {
    return (
        
    <div style={{border:"2px solid pink",
        padding:10,
        margin:20,
        borderRadius:10
    }}>
        <h1>User Componant</h1>
        <h3>Name:{data.User}</h3>
        <h3>Name:{data.age}</h3>
        <h3>Name:{data.email}</h3>
    </div>
    )
}
export default User;