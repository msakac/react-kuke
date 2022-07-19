import { useState } from 'react';

function App() {

  const [state, setState] = useState({count: 4, theme: 'blue'})
  const color = state.theme;
  const number = state.count

  // const [count,setCount] = useState(()=>{
  //   //rendera se samo prvi put kad se rendera komponenta
  //   //v kuke uvijek passati funkciju, arrow funkciju
  //   console.log("Run function")
  //   return 4;
  // })

  function decrementCount(){
    setState(prevState => {
      //treba spreadati celi prethodni objekt jer overrida vrednosti koje sam ne postavil
      return {...prevState, count:prevState.count-1}
    })

    //ovaj nacin ne valja jer se poziva vrijednost koja je kreirana kad je renderirana komponenta
    // setCount(count - 1) 
    // setCount(count - 1)
  }

  function incrementCount(){
    setState(prevState =>{
      return {...prevState, count: prevState.count + 1}
    })
  }

  return <>
    <button onClick={decrementCount}>-</button>
    <span>{number}</span>
    <button onClick={incrementCount}>+</button>
    <span>{color}</span>
  </>
}