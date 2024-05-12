import { useState, useEffect } from "react";
import { newsData } from "../../Type/GlobalType";
import axios from "axios";


const StockOnNewsAll = () => {
    const [page, setPage] = useState(0)
    const [news, setNews] = useState<newsData[]>([])

    useEffect(() => {
        axios.post("/api/news", { page })
            .then((res) => {
                if (res.data.data.errorMessage.message) {
                    console.log(page)
                    setPage((prev) => prev - 1)
                }
                if (res.data.data.exploreCompanies.STOCKS_IN_NEWS.length === 0) {
                    setNews(res.data.data.exploreCompanies.STOCKS_IN_NEWS)
                }




            }).catch((err) => {
                console.log(err)
            })
    }, [page])

    return (
        <div>
            <div className="allView">
                {
                    news.map((item) => {
                        return (
                            <div key={item.company.bseScriptCode} className="card">
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