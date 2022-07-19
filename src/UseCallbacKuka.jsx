import React, {useState, useCallback} from 'react'
import List from './components/List'

export default function App() {
const [num, setNumber] = useState(1)
const [dark, setDark] = useState(false)

const getItems = useCallback((increment) =>{
    return [num + increment, num + 1 + increment, num + 2 + increment]
}, [num])

const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333'
}

  return (
    <div style={theme}>
        <input type="number" value={num} onChange={e=>setNumber(parseInt(e.target.value))} />
        <button onClick={()=> setDark(prevDark => !prevDark)}>Toggle theme</button>
        <List getItems={getItems}/>
    </div>
  )
}
