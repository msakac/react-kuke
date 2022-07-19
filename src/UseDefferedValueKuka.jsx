import React, {useState} from 'react'
import ListDva from './components/ListDva'

export default function App() {
  const [input, setInput] = useState('')

  function handleChange(e){
    setInput(e.target.value)
  }
  return (
    <>
    <input type="text" value={input} onChange={handleChange} />
    <ListDva input={input}/>
    </>
  )
}
