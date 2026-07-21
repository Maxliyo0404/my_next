import Link from 'next/link'
import React from 'react'
export default function Header() {
  return (
    <header>
        <div className="container  flex items-center justify-between bg-blue-950 px-5 py-4">
            <a href="#" className='text-white text-3xl'>Logo</a>
            <ul className='flex items-center gap-4 text-2xl text-white'>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/services">Services</Link></li>
            </ul>
        </div>
    </header>
  )
}
