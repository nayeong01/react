import React,{useState, useEffect} from "react";

function Counter(){
    const[count, setCount] = useState(0);
    useEffect(()=>{ // 사용될 때마다 돌아가는건가...?
        console.log('Hello from useEffect')
    });
    return (
        <div>
            <p>Counter = {count} </p>
            <button onClick={()=>setCount(count+1)}>
                Increment
            </button>
        </div>
    );
}

export default Counter;