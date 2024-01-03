import React from 'react'
import Growing from './Growing ring.gif'
export const Spinner = () => {
  return (
   
       <div className='flex justify-center items-center w-full h-screen'>
         <div className='w-11'>
         <img src={Growing} alt ='Loading...'/>
         </div>
       </div>
   
  )
}
