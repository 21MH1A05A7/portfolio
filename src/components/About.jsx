import React from 'react'
import one from '../one.jpg';
import naruto from '../naruto.png';

const About = () => {
  return (
    <div className="relative overflow-hidden bg-white mt-20 mb-10">
        
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl border-l-4 border-l-black pl-3">
              About Me
            </h1>
            <p className="mt-8 text-lg text-gray-500 ml-4">
            I am a versatile software developer with two years of experience creating innovative projects, utilizing cutting-edge technologies such as React JS, Node JS, Spring Boot, Express JS, and MongoDB.</p>
            <p className="mt-4 text-lg text-gray-500 ml-4" >I have developed some astonishing webpages, showcasing my ability to integrate modern industrial technologies to deliver high-quality, user-friendly interfaces. My expertise spans both front-end and back-end development, allowing me to build comprehensive, full-stack applications. I am passionate about solving complex problems and continuously expanding my technical knowledge. </p>
            <p className="mt-4 text-lg text-gray-500 ml-4">Outside of work, I enjoy watching anime and web series, and playing volleyball.</p>
          </div>
          <div>
            <div className="mt-10">
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={one}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://wallpapercave.com/wp/wp7190562.png"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://wallpapercave.com/wp/wp9938332.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://mfiles.alphacoders.com/945/thumb-350-945050.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://images5.alphacoders.com/642/642599.jpg"
                          alt=""
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src="https://wallpapercave.com/wp/wp11766183.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={naruto}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
