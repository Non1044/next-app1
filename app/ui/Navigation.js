'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const navLink=[
    {
        href:'/attractions',name:'Home'
    },{
        href:'/attractions/about',name:'About'
    }
]

export default function Navigation() {
    const pathname = usePathname()
  return (
    <ul>
        {navLink.map((link)=>{
            const isActive = pathname === link.href
            return (
                <li key={link.name}>
                <Link
                className={isActive ? 'active': ''}
                href={link.href}>
                {link.name}
                </Link>
                </li>
            )
        })}
        
    </ul>
  )
}
