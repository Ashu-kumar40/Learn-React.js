import { useState } from "react";
export default function TernaryConditionalRendering() {
    const [Display, setDisplay] = useState(false);
    const toggleDisplay = () => {
        setDisplay(!Display);
    };
    return (
        <div>
            <h2>This is the most convenient way of rendering the element</h2>
        {Display ? (
            <div>
            <h1>This is a Conditional component tutorial with Display = True</h1>
            <button onClick={toggleDisplay}>Make False</button>
            </div>
        ) : (
            <div>
            <h1>This is a Conditional component tutorial with Display = Fasle</h1>
            <button onClick={toggleDisplay}>Make True</button>
            </div>
        )}
        </div>
    );
}