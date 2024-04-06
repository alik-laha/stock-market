import './Navbar.css';
import { CgProfile } from "react-icons/cg";
import {NavLink} from "react-router-dom"
import {ChangeEvent} from "react";
import axios from  'axios'
import {useContext} from "react";
import Context from "../../src/Context/Context.ts";

function Navbar() {
    const {setSearchData}=useContext(Context)
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        if(e.target.value.length>0) {
            axios.post("/api/search", {searchData: e.target.value}, {headers: {"Auth": localStorage.getItem("Token")}})
                .then((res) => {
                    if(res.data.data.content.length >0) {
                        setSearchData(res.data.data.content)
                    }
                    else if(res.data.data.content.length<=0){
                        setSearchData([])
                    }
                    // console.log(res.data.data.content)
                })
                .catch((err) => {
                    console.log(err)
                })
        }else if(e.target.value.length<=0){
            setSearchData([])
        }
    }

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* Logo or Brand Name */}
                <a href="/client/public">My Stock</a>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    {/* Links or other navbar items */}
                    <NavLink to="/" className="navbar-item" >Home</NavLink>
                    <NavLink to="/about" className="navbar-item">About</NavLink>
                </div>
                <div className="navbar-end">
                    {/* Profile Search Bar */}
                    <div className="navbar-item">
                        <input type="text" placeholder="Search" onChange={handleChange} />
                    </div>
                    <div  className="navLogoBar">
                        <NavLink to="/profile" className="navbar-item navLogo"><CgProfile /></NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;