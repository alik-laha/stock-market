import { useContext } from "react";
import Context from "../../src/Context/Context.ts";

const StockOnNews = () => {
    const { news } = useContext(Context)
    return (
        <div>
            <h4>Stock On News</h4>
            <div style={{ display: "flex" }}>
                {news.map((item) => {
                    return (
                        <div key={item.company.bseScriptCode}>
                            <img src={item.company.imageUrl} alt="" />
                            <h4>{item.company.companyName}</h4>
                            <p>{item.stats.close}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default StockOnNews