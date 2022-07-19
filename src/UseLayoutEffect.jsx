import { useState,useEffect, useLayoutEffect } from "react"
//uselayouteffect slicni jako useeffect, useeffect je asinkroni
//useLayoutEffect nije asinkroni i ne mi treba v zivotu
export default function App() {
    const [count, setCount] = useState(0)

    useLayoutEffect(()=>{
        console.log(count)
    }, [count])

  return (
    <>
    <button onClick={() => setCount(c => c + 1)}>Increment</button>
    <div>{count}</div>
    </>
  )
}
