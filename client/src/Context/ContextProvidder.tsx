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
    const [gap, setGap] = useState<string>("1d")
    const [time, setTime] = useState<string>("1m")
    return (
        <Context.Provider value={{ searchData, setSearchData, individual, setIndevidual, setNews, news, setGain, gain, loser, setLoser, gap, setGap, time, setTime }}>
            {children}
        </Context.Provider>
    )
}
export default ContextProvider