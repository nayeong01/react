import React from "react";
import AuthContext from "./AuthContext";

function MyComponent(){

    const authContext = React.useContext(AuthContext);
    const buttonPressed = ()=>{
        alert('Button pressed');
    }

    return (
        <div>
            Welcome {authContext}
            <p></p>
            <button onClick={buttonPressed}>Press Me</button>
        </div>
    );
}

export default MyComponent;