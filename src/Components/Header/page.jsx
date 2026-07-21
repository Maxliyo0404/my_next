import Link from 'next/link'
import React from 'react'
export default function Header() {
  return (
    <div>
        <div className="container">
            <a href="#">Logo</a>
            <ul>
                <li><Link href="/about">About</Link></li>
            </ul>
        </div>
    </div>
  )
}
