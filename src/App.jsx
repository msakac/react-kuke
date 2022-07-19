import React, {useState} from 'react'
import ArrayComponent from './components/ArrayComponent'
import DebounceComponent from './components/DebounceComponent'
import PreviousComponent from './components/PreviousComponent'
import StateWithHistory from './components/StateWithHistory'
import Timeout from './components/Timeout'
import Toogle from './components/Toogle'
import UpdateComponent from './components/UpdateComponent'
import useLocalStorage from './hooks/useLocalStorage'
import useUpdateLogger from './hooks/useUpdateLogger'

export default function App() {
  return <>
    <Toogle/>
    <Timeout/>
    <DebounceComponent/>
    <UpdateComponent/>
    <ArrayComponent/>
    <PreviousComponent/>
    <StateWithHistory/>
    </>
}
