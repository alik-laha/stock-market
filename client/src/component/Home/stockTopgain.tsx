import { useContext } from "react";
import Context from "../../Context/Context.ts";
import { useNavigate } from "react-router-dom";
import { newsData } from "../../../Type/GlobalType.ts";

const StockTopGain = () => {
    const { gain, setIndividualData } = useContext(Context)
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/top/gainer")
    }
    const handleTopgain = (item: newsData) => {
        setIndividualData(item)
        navigate("/detail")
    }
    return (
        <div className="card-scroll-container">
            <h4>Stock Top Gain</h4>
            <button onClick={handleClick}>more</button>
            <div className="card-scroll">
                {gain.map((item) => {
                    return (
                        <div key={item.company.bseScriptCode} className="card" onClick={() => handleTopgain(item)}>
                            <div className="card-content">
                                <img src={item.company.imageUrl} alt={item.company.companyName} className="card-image" />
                                <div className="text-content">
                                    <h4 className="company-name">{item.company.companyName}</h4>
                                    <p className="close-price">Price: {item.stats.close}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )

}

export default StockTopGain