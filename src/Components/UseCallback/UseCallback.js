import React, { useCallback, useState } from 'react'
import CallbackChild from './CallbackChild'

export default function UseCallback() {
  const [count, setCount] = useState(0);

  // const someData =()=>{
  //   //some operation
  // }
  
  const someData = useCallback(() => {
    //some operation
  }, []) // we can use dependencies for which the component get rerender.
  return (
    <>
        <CallbackChild someData={someData}/>
        <div>
          <p>
            useCallback hook is used to enhance the performance. We can understand it by an example. Each time the value of count changes, the child component rerenders even if there is no direct relation between them. If there are so many changes occure at the same time the components rerender every time which affact the performance of the website.
          </p>
          <p>
            So, to prevent this problem we can use useMemo hook in child component you can see the code.
          </p>
          <p>
            But, when we pass any function as a prop inside the child component then it again start rerendering the components. This problem can be solve by <i><b>useCallback( )</b></i> hook.
          </p>
        </div>
        <h2>Count: {count}</h2>
        <button onClick={() => setCount(count+1)}>Increment</button>
    </>
  )
}
