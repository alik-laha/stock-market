import { useEffect, useState } from "react";
import axios from "axios";
import StockOnNews from "./stockOnNews";
import StockTopGainer from "./stockTopgain";
import StockTopLoser from "./topLosser";
import { useContext } from "react";
import Context from "../../src/Context/Context.ts";



const Home = () => {
    const { individual, setGain, setLoser, setNews } = useContext(Context)
    const [page, setPage] = useState(0)
    const [size, setSize] = useState(5)
    const [type, setType] = useState("")
    console.log(individual)
    const fetchData = () => {
        axios.post("/api/", { page, size, type })
            .then((res) => {
                console.log(res)
                setNews(res.data.data.exploreCompanies.STOCKS_IN_NEWS)
                setGain(res.data.data.exploreCompanies.TOP_GAINERS)
                setLoser(res.data.data.exploreCompanies.TOP_LOSERS)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
        setInterval(fetchData, 10000);
    }, []);
    return (
        <div>
            <StockOnNews />
            <StockTopGainer />
            <StockTopLoser />
        </div >
    )
}
export default Home