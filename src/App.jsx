import React from 'react'
import ArrayComponent from './components/ArrayComponent'
import AsyncComponent from './components/AsyncComponent'
import DebounceComponent from './components/DebounceComponent'
import EventListenerComponent from './components/EventListenerComponent'
import FetchComponent from './components/FetchComponent'
import GeoLocationComponent from './components/GeoLocationComponent'
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
import StateValidationComponent from './components/StateValidationComponent'
import UseEffectOnceComponent from './components/UseEffectOnceComponent'
import ClickOutsideComponent from './components/ClickOutsideComponent'

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
    <GeoLocationComponent/>
    <StateValidationComponent/>
    <UseEffectOnceComponent/>
    <ClickOutsideComponent/>
    </>
}
