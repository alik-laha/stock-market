import { useContext } from "react";
import Context from "../../src/Context/Context.ts";

const StockOnNews = () => {
    const { news } = useContext(Context)
    return (
        <div className="card-scroll-container">
            <h4>Stock On News</h4>
            <button>more</button>
            <div className="card-scroll">
                {news.map((item) => {
                    return (
                        <div key={item.company.bseScriptCode} className="card">
                            <div className="card-content">
                                <img src={item.company.imageUrl} alt={item.company.companyName} className="card-image" />
                                <div className="text-content">
                                    <h4 className="company-name">{item.company.companyName}</h4>
                                    <p className="close-price">Close: {item.stats.close}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )

}

export default StockOnNews