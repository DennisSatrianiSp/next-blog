import React from 'react';
import Link from 'next/link'

export default function Setting() {
  return (
    <div>
      <p>Ini page setting</p>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/dashboard'}>Dashboard</Link></li>
       
      </ul>
    </div>
  )
}
