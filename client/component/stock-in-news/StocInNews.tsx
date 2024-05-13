import { useState, useEffect, useContext } from "react";
import { newsData } from "../../Type/GlobalType";
import { useNavigate } from "react-router-dom";
import Context from "../../src/Context/Context";
import axios from "axios";


const StockOnNewsAll = () => {
    const [page, setPage] = useState(0)
    const [news, setNews] = useState<newsData[]>([])
    const navigate = useNavigate()
    const { setIndividualData } = useContext(Context)

    useEffect(() => {
        axios.post("/api/news", { page })
            .then((res) => {
                if (res.data.data.exploreCompanies.STOCKS_IN_NEWS.length === 0) {
                    setPage((prev) => prev - 1)
                }
                else {
                    setNews(res.data.data.exploreCompanies.STOCKS_IN_NEWS)
                }
            }).catch((err) => {
                setPage((prev) => prev - 1)
                console.log(err)
            })
    }, [page])
    const handleStockinnews = (item: newsData) => {
        setIndividualData(item)
        navigate("/detail")
    }

    return (
        <div>
            <div className="allView">
                {
                    news.map((item) => {
                        return (
                            <div key={item.company.bseScriptCode} className="card" onClick={() => handleStockinnews(item)}>
                                <div className="card-content">
                                    <img src={item.company.imageUrl} alt={item.company.companyName} className="card-image" />
                                    <div className="text-content">
                                        <h4 className="company-name">{item.company.companyName}</h4>
                                        <p className="close-price">Price: {item.stats.close}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "40px" }}>
                <button onClick={() => setPage((prev) => {
                    if (prev === 0) {
                        return prev
                    }
                    return prev - 1
                })}>Previous</button>
                <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
            </div>
        </div>
    )
}
export default StockOnNewsAll