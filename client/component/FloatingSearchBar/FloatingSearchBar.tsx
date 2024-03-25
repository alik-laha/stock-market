import './floatingSearchBar.css';
import {useContext, useEffect, useState} from "react";
import Context from "../../src/Context/Context.ts";
import {searchData} from "../../Type/GlobalType.ts"; // Import CSS file for styling

const FloatingWindow = () => {
    const [view,setView]=useState("none")
    const [data,setData]=useState<searchData[]>([])
    const {searchData}=useContext(Context)
    useEffect(() => {
        if(searchData.length>0){
            setView("block")
            setData(searchData)
        }
        else {
            setView("none")
        }
    }, [searchData]);

    return (
        <div className={`floating-window float-on`} style={{display:view}} >
            <div className="content">
                {
                    data.map((res:searchData,index:number)=>{
                        return (
                            <div key={index} className="searched-element">
                                <p>
                                    {res.title}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default FloatingWindow;