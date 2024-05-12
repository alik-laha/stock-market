import { useContext } from "react";
import Context from "../../src/Context/Context.ts";

const StockTopGain = () => {
    const { gain } = useContext(Context)


    const handleClick = () => {
        console.log('more')
    }
    return (
        <div className="card-scroll-container">
            <h4>Stock Top Gain</h4>
            <button onClick={handleClick}>more</button>
            <div className="card-scroll">
                {gain.map((item) => {
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
                })}
            </div>
        </div>
    )

}

export default StockTopGain