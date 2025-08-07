import User2 from "./User2"
import Wraper from "./Wraper"
export default function Day10(){
    let name1="hitesh"
     let name2="hitesh"
    return(
        <>
            <User2 name={name1} />
            {/* <Wraper name={name2}/> */}
            <Wraper >
                <h1>Hello Pranav</h1>
            </Wraper>
        </>
    )
}