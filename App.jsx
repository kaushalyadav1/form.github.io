import { BrowserRouter,Routes,Route} from "react-router-dom"
import Nav from "./component/Nav"
import FormD from "./component/FormD"
import Grid from "./component/Grid"
const App=()=>{
    return(
        <BrowserRouter>
            <Nav></Nav>

            <Routes>
                <Route path="/" element={<FormD/>}></Route>
                <Route path="/grid" element={<Grid/>}></Route>
            </Routes>

        </BrowserRouter>
    )
}
export default App