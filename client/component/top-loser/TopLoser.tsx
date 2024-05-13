import { useState, useEffect, useContext } from "react";
import context from "../../src/Context/Context";
import { newsData } from "../../Type/GlobalType";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const TopLoser = () => {
    const [page, setPage] = useState(0)
    const [loser, setloser] = useState<newsData[]>([])
    const navigate = useNavigate()
    const { setIndividualData } = useContext(context)
    useEffect(() => {
        axios.post("/api/top-loser", { page })
            .then((res) => {
                if (res.data.data.exploreCompanies.TOP_LOSERS.length === 0) {
                    setPage((prev) => prev - 1)
                }
                else {
                    setloser(res.data.data.exploreCompanies.TOP_LOSERS)
                }

            }).catch((err) => {
                setPage((prev) => prev - 1)
                console.log(err)
            })
    }, [page])
    const Toploser = (item: newsData) => {
        setIndividualData(item)
        navigate("/detail")
    }

    return (
        <div>
            <div className="allView">
                {
                    loser.map((item) => {
                        return (
                            <div key={item.company.bseScriptCode} className="card" onClick={() => Toploser(item)}>
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
export default TopLoser