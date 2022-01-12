import React, { useEffect, useState } from 'react'

function useFetch(url) {
    
 const [data,setData] = useState(null)
 const [error,setError] = useState(null)
const  [ispending, setIsPending] = useState(true)

useEffect(() => {
    fetch(url)
    .then(res => {
      if(!res.ok){
        throw Error("coculd not fetch data for that resource")
      }
     return res.json()
    })
    .then(data => {
      setData(data)
      setIsPending(false)
      setError(null) 
    })
    .catch((err) => {
      setIsPending(false)
      setError(err.message)
    })
},[url])
return {data ,error,ispending }
}

export default useFetch
