export default function Array() {
  const Udata = [
    {
      User: "pranav",
      age: 22,
      email: "pranav@gmail.com"
    },
    {
      User: "Rohan",
      age: 23,
      email: "Rohan@gmail.com"
    },
    {
      User: "pratik",
      age: 22,
      email: "pratik@gmail.com"
    },
    {
      User: "Prathmesh",
      age: 23,
      email: "Prathmesh@gmail.com"
    },
    {
      User: "Prathmesh",
      age: 23,
      email: "Prathmesh@gmail.com"
    }

  ]
  return (
    <>
      <table border="1">
        <thead>
          <tr>
            <td>User</td>
            <td>name</td>
            <td>age</td>
          </tr>
        </thead>

        <tbody>
       { Udata.map((user)=>
            <tr>
              <td>{user.User}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>

      </table>
    </>
  )
}