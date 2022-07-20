import { useState } from "react"
import useEffectOnce from "../hooks/useEffectOnce"

export default function EffectOnceComponent() {
  const [count, setCount] = useState(0)

  useEffectOnce(() => alert("UseEffectOne Hook"))

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
    </>
  )
}