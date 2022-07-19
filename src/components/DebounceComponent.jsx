import React, {useState} from 'react'
import useDebounce from '../hooks/useDebounce'

export default function DebounceComponent() {
    const [count, setCount] = useState(10)
    useDebounce(()=> alert(count), 1000, [count])
  return (
    <div>
        <h3>useDebounce Hook</h3>
        <div>{count}</div>
        <button onClick={()=> setCount(c => c + 1)}>Increment</button>
    </div>
  )
}
