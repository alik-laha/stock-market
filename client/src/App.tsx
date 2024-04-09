import './App.css'
import {Route, Routes} from "react-router-dom";
import Login from "../component/Login/login.tsx";
import Home from "../component/Home/Home.tsx";
import Navbar from "../component/Navbar/Navbar.tsx";
import Profile from "../component/Profile/Profile.tsx";
import About from "../component/About/About.tsx";
import Signup from "../component/Signup/Signup.tsx";
import FloatingWindow from "../component/FloatingSearchBar/FloatingSearchBar.tsx";
import EmailConfirm from "../component/emailCofirm/EmailConfirm.tsx";
import PrivateComponent from "../component/Private/private.tsx"
function App() {


  return (
    <>
        <Routes>
          <Route element={<PrivateComponent/>}>
          <Route path="/profile" element={<><Navbar/><FloatingWindow/><Profile/>  </>}/>
          <Route path="/about" element={<><Navbar/><FloatingWindow/><About/>  </>}/>
          <Route path="/user/verification/confirm/email" element={<EmailConfirm/>} />
          </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<><Navbar/><FloatingWindow/><Home/></>} />
        
        <Route path="/signup" element={<Signup/>} />
        
        </Routes>
    </>
  )
}

export default App
