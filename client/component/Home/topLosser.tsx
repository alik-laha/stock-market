import { useContext } from "react";
import Context from "../../src/Context/Context.ts";

const StockTopLooser = () => {
    const { loser } = useContext(Context)
    return (
        <div>
            <h4>Stock Top Loser</h4>
            <div style={{ display: "flex" }}>
                {loser.map((item) => {
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

export default StockTopLooser