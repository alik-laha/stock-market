import { useContext } from "react";
import Context from "../../src/Context/Context.ts";

const StockTopGain = () => {
    const { gain } = useContext(Context)
    return (
        <div>
            <h4>Stock Top Gain</h4>
            <div style={{ display: "flex" }}>
                {gain.map((item) => {
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

export default StockTopGain