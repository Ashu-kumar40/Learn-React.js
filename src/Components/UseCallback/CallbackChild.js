import React, { memo } from 'react'

function CallbackChild({someData}) {
  return (
    <>
        <h2>This is a child component.</h2>
        {console.log("This is child component.")}
    </>
  )
}

export default memo(CallbackChild);