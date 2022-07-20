import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

export default function MediaQueryComponent() {
    const isLarge = useMediaQuery('(min-width: 500px)')

    return (
        <div>
            <h3>useMediaQuery Hook</h3>
            <div>Large: {isLarge.toString()}</div>
        </div>
    )
}
