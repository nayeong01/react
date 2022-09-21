import React,{useState} from 'react';

function MyList(){
    const data = [1,2,3,4,5];
    const [text, setText] = useState("");

    const inputChanged = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event)=>{
        alert(`You typed: ${text}`);
        event.preventDefault();
    }

    return (
        <div>
            <ul>
                {
                    data.map((number, index)=>
                    <li key={index}>List item {number}</li>)
                }
            </ul>
            <p></p>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={inputChanged}
                value={text}/>
                <input type="submit" value="Press me"/>
            </form>
        </div>
    );
};

export default MyList;