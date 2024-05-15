import { useEffect, useState } from "react";
import axios from "axios";
import StockOnNews from "./stockOnNews";
import StockTopGainer from "./stockTopgain";
import StockTopLoser from "./topLosser";
import { useContext } from "react";
import Context from "../../Context/Context.ts";



const Home = () => {
    const { setGain, setLoser, setNews } = useContext(Context)
    const [page, setPage] = useState(0)
    const size = 10
    const fetchData = () => {
        axios.post("/api", { page, size })
            .then((res) => {
                setNews(res.data.data.exploreCompanies.STOCKS_IN_NEWS)
                setGain(res.data.data.exploreCompanies.TOP_GAINERS)
                setLoser(res.data.data.exploreCompanies.TOP_LOSERS)
            }).catch((err) => {
                console.log(err)
                page === 0 ? setPage(0) : setPage(page - 1)
            })
    }

    useEffect(() => {
        fetchData()
    }, [page]);
    return (
        <div>
            <StockOnNews />
            <StockTopGainer />
            <StockTopLoser />
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
                <button onClick={() => setPage((prev) => {
                    if (prev === 0) {
                        return prev
                    }
                    return prev - 1
                })}>Previous</button>
                <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
        </div >
    )
}
export default Home