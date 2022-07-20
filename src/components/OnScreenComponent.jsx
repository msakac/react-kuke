import React, { useRef } from 'react'
import useOnScreen from '../hooks/useOnScreen'

export default function OnScreenComponent() {
    const headerTwoRef = useRef()
    const visible = useOnScreen(headerTwoRef, "-100px")
  return (
    <div>
        <h3>useOnScreen Hook</h3>
        <div>Blblalblalblablal</div>
        <h3 ref={headerTwoRef}>Ovo je header dva {visible && "(Visible)"}</h3>
        <div>
            blablablablablablalblalblbl
            blalbladla
            bladlagvslfl
        </div>
    </div>
  )
}
