"use client"
import React, { useState } from 'react'
import SectionResult from './[slug]/sectionResult';

export default function Cari() {

    const [query,setQuery] = useState('')

    const onSearch=(e:any)=>{
        e.preventDefault();
        const inputQuery = e.target[0].value
        setQuery(inputQuery);
    }
  return (
    <div>
      <form action="" onSubmit={onSearch}>
        <input type="text" className='text-black mt-10 ml-3' placeholder='Cari User Github' /><br />
        <button className='bg-white rounded-md px-4 ml-3 py-3 mt-2 text-black'>Cari</button>
      </form>
      <p>{'Mencari :'+query}</p>
      {query && <SectionResult query={query}/>}
    </div>
  )
}
