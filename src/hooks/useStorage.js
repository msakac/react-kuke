import React, {useState, useCallback, useEffect,} from 'react';

export default function useStorage(key, defaultValue, storageObject = localStorage){

    const [value, setValue] = useState(()=>{
        const jsonValue = storageObject.getItem(key)
        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof initialValue === "function"){
            return defaultValue()
        }else{
            return defaultValue
        }
    })

    useEffect(()=>{
        if(value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [key, value,storageObject])

    const remove = useCallback(()=>{
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}