import Context from "./Context.ts";
import {ReactNode, useEffect, useState} from "react";
import {searchData} from "../../Type/GlobalType.ts";

interface ContextProviderProps {
    children: ReactNode;
}
const ContextProvider=({children}:ContextProviderProps)=>{
    const [searchData,setSearchData]=useState<searchData[]>([])
    useEffect(() => {
        console.log(searchData)
    }, [searchData]);
    return(
    <Context.Provider value={{searchData,setSearchData}}>
        {children}
    </Context.Provider>
    )
}
export default ContextProvider