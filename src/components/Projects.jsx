// ./src/components/LaptopFrame.js
import React from 'react';
import project1 from '../project1.jpg';
import github from '../github.png';
import garage from '../Garage.jpg';
import react from '../react.png';
import tailwind from '../tailwind.png';
import node from '../node.png';
import monogo from '../mongodb.png';
const Project = () => {

  return (
    <>
    <div className='mx-auto max-w-7xl w-screen lg:h-[700px] sm:h-fit mt-28 rounded-2xl p-6 shadow-[rgba(0,0,0,0.1)_0px_4px_12px] dark:shadow-[rgba(0,0,0,0.5)_0px_4px_12px]'>
        <h1 className='font-medium text-center text-4xl'>Projects</h1>
        <div className='flex flex-1 flex-wrap md:flex-nowrap mt-10s'>
          <div className='w-full md:w-[700px] lg:w-fit xl:ml-20 overflow-hidden border-4 border-[#eee] rounded-b-sm rounded-lg border-b-black border-b-4'>
            <a href="" className='mx-auto block sm:w-[400px] h-[250px] '>
              <img src={project1} alt="" className='w-full h-full sm:pl-3  object-cover object-[center_top] hover:object-[center_bottom] transition-all ease-in-out duration-[10000ms]' />
            </a>
          </div>
          <div className='w-[600px] mt-10 ml-4 space-y-3'>
            <h1 className='font-medium text-lg'>E-Commerce Website</h1>
            <p className=''>An e-commerce website showcasing a wide range of branded shoes, featuring an astonishing UI crafted with React and Tailwind CSS.</p>
            <p className='border-l-2 border-black pl-2'>Technologies</p>
            <div className='flex space-x-3 text-center'>
              <img src={react} className='w-10 h-10' alt="" />
              
              <img src={tailwind} alt="" className='w-10 h-10' />
            </div>
            <div className='flex items-center space-x-2'>
              <a href="https://github.com/21MH1A05A7/ECommerce-"><button className='relative p-2 px-4 rounded-lg pl-10 border border-black'  href="https://github.com/21MH1A05A7/ECommerce-">Code</button></a>
              <img src={github} alt="" className='absolute w-[30px] h-[30px]'/>
              <a href="https://e-commerce-one-sand.vercel.app/"> <button className='p-2 px-4 rounded-3xl bg-black text-white'>Demo</button></a> 
            </div>
            
          </div>
          
        </div>
        <div className='flex flex-1 flex-wrap sm:flex-row-reverse md:flex-nowrap mt-10 space-x-3'>
        <div className='xl:mr-[120px] w-full md:w-[700px] lg:w-fit overflow-hidden border-4 border-[#eee] rounded-b-sm rounded-lg border-b-black border-b-4'>
            <a href="" className='mx-auto block sm:w-[400px] h-[250px] '>
              <img src={garage} alt="" className='w-full h-full p-2  object-cover object-[center_top] hover:object-[center_bottom] transition-all ease-in-out duration-[10000ms]' />
            </a>
          </div>
          <div className='w-[600px] mt-10  space-y-3'>
            <h1 className='font-medium text-lg'>Garage Application</h1>
            <p className=''> Once generated, these vouchers can be seamlessly sent to higher officials within the College for approval or record-keeping through the Node.js backend</p>
            <p className='border-l-2 border-black pl-2'>Technologies</p>
            <div className='flex space-x-3 text-center'>
              <img src={react} className='w-10 h-10' alt="" />
              <img src={node} className='w-10 h-10' alt="" />
              <img src={tailwind} alt="" className='w-10 h-10' />
              <img src={monogo} className='w-10 h-10' alt="" />
            </div>

            <div className='flex items-center space-x-2'>
                <a href="https://github.com/21MH1A05A7/garage"><button className='relative p-2 px-4 rounded-lg pl-10 border border-black'>Code</button></a>
                <img src={github} alt="" className='absolute w-[30px] h-[30px]'/>
                <button className='p-2 px-4 rounded-3xl bg-black text-white'>Know About</button>
            </div>
            
          </div>
          
          
        </div>
    </div>
    </>
  );
};

export default Project;


