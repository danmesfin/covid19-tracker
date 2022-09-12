import React, { ReactElement } from 'react'

export default function index({ children}:{ children : ReactElement}) {
  return (
    <div className='flex flex-col w-48 p-2 m-2 bg-white shadow-md rounded-sm'>
      {children}
    </div>
  )
}
