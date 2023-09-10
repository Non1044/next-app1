import React from 'react'
import Image from 'next/image'

async function getData(id) {
    const res = await fetch('https://www.melivecode.com/api/attractions/'+id)
    if(!res.ok){
      throw new Error('Failed to fetch data')
    }
    return res.json()
  }

export default async function page({params}) {
    const data = await getData(params.id)
  return (
    <div>
    
      <div key={data.attraction.id}>
        <h1>{data.attraction.name}</h1>
        <Image 
        src={data.attraction.coverimage} alt={data.attraction.name}
        width={500} height={333}></Image>
        <p>{data.attraction.detail}</p>
      </div>

  </div>
  )
}
