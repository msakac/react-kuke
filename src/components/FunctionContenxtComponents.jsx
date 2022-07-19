import React from 'react'
import { useContext } from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext';
export default function FunctionContextComponent(){
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#333' : '#CCC',
        padding: '2rem',
        margin: '2rem'
    }

    return <>
        <button onClick={toggleTheme}>Toogle Theme</button>
        <div style={themeStyles}>Function Theme</div>
        </>
}