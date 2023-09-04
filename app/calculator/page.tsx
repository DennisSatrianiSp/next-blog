"use client"
import React, {useState} from 'react'

export default function Calculator() {
    const [angka1,setAngka1] = useState(0)
    const [angka2,setAngka2] = useState(0)
    const [hasil,setHasil] = useState(0)
  return (
    <div>
      <form action="">
        <input type="number" placeholder='Masukan Angka pertama ' onChange={(e)=>setAngka1(Number(e.target.value))} /> <br />
        <input type="number" placeholder='Masukan Angka kedua ' onChange={(e)=>setAngka2(Number(e.target.value))} /><br />
        <button type='button' onClick={()=>setHasil(angka1 + angka2)}>Hitung</button>
        <p>Hasil : {hasil}</p>
      </form>
    </div>
  )
}
