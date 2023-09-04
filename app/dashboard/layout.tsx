import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
    <div>
      <p>Ini tampilan dari layout dashboard</p>
      {children}
    </div>
  )
}
