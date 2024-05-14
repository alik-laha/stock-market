import Context from "./Context.ts";
import { ReactNode, useState } from "react";
import { newsData, searchData } from "../../Type/GlobalType.ts";

interface ContextProviderProps {
    children: ReactNode;
}
const ContextProvider = ({ children }: ContextProviderProps) => {
    const [searchData, setSearchData] = useState<searchData[]>([])
    const [individual, setIndevidual] = useState({})
    const [news, setNews] = useState<newsData[]>([])
    const [gain, setGain] = useState<newsData[]>([])
    const [loser, setLoser] = useState<newsData[]>([])
    const [time, setTime] = useState<string>("1y")
    const [candleData, setCandleData] = useState<[][]>([])
    const [individualData, setIndividualData] = useState<newsData>({
        company: {
            bseScriptCode: "",
            companyShortName: "",
            companyName: "",
            imageUrl: "",
            nseScriptCode: "",
            isin: "",
            searchId: "",
            growwContractId: "",

        }, stats: {
            close: 0,
            dayChange: 0,
            dayChangePerc: 0,
            high: 0,
            highPriceRange: 0,
            low: 0,
            lowPriceRange: 0,
            ltp: 0,
            type: "",
        }
    })
    const [linearChartData, setLinearChartData] = useState<[][]>([])

    return (
        <Context.Provider value={{
            searchData, setSearchData, individual, setIndevidual, setNews, news, setGain, gain, loser, setLoser, time,
            setTime, candleData, setCandleData, individualData, setIndividualData, linearChartData, setLinearChartData
        }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider