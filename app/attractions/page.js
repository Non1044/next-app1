import React from 'react'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://www.melivecode.com/api/attractions')
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Attractions() {
  const data = await getData()
  return (
    <div>
      {data.map((attraction)=>(
        <div key={attraction.id}>
          <Link href={'/attractions/'+attraction.id}>{attraction.name}</Link>
        </div>
      ))}
    </div>
  )
}
