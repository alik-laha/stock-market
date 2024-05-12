import { useState, useEffect } from "react";
import { newsData } from "../../Type/GlobalType";
import axios from "axios";


const TopGainer = () => {
    const [page, setPage] = useState(0)
    const [gain, setGain] = useState<newsData[]>([])

    useEffect(() => {
        axios.post("/api/top-gainer", { page })
            .then((res) => {
                if (res.data.data.exploreCompanies.TOP_GAINERS.length === 0) {
                    setPage((prev) => prev - 1)
                } else {
                    setGain(res.data.data.exploreCompanies.TOP_GAINERS)
                }

            }).catch((err) => {
                console.log(err)
                setPage((prev) => prev - 1)
            })
    }, [page])

    return (
        <div>
            <div className="allView">
                {
                    gain.map((item) => {
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
export default TopGainer