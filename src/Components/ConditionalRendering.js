import { useState } from "react";
export function ConditionalRendering() {
  const [Display, setDisplay] = useState(false);
  const toggleDisplay = () => {
    setDisplay(!Display);
  };
  let output;

  if (Display) {
    output = <div>
      <h1>This is a Conditional component tutorial with Display = True</h1>
      <button onClick={toggleDisplay}>Make False</button>
    </div>;
  } else {
      output = <div>
        <h1>This is a Conditional component tutorial with Display = Fasle</h1>
        <button onClick={toggleDisplay}>Make True</button>
      </div>
  }
  return <div>{output}</div>;
}
