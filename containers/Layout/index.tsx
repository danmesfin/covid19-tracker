import React, { ReactElement } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
export default function Layout({children}:{children: ReactElement}) {
  return (
    <div className='flex flex-col dark:bg-gray-800'>
      <Navbar />
    <div>{children}</div>
      <Footer />
    </div>
  ); 
}
