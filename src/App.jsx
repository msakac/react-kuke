import React from 'react'
import ArrayComponent from './components/ArrayComponent'
import AsyncComponent from './components/AsyncComponent'
import DebounceComponent from './components/DebounceComponent'
import EventListenerComponent from './components/EventListenerComponent'
import FetchComponent from './components/FetchComponent'
import MediaQueryComponent from './components/MediaQueryComponent'
import OnScreenComponent from './components/OnScreenComponent'
import PreviousComponent from './components/PreviousComponent'
import ScriptComponent from './components/ScriptComponent'
import StateWithHistory from './components/StateWithHistory'
import StorageComponent from './components/StorageComponent'
import Timeout from './components/Timeout'
import Toogle from './components/Toogle'
import UpdateComponent from './components/UpdateComponent'
import WindowSizeComponent from './components/WindowSizeComponent'

export default function App() {
  return <>
    <Toogle/>
    <Timeout/>
    <DebounceComponent/>
    <UpdateComponent/>
    <ArrayComponent/>
    <PreviousComponent/>
    <StateWithHistory/>
    <StorageComponent/>
    <AsyncComponent/>
    <FetchComponent/>
    <ScriptComponent/>
    <EventListenerComponent/>
    <OnScreenComponent/> 
    <WindowSizeComponent/>
    <MediaQueryComponent/>
    </>
}
