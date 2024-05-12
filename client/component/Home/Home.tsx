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
    const [size, setSize] = useState(10)
    console.log(individual)
    const fetchData = () => {
        axios.post("/api", { page, size })
            .then((res) => {
                console.log(res)
                if (res.data.data.exploreCompanies.STOCKS_IN_NEWS.length === 0) {
                    setPage((prev) => prev - 1)
                }
                if (res.data.data.exploreCompanies.TOP_GAINERS.length === 0) {
                    setPage((prev) => prev - 1)
                }
                if (res.data.data.exploreCompanies.TOP_LOSERS.length === 0) {
                    setPage((prev) => prev - 1)
                }
                setNews(res.data.data.exploreCompanies.STOCKS_IN_NEWS)
                setGain(res.data.data.exploreCompanies.TOP_GAINERS)
                setLoser(res.data.data.exploreCompanies.TOP_LOSERS)
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchData()
    }, [size, page]);
    return (
        <div>
            <StockOnNews />
            <StockTopGainer />
            <StockTopLoser />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
                <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
                <button onClick={() => setPage((prev) => {
                    if (prev === 0) {
                        return prev
                    }
                    return prev - 1
                })}>Previous</button>
            </div>
        </div >
    )
}
export default Home