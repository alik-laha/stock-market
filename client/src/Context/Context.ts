import { createContext } from 'react';
import { newsData, searchData } from "../../Type/GlobalType.ts";

interface ContextType {
    setSearchData: (data: Array<searchData>) => void;
    searchData: Array<searchData>
    setIndevidual: (data: object) => void
    individual: object
    setNews: (data: Array<newsData>) => void
    news: Array<newsData>
    setGain: (data: Array<newsData>) => void
    gain: Array<newsData>
    setLoser: (data: Array<newsData>) => void
    loser: Array<newsData>
    gap: string
    setGap: (data: string) => void
    time: string
    setTime: (data: string) => void
}

const Context = createContext<ContextType>({
    setSearchData: () => { }, // Initial value for setSearchData
    searchData: [],
    setIndevidual: () => { },
    individual: {},
    setNews: () => { },
    news: [],
    setGain: () => { },
    gain: [],
    setLoser: () => { },
    loser: [],
    gap: "1d",
    setGap: () => { },
    time: "1m",
    setTime: () => { },
});

export default Context;