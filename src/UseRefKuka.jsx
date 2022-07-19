import React, { useState, useEffect, useRef } from 'react'

//useRef ne izaziv rerender kad se promijeni -> perzistenta je

export default function App(){
    const [name, setName] = useState('')

    const renderCount = useRef(1)
    const inputRef = useRef()
    const prevName = useRef('')

    function focus(){
        console.log(inputRef.current.focus())
    }

    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })

    useEffect(() =>{
        prevName.current = name
    }, [name])

    return (
        <>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <div>halo {name}</div>
        <div>I rendered: {renderCount.current} times</div>
        <div>My name used to be {prevName.current}</div>
        <button onClick={focus}>Focus</button>
        </>
    )
}