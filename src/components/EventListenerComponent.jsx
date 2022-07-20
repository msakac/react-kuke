import React from 'react'
import { useState } from 'react'
import useEventListener from '../hooks/useEventListener'

export default function EventListenerComponent() {
  const [key, setKey] = useState('')
  useEventListener("keydown", e => {
    setKey(e.key)
  })
  return (
    <div>
      <h2>useEventListener Hook</h2>
      <div>Last key: {key}</div>
    </div>
  )
}
