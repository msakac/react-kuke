import React from 'react'
import useStorage, {STORAGE} from '../hooks/useStorage'



export default function StorageComponent() {
    const [name, setName, removeName] = useStorage("name", "Blabla", sessionStorage)
    const [age, setAge, removeAge] = useStorage("age", 21, localStorage)
  return (
    <div>
        <h3>useStorage Hook</h3>
        <div>
            {name} - {age}
        </div>
        <button onClick={()=>setName("John")}>Set Name</button>
        <button onClick={()=>setAge(54)}>Set Age</button>
        <button onClick={removeName}>Remove Name</button>
        <button onClick={removeAge}>Remove Age</button>
    </div>
    )
}
