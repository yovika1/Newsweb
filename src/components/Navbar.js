import React from 'react'
import { Link } from 'react-router-dom'
export const Navbar = () => {
  return (
    <div>
        <header className="text-gray-600 body-font">
    <div className="container mx-auto lg:flex flex-wrap p-5 flex-col md:flex-row items-center ">
     <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">News</span>
      </Link>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

       <Link className="mr-5 hover:text-gray-900" aria-current='page' to='/'>Home</Link>
       <Link className="mr-5 hover:text-gray-900" to='/technology'>Technology</Link>
       <Link className="mr-5 hover:text-gray-900" to='/entertainment'>Entertainment</Link>
       <Link className="mr-5 hover:text-gray-900" to='/general'>General</Link>
       <Link className="mr-5 hover:text-gray-900" to='/health'>health</Link>
       <Link className="mr-5 hover:text-gray-900" to='/science'>Science</Link>
       <Link className="mr-5 hover:text-gray-900" to='/sports'>Sports</Link>
       <Link className="mr-5 hover:text-gray-900" to='/business'>Business</Link>
      </nav>
      <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
    {/* <div className='lg:hidden sm:block'>
jretoierjtjiwerji
    </div> */}
  </header>
  </div>
  )
}
