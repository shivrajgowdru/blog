import { useEffect, useState } from 'react'

function useFetch(url) {
    
 const [data,setData] = useState(null)
 const [error,setError] = useState(null)
const  [ispending, setIsPending] = useState(true)

useEffect(() => {

const abortCon = new AbortController();//this is a javascript abort control function

    fetch(url,{signal:abortCon.signal})
    .then(res => {
      if(!res.ok){
        throw Error("could not fetch data for that resource")
      }
     return res.json()
    })
    .then(data => {
      setData(data)
      setIsPending(false)
      setError(null) 
    })
    .catch((err) => {
      if(err.name === 'AbortError'){
        console.log('fetch aborted')
      }else
      setIsPending(false)
      setError(err.message)
    })

 return () => abortCon.abort();//this ensure to stop fetch if the home component is unmounted


},[url])
return {data ,error,ispending }
}

export default useFetch
