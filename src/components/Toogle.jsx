import React from 'react'
import useToogle from '../hooks/useToogle'

export default function Toogle() {
    const [toogle, setToogle] = useToogle(false);
  return (
    <div>
        <h3>useToogle Hook</h3>
        <div>{toogle.toString()}</div>
        {/* <button onClick={() => setToogle(!toogle)}>Change</button> */}
        <button onClick={setToogle}>Change Toogle</button>
        <button onClick={() => setToogle(true)}>Set True</button>
        <button onClick={() => setToogle(false)}>Set False</button>
    </div>
  )
}
