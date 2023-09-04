import React from 'react'

async function getData(param:string) {
  const res =await fetch(`https://api.github.com/users/${param}`)
  return res.json()
}

export default async function DetailCari({params}:{params:{slug:string}}) {
  const data = await getData(params.slug)
  return (
    <div>
      <h1>Detail user : {params.slug}</h1>
      <div className='text-white'>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}
