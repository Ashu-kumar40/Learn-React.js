import React, { useContext } from 'react'
import {MyContext} from './UseContext'

export default function Child4() {

  const incomingData = useContext(MyContext);
  return (
    <h1>
        {incomingData}
    </h1>
  )
}
