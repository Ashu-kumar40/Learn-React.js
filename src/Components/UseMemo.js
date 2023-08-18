import React, { useMemo, useState } from 'react'

export default function UseMemo() {

    const [count, setCount] = useState(0);

    const squareCount = useMemo(() => {
        return count * count;
    }, [count])

    return (
        <>
            <h1>useMemo( ) hook theory</h1>
            <p>
                Imagine you have a toy box with different toys inside. Every time you want to play with a toy, you need to take it out of the box. But sometimes, taking out the toys from the box can take a bit of time.
            </p>
            <p>
                Now, let's relate this to a computer program, like a game on your tablet. In the game, there are things the computer needs to figure out or calculate, just like you figuring out which toy to play with next.
            </p>
            <p>
                Here's where the useMemo() hook comes in! It's like a super cool trick for the computer to remember the answers it already found, so it doesn't have to calculate them over and over again.
            </p>
            <p>
                So, let's say your game has a counter. Every time you tap a button, the counter goes up. You want to show the square of that number on the screen. Instead of doing the math every time, you can use useMemo() to tell the computer: "Hey, if the number hasn't changed, you can just remember the squared number from before!"
            </p>

            <div>
                <h2>Count: {count}</h2>
                <h2>Squared Count: {squareCount}</h2>
                <button onClick={() => {
                    setCount(count + 1);
                }}>Increment</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </div>

            <p>
                With useMemo(), the computer only calculates the squared number when the original number changes. It's like telling the computer, "Hey, if the number didn't change, you don't need to recalculate the square, just use the one you remembered!"
            </p>
            <p> 
                And that's how useMemo() helps the computer be smart and efficient, just like you when you remember where your favorite toys are without digging through the whole toy box every time!
            </p>
        </>
    )
}