export default function Stude({stude}){
    return(<>
        <h4>Student</h4>
                 
                    {
                        stude.map((item)=>
                            <ul> 
                                <li>
                                    student:{item.name}
                                </li>
                            </ul>
                        )
                    }
    </>)
}