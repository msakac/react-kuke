import { useEffect } from 'react'
import useMediaQuery from './useMediaQuery'
import useStorage from './useStorage'
export default function useDarkMode(){
    const [darkMode, setDarkMode] = useStorage("useDarkMode")
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme:dark)")
    const enabled = darkMode ?? prefersDarkMode

    useEffect(()=>{
        document.body.classList.toggle("dark-mode", enabled)
    }, [enabled])

    return [enabled, setDarkMode]
}