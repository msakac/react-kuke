import React from 'react';
import FunctionContextComponent from './components/FunctionContenxtComponents';
import { ThemeProvider } from './components/ThemeContext';

export default function App(){

    return (
        <ThemeProvider>
            <FunctionContextComponent/>
        </ThemeProvider>
    )
}