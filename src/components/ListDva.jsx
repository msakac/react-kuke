import React, {useMemo, useDeferredValue}  from 'react'
import { useEffect } from 'react';

function ListDva({input}) {
    const LIST_SIZE = 20000;
    const defferedInput = useDeferredValue(input)
    useEffect(()=>{
        console.log(`Input: ${input}\nDeffered: ${defferedInput}`)
    }, [defferedInput, input])
    const list = useMemo(()=>{
        const l = []
        for (let index = 0; index < LIST_SIZE; index++) {
            l.push(<div key={index}>{defferedInput}</div>)
        }
        return l;
    }, [defferedInput])
  return list
}

export default ListDva
