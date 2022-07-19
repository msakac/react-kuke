import React from 'react'
import useAsync from '../hooks/useAsync'

export default function AsyncComponent() {
    const {loading, error, value } = useAsync(()=>{
        return new Promise((resolve, reject) =>{
            const success = true
            setTimeout(()=>{
                success ? resolve("Hi") : reject('Error')
            }, 1000)
        })
    })
  return (
    <div>
        <h3>useAsync Hook</h3>
        <div>Loading: {loading.toString()}</div>
        <div>{error}</div>
        <div>{value}</div>
    </div>
  )
}
