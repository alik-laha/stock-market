import { createContext } from 'react';
import { newsData, searchData } from "../../Type/GlobalType.ts";

interface ContextType {
    setSearchData: (data: Array<searchData>) => void;
    searchData: Array<searchData>;
    setIndevidual: (data: object) => void;
    individual: object;
    setNews: (data: Array<newsData>) => void;
    news: Array<newsData>;
    setGain: (data: Array<newsData>) => void;
    gain: Array<newsData>;
    setLoser: (data: Array<newsData>) => void;
    loser: Array<newsData>;
    time: string;
    setTime: (data: string) => void;
    candleData: Array<[]>;
    setCandleData: (data: Array<[]>) => void;
    individualData: object;
    setIndividualData: (data: object) => void;
}

const Context = createContext<ContextType>({
    setSearchData: () => { },
    searchData: [],
    setIndevidual: () => { },
    individual: {},
    setNews: () => { },
    news: [],
    setGain: () => { },
    gain: [],
    setLoser: () => { },
    loser: [],
    time: "daily",
    setTime: () => { },
    candleData: [],
    setCandleData: () => { },
    individualData: {}, // Provide an initial value, it can be an empty object {}
    setIndividualData: () => { }
});

export default Context;