import './floatingSearchBar.css';
import {useContext, useEffect, useState} from "react";
import Context from "../../src/Context/Context.ts";
import {searchData} from "../../Type/GlobalType.ts"; // Import CSS file for styling
import axios from 'axios';

const FloatingWindow = () => {
    const [view,setView]=useState("none")
    const [data,setData]=useState<searchData[]>([])
    const {searchData}=useContext(Context)
    const {setIndevidual}=useContext(Context)
    useEffect(() => {
        if(searchData.length>0){
            setView("block")
            setData(searchData)
            console.log(searchData)
        }
        else {
            setView("none")
        }
    }, [searchData]);
    const handleClick=(data:searchData)=>{
        const title=data.search_id
        axios.get(`/api/detail/${title}`)
        .then((res)=>{
        
            setIndevidual(res.data.data)
        })
    }
    return (
        <div className={`floating-window float-on`} style={{display:view}} >
            <div className="content">
                {
                    data.map((res:searchData,index:number)=>{
                        return (
                            <div key={index} className="searched-element" onClick={()=>handleClick(res)}>
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