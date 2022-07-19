import React from 'react'
import useStateWithHistroy from '../hooks/useStateWithHistory'

export default function StateWithHistory() {
    const [count, setCount, { history, pointer, back, forward, go }] = useStateWithHistroy(1)
    return (
        <div>
            <h3>useStateWithHistory Hook</h3>
            <div>{count}</div>
            <div>{history.join(', ')}</div>
            <div>Pointer - {pointer}</div>
            <button onClick={() => setCount(currentCount => currentCount * 2)}>Double</button>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>Increment</button>
            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>
            <button onClick={()=> go(2)}>Go</button>
        </div>
    )
}
