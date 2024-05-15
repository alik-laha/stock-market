import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Navbar from "./component/Navbar/Navbar";
import FloatingWindow from "./component/FloatingSearchBar/FloatingSearchBar";
import TopGainer from "./component/top-gainer/TopGainer";
import TopLoser from "./component/top-loser/TopLoser";
import StockOnNewsAll from './component/stock-in-news/StocInNews';
import ChartData from './component/chartData/ChartData';
function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<><Navbar /><FloatingWindow /><Home /></>} />
        <Route path="/top/gainer" element={<><Navbar /><FloatingWindow /><TopGainer /></>} />
        <Route path="/top/loser" element={<><Navbar /><FloatingWindow /><TopLoser /></>} />
        <Route path="/stockin/news" element={<><Navbar /><FloatingWindow /><StockOnNewsAll /></>} />
        <Route path="/detail" element={<><Navbar /><ChartData /></>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </>
  )
}

export default App
