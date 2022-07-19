import { useState } from 'react';

export default function useToogle(defaultValue){
    const [value, setValue] = useState(defaultValue);

    function toogleValue(value){
        setValue(currentValue => typeof value === "boolean" ? value : !currentValue)
    }

    return[value, toogleValue];
}
