import {useState} from "react";

const EmailConfirm=()=>{
    const [fireworkVisible, setFireworkVisible] = useState(false);

    const handleClick = () => {
        //fire work
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