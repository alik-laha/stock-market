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
    individualData: newsData;
    setIndividualData: (data: newsData) => void;
    linearChartData: Array<[]>;
    setLinearChartData: (data: Array<[]>) => void;
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
    individualData: {
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
    },
    setIndividualData: () => { },
    linearChartData: [],
    setLinearChartData: () => { }
});

export default Context;