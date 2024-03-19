import Context from "./Context.ts";
import {ReactNode, useState} from "react";

interface ContextProviderProps {
    children: ReactNode;
}
const ContextProvider=({children}:ContextProviderProps)=>{
    const [searchData,setSearchData]=useState(null)
    return(
    <Context.Provider value={{searchData,setSearchData}}>
        {children}
    </Context.Provider>
    )
}
export default ContextProvider