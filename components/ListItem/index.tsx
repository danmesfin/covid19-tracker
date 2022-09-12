import React from 'react'

function index({name}:{name: any}) {
  return (
    <div className='flex-col'>
        <div className='flex p-1 text-bsse rounded border-b'>{name}</div>
        </div>
  )
}

export default index