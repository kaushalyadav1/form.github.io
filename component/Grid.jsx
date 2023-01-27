import axios from "axios"
import { useEffect, useState } from "react"
import ds from "./index.module.css"

const Grid = () => {

    let [content, setContent] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((e) => {
                setContent(e.data)
            })
    }, [])

    return (
        <div id={ds.tbl}>
            <table>

                <thead>
                    <tr>
                        <th>name</th>
                        <th>mobile</th>
                        <th>email</th>
                        <th>password</th>
                    </tr>
                </thead>

                <tbody>
                    {content.map((e) => {
                        return (
                            <tr>
                                <td> {e.name} </td>
                                <td> {e.mobile} </td>
                                <td> {e.email} </td>
                                <td> {e.password} </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}
export default Grid