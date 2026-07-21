import Link from 'next/link'
import React from 'react'
export default function Header() {
  return (
    <div className=''>
        <div className="container  flex items-center justify-between">
            <a href="#">Logo</a>
            <ul className='flex items-center gap-4'>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/services">Services</Link></li>
            </ul>
        </div>
    </div>
  )
}
