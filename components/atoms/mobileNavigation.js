import { HomeIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import React from 'react';

const MobileNavigation = () => {

  

  

  return (
    <div className="fixed bottom-0 z-40 w-full h-16 bg-white border-t border-gray-200 md:hidden">
      
      <div className="relative grid grid-cols-3 items-center h-full max-w-[250px] sm:max-w-[350px] mx-auto">
        
        <div className="flex flex-col items-center px-3">
          <Link href="/">
            <a className="group relative flex flex-col items-center justify-center  "
              
            >
                <HomeIcon className=  'text-grey-300 text-opacity-30 relative block text-center transform h-6   duration-700 group-hover:translate-y-[-35px] group-focus:text-primary' />
              <span className=" absolute opacity-0 transition duration-500 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-[10px] mt-1 text-xs text-gray-500 ">Home</span>
              <div className='absolute  opacity-40 group-active:bg-primary group-active:opacity-100 group-hover:bg-primary h-10 w-10 duration-700 group-hover:translate-y-[-35px] group-hover:border-2 rounded-full border-solid group-focus:opacity-30  '></div>
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center px-3">
        <Link href="/">
            <a className="group relative flex flex-col items-center justify-center  "
              
              
            >
                <SearchIcon className=  'text-grey-300 text-opacity-50 relative block text-center transform h-6   duration-700 group-hover:translate-y-[-35px] group-focus:text-primary' />
              <span className=" absolute opacity-0 transition duration-500 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-[10px] mt-1 text-xs text-gray-500 ">Explore</span>
              <div className='absolute  opacity-40 group-active:bg-primary group-active:opacity-100 group-hover:bg-primary h-10 w-10 duration-700 group-hover:translate-y-[-35px] group-hover:border-2  rounded-full border-solid group-focus:opacity-30 '></div>
            </a>
          </Link>
        </div>
        <div className="flex flex-col items-center px-3">
        <Link href="/">
            <a className="group relative flex flex-col items-center justify-center "
              
              
            >
                <UserIcon className=  'relative block text-center transform h-6   duration-700 group-hover:translate-y-[-35px]  group-focus:text-primary text-grey-300 text-opacity-50' />
              <span className=" absolute opacity-0 transition duration-500 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-[10px] mt-1 text-xs text-gray-500 ">Login</span>
              <div className='absolute  opacity-40 group-active:bg-primary group-active:opacity-100 group-hover:bg-primary h-10 w-10 duration-700 group-hover:translate-y-[-35px] group-hover:border-2 group-after:border-pink-500 rounded-full border-solid group-focus:opacity-30'></div>
            </a>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default MobileNavigation
