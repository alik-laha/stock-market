import { createContext } from 'react';
import {searchData} from "../../Type/GlobalType.ts";

interface ContextType {
    setSearchData: (data: Array<searchData>) => void;
    searchData:Array<searchData>
    setIndevidual:(data:object)=>void
    individual:object
}

const Context = createContext<ContextType>({
    setSearchData: () => {}, // Initial value for setSearchData
    searchData:[],
    setIndevidual:()=>{},
    individual:{}
});

export default Context;