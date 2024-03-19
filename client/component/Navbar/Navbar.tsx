import './Navbar.css';
import { CgProfile } from "react-icons/cg";
import {NavLink} from "react-router-dom"
import {ChangeEvent} from "react";
import axios from  'axios'

function Navbar() {

    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
       axios.post("http://localhost:3000/api",{searchData:e.target.value})
           .then((data)=>{
               console.log(data)
           })
           .catch((err)=>{
               console.log(err)
           })
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