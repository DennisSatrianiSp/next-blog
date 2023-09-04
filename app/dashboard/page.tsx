"use client";
import React from 'react'
import Section from './sectionProfile';
import Link from 'next/link';

import { useRouter } from 'next/navigation';


export default function Dashboard() {

    const router = useRouter();

    const turnOn= (url:string) =>{
        router.push(url)
    }

  return (
    <div className='px-3'>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/dashboard'}>Dashboard</Link></li>
        <li onClick={()=>turnOn('/settings')}>Settings</li>
      </ul>
     <Section/>
    </div>
  )
}
