import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home.tsx";
import Navbar from "../component/Navbar/Navbar.tsx";
import FloatingWindow from "../component/FloatingSearchBar/FloatingSearchBar.tsx";
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar /><FloatingWindow /><Home /></>} />


      </Routes>
    </>
  )
}

export default App
