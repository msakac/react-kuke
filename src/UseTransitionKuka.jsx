import React, { useState, useTransition } from 'react'

export default function App() {

    const [isPending, startTransition] = useTransition()
    const [input, setInput] = useState("")
    const [list, setList] = useState([])

    const LIST_SIZE = 20000

    function handleChange(e) {
        setInput(e.target.value)
        startTransition(()=>{
            const l = []
            for (let index = 0; index < LIST_SIZE; index++) {
                l.push(e.target.value)
            }
            setList(l);
        })
    }
    return (
        <>
            <input type="text" value={input} onChange={handleChange} />
            {isPending ? 'Loading...' : list.map((item, index) => {
                return <div key={index}>{item}</div>
            })}
        </>
    )
}
