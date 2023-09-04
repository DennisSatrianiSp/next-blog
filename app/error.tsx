"use client"
import React, { useEffect } from 'react'

export default function Error({error,reset}:{error:Error,reset:()=>void}) {
    useEffect(()=>{
        console.error(error);
    },[error]);
  return (
    <div>
      <p>APLIKASI ERROR.....</p>
      <button onClick={()=>reset()}>Reset</button>
    </div>
  )
}
