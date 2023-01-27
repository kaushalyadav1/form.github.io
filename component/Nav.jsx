import { Link } from "react-router-dom"
import ds from "./index.module.css"
const Nav=()=>{
    return(
        <ul id={ds.navbar}>
            <li> <Link to="/">form</Link> </li>
            <li> <Link to="/grid">data</Link> </li>
        </ul>
    )
}
export default Nav