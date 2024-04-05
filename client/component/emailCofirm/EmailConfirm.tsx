import {useState} from "react";
import axios from "axios";

const EmailConfirm=()=>{
    const [fireworkVisible, setFireworkVisible] = useState(false);

    const handleClick =  () => {
        const id = localStorage.getItem("id")
        const verify= localStorage.getItem("verify")
        axios.post("http://localhost:3000/api/verify/user",{id,verify})
            .then((data)=>{
                console.log(data)
            })
            .catch(err=>{
                console.log(err)
            })
        setFireworkVisible(true);

        setTimeout(() => {
            setFireworkVisible(false);
        }, 2000);

    };
    return(
       <div className="Confirm_Email">
           <h1>
               Confirm Your Email
           </h1>
           <button className="Confirm_Email_Button" onClick={handleClick}>Confirm Your Email</button>
           {fireworkVisible && <div className="firework"></div>}
       </div>
    )
}

export default EmailConfirm