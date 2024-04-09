// import {useEffect,useState} from "react";
// import axios from "axios";
import {useContext} from "react";
import Context from "../../src/Context/Context.ts";



const Home=()=>{
    const {individual}=useContext(Context)
    // const[page,setPage]=useState(0)
    // const [size,setSize]=useState(5)
    // const [type,setType] =useState("")
    console.log(individual)
    // useEffect(() => {
    //     axios.post("http://localhost:3000/api",{page,size,type})
    //         .then((data)=>{
    //             console.log(data)
    //         }).catch((err)=>{
    //             console.log(err)
    //     })
    // }, []);
    return(
        <>

            <h1>Home</h1>
        </>
    )
}
export default Home