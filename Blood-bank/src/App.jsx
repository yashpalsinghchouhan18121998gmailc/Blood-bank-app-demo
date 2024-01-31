import FirstView from "./FirstView"
import SecondView from "./SecondView";
import SignUp from "./SignUp";
import BloodDonate from "./BloodDonate";
import Donate from "./Donate";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes ,Route} from  "react-router-dom"


function App() {

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<FirstView/>}/>
      <Route path="/SignUp" element ={<SignUp/>}/>
      <Route path="/BloodDonate" element ={<BloodDonate/>}/>
      <Route path="/Donate" element ={<Donate/>}/>
      <Route path="/SecondView" element ={<SecondView/>}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App

