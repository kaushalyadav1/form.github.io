import axios from "axios"
import { useState } from "react"
import ds from "./index.module.css"

const Form=()=>{

    let [name,setName] = useState("")
    let [mobile,setMobile] = useState("")
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")

    let nameData=(e)=>{
        setName(e.target.value)
    }

    let mobileData=(e)=>{
        setMobile(e.target.value)
    }

    let emailData=(e)=>{
        setEmail(e.target.value)
    }

    let passwordData=(e)=>{
        setPassword(e.target.value)
    }

    let handle=(e)=>{
        e.preventDefault()

        let load = {name,mobile,email,password}
        axios.post("http://localhost:3000/users",load)
        .then(()=>{
            alert("Data inserted")
        })

        window.location.reload()
    }

    return(
        <div id={ds.main}>
            <form action="">

                <h1>register</h1>

                <label htmlFor="">name</label>
                <input type="text" placeholder="enter name" required value={name} onChange={nameData} />

                <label htmlFor="">mobile</label>
                <input type="number" placeholder="enter mobile" value={mobile} onChange={mobileData} />

                <label htmlFor="">email</label>
                <input type="email" placeholder="enter email" value={email} onChange={emailData} />

                <label htmlFor="">password</label>
                <input type="password" placeholder="enter password" value={password} onChange={passwordData} />

                <button onClick={handle}>submit</button>

            </form>
        </div>
    )
}
export default Form