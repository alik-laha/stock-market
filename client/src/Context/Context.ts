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
    loser: []
});

export default Context;