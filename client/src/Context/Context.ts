import { createContext } from 'react';
import {searchData} from "../../Type/GlobalType.ts";

interface ContextType {
    setSearchData: (data: Array<searchData>) => void;
    searchData:Array<searchData>
}

const Context = createContext<ContextType>({
    setSearchData: ([]) => {}, // Initial value for setSearchData
    searchData:[]
});

export default Context;