import Context from "./Context.ts";
import {ReactNode, useState} from "react";
import {searchData} from "../../Type/GlobalType.ts";

interface ContextProviderProps {
    children: ReactNode;
}
const ContextProvider=({children}:ContextProviderProps)=>{
    const [searchData,setSearchData]=useState<searchData[]>([])
    const [individual,setIndevidual]=useState({})
    return(
    <Context.Provider value={{searchData,setSearchData,individual,setIndevidual}}>
        {children}
    </Context.Provider>
    )
}
export default ContextProvider