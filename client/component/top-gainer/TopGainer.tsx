import { useState, useEffect, useContext } from "react";
import { newsData } from "../../Type/GlobalType";
import { useNavigate } from "react-router-dom";
import Context from "../../src/Context/Context";
import axios from "axios";


const TopGainer = () => {
    const [page, setPage] = useState(0)
    const [gain, setGain] = useState<newsData[]>([])
    const navigate = useNavigate()
    const { setIndividualData } = useContext(Context)
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

    const TopGainer = (item: newsData) => {
        setIndividualData(item)
        navigate("/detail")
    }

    return (
        <div>
            <div className="allView">
                {
                    gain.map((item) => {
                        return (
                            <div key={item.company.bseScriptCode} className="card" onClick={() => TopGainer(item)}>
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