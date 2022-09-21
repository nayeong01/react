import React, {useState, useRef} from 'react';
import './App.css';
import AuthContext from './AuthContext';
import MyComponent from './MyComponent';

function App(){
    const[count, setCount] = useState(0);
    const[count2, setCount2] = useState(0);
    const inputRef = useRef(null);
    const userName = 'NaYeong';

    const Increment = () =>{
        setCount(count+1);
        setCount2(count2+1);
    } 

    return (
        <div>
            <p>Counters:{count} {count2}</p>
            <button onClick={Increment}>Increment</button>
            <p></p>
            <input ref={inputRef}/>
            <button onClick={()=>inputRef.current.focus()}>
                Focus input
            </button>
            <p></p>
            <AuthContext.Provider value={userName}>
                <MyComponent/>
            </AuthContext.Provider>
        </div>
    );
};

export default App;