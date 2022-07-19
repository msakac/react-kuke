import React, { useState } from 'react'
import usePrevious from '../hooks/usePrevious'

export default function PreviousComponent() {
    const [name, setName] = useState('Mimi')
    const [count, setCount] = useState(0)
    const previousCount = usePrevious(count)
  return (
    <div>
        <h3>usePrevious Hook</h3>
        <div>{count} - {previousCount}</div>
        <div>{name}</div>
        <button onClick={()=> setName('Blabla')}>Set name</button>
        <button onClick={()=>setCount(value => value + 1)}>Increment</button>
    </div>
  )
}
