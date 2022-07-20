import { useRef, useState } from "react"
import useClickOutside from "../hooks/useClickOutside"

export default function ClickOutsideComponent() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()

    useClickOutside(modalRef, () => {
        if (open) setOpen(false)
    })
    return (
        <>
            <h3>useClickOutside Hook</h3>
            <button onClick={() => setOpen(!open)}>Open</button>
            <div ref={modalRef} style={{ height: "120px", width: "120px", backgroundColor: "green", display: open ? 'none' : 'block' }}><span>Modal</span></div>
        </>
    )
}