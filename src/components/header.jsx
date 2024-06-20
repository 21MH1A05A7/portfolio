import React from 'react'
import luffy from '../luffy.png';
import { Disclosure,Menu,Transition } from '@headlessui/react';
import {Bars3Icon,XMarkIcon} from '@heroicons/react/24/outline';

import { useScrollPosition } from "../hooks/useScrollPosition";

const Header = () => {


  const scrollPosition = useScrollPosition();



  const scrollToPosition = (val) => {
    // Replace 'x' and 'y' with the coordinates you want to scroll to
    window.scrollTo({
      top: val, // specify the y-coordinate
      left: 0, // specify the x-coordinate
      behavior: 'smooth' // smooth scrolling
    });
  };  

  return (
    <Disclosure className={`w-full p-1 sticky transition ease-in-out duration-300 relative ${
      scrollPosition>0 ? "drop-shadow-lg":"drop-shadow-none"
    }`}>
         {({open}) =>(
            <div className='shadow-lg'>
    <div className='relative max-w-6xl mx-auto h-fit'>
        <div className='relative mx-auto flex flex-wrap justify-around sm:justify-between h-full'>
            <div className='realtive p-2 flex flex-1 text-center space-x-6'>
                <img src={luffy} alt="" className='h-10'/>
                <span className='h-fit mt-2 font-roboto text-2xl tracking-[2px]'>RoroNoa</span>
            </div>
            <Disclosure.Button className="sm:hidden relative items-center justify-center rounded-md p-2 focus:ring-inset mt-1 focus:outline-none">
              <div className="">
                {open ?<XMarkIcon className="w-10 h-10 block"></XMarkIcon>:<Bars3Icon className="w-10 h-10"></Bars3Icon>
                }
              </div>
            </Disclosure.Button>
            <div className='hidden sm:flex space-x-10 md:space-x-20 p-2'>
                <div className='flex flex-wrap space-x-10 lg:space-x-20 items-center'>
                <a  class="nav" className='nav text-start text-md font-medium' onClick={()=>{scrollToPosition(0)}}>Home</a>
                <a class="nav" className='nav text-start text-md font-medium h-fit' onClick={()=>{scrollToPosition(800)}}>Projects</a>
                <a class="nav" className='nav text-center text-md font-medium h-fit' onClick={()=>{scrollToPosition(1400)}}>Tskills</a>
                <a  class="nav" className='nav text-center text-md font-medium h-fit' onClick={()=>{scrollToPosition(2400)}}>Contact</a>
                </div>
            </div>
        </div>
    </div>
    <Transition
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  >
                   <Disclosure.Panel className="sm:hidden px-2">
                   <Disclosure.Button
                  className='w-full shadow-sm hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                  Home
                </Disclosure.Button>
                <Disclosure.Button
                  className='w-full shadow-sm hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                  About
                </Disclosure.Button>
                <Disclosure.Button
                  className=
                    'w-full shadow-sm hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                        Projects
                </Disclosure.Button>

                <Disclosure.Button
                  className=
                    'w-full shadow-sm hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'>
                        Contact
                </Disclosure.Button>
                    </Disclosure.Panel> 
                  </Transition>
    </div>
         )}
    </Disclosure>
  )
}

export default Header
