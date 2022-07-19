import React, {useState} from 'react'
import Toogle from './components/Toogle'
import useLocalStorage from './hooks/useLocalStorage'
import useUpdateLogger from './hooks/useUpdateLogger'

export default function App() {
  return <>
    <Toogle/>
    </>
}
