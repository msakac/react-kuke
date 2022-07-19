import React from 'react'
import useArray from '../hooks/useArray'

export default function ArrayComponent() {
    const { array, set, push, remove, filter, update, clear } = useArray([1, 2, 3, 4, 5, 6, 7])
    return (
        <div>
            <h3>useArray Hook</h3>
            <div>{array.join(", ")}</div>
            <button onClick={() => push(8)}>Add 8</button>
            <button onClick={() => update(1,9)}>Change index 1 to 9</button>
            <button onClick={() => remove(1)}>Remove element at index 1</button>
            <button onClick={() => filter(n => n < 4)}>Less than 4</button>
            <button onClick={() => set([1,2,3,4,5])}>Set 1...5</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}
