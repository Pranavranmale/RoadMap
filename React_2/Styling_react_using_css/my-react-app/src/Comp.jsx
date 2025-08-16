import style from './css/Comp.module.css'
export default function Comp() {
    return (<>
        <div>
            <h1 className={style.heder}>User Detels</h1>
            <div className={style.card}>
                <img className={style.img} src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                <div className={style.textWrap} >
                    <center><h2> Name : Pranav Ranmale</h2>
                    <h3>Role : Devloper</h3></center>
                </div>
            </div>
        </div>
    </>)
}