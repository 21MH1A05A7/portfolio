import React from 'react'
import harsha from '../harsha.png'
import { TypeAnimation } from 'react-type-animation';
import linkdin from '../linkdin.png';
import leetcode from '../leetcode.png';
import github from '../github.png';
import gfg from '../gfg.png';


const Intro = () => {
  return (
    <div className='relative py-2 sm:py-0 h-fit sm:h-[700px] max-w-8xl mt-4'>
      <div className='rounded-xl relative h-full px-2 max-w-[1300px] mx-auto'>
        <div className='relative w-fit  top-[100px] lg:absolute lg:top-44 lg:left-20'>
            <h1 className='text-5xl md:text-8xl font-sans font-medium tracking-[5px]'>Matuparthi Harshad Sai</h1>
                      <TypeAnimation
                  className='md:ml-10 md:mt-10'
                sequence={[
                  "I'm a Full Stack Developer",
                  1000,
                  "I'm a UI/UX Designer",
                  1000,
                  "I'm a Coder",
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1.5em', display: 'inline-block' }}
                repeat={Infinity}
              />
        </div>
        <div className='hidden md:block ml-44 lg:ml-[500px] sm:pt-40 md:pt-0 xl:ml-[350px] overflow-hidden absolute top-0 z-index-1'>
            <img src={harsha} alt="" className='sm:ml-20 lg:ml-0 lg:h-[700px] scale-[0.8] lg:scale-[1.2] hidden md:block' />
        </div>
      <div className='block lg:hidden xl:block mt-28 sm:mt-28 lg:mt-2 lg:absolute lg:top-[350px] sm:w-[440px] lg:right-0 pb-2'>
          <h2 className='text-md font-medium'>As a versatile full-stack freelancer with a strong backend focus, I create remarkable projects and templates .</h2>
          <span className='w-[150px] h-1 bg-black block sm:float-right lg:float-none sm:ml-60 mt-3'></span>
        </div>
        
      <div className='block'>
          <div className='block mt-4 lg:absolute lg:top-[450px] lg:left-[110px] flex flex-wrap space-x-4'>
            <a href="https://www.linkedin.com/in/harshad-sai-matuparthi-a8375a267/" title='https://www.linkedin.com/in/harshad-sai-matuparthi-a8375a267/' className='rounded-3xl border border-1 ring-1 ring-offset-1 focus:ring-2 focus:ring-offset-2'><img className='w-[50px] p-[2px]' src={linkdin} alt="" /></a>
            <a href="https://leetcode.com/u/Harshad_V/" title='leetcode' className='rounded-3xl  focus:ring-2 focus:ring-offset-2'><img className='w-[50px] p-[2px]' src={leetcode} alt="" /></a>
            <a href="https://github.com/21MH1A05A7" title='github' className='rounded-3xl focus:ring-2 focus:ring-offset-2'><img className='w-[50px] p-[2px]' src={github} alt="" /></a>
            <a href="https://www.geeksforgeeks.org/user/harshadsnb9p/" title='geeksforgeeks' className='rounded-3xl  focus:ring-2 focus:ring-offset-2'><img className='w-[50px] p-[2px] scale-[1.4]' src={gfg} alt="" /></a>        
          </div>
          {/* <span className='w-[100px] h-1 bg-black block sm:float-right lg:float-none sm:ml-60 mt-3 lg:absolute top-[520px] left-[0px]'></span> */}
      </div>
      
      <div className='block mt-4 lg:hidden xl:block xl:mt-2 xl:absolute xl:top-[510px] sm:w-[440px] xl:right-0 pb-2'>
        <h1 className='mb-4'>Constantly updating my skills, I stay ahead of industry trends to exceed client expectations. I bring a comprehensive approach to every project, ensuring seamless integration</h1>
        <button className='ml-4 p-3 rounded-3xl text-white bg-[#FF5F00] font-semibold'>Know about me</button>
        <button className='ml-2 p-3 rounded-3xl font-semibold border border-1 border-black'>Repositories</button>
      </div>

      </div>
      
      
    </div>
  )
}

export default Intro


