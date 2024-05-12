import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home.tsx";
import Navbar from "../component/Navbar/Navbar.tsx";
import FloatingWindow from "../component/FloatingSearchBar/FloatingSearchBar.tsx";
import TopGainer from "../component/top-gainer/TopGainer.tsx";
import TopLoser from "../component/top-loser/TopLoser.tsx";
import StockOnNewsAll from '../component/stock-in-news/StocInNews.tsx';
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar /><FloatingWindow /><Home /></>} />
        <Route path="/top/gainer" element={<><Navbar /><FloatingWindow /><TopGainer /></>} />
        <Route path="/top/loser" element={<><Navbar /><FloatingWindow /><TopLoser /></>} />
        <Route path="/stockin/news" element={<><Navbar /><FloatingWindow /><StockOnNewsAll /></>} />


      </Routes>
    </>
  )
}

export default App
