import { useState } from 'react';

export default function ConditionalComp(){
    const [Display, setDisplay] = useState(false);
    const toggleDisplay = () => {
        setDisplay(!Display);
    }
    if (Display) {
        return (
            <div>
                <h1>This is a Conditional component tutorial with Display = True</h1>
                <button onClick={toggleDisplay}>Make False</button>    
            </div>
        )
    }
    else{
        return (
            <div>
                <h1>This is a Conditional component tutorial with Display = Fasle</h1>
            <button onClick={toggleDisplay}>Make True</button>
            </div> 
        )
    }
}