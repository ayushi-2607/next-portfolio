"use client"
import React from 'react'
import MainPhoto from '../ui/MainPhoto'
import { FaDownload } from 'react-icons/fa'; 
const Home = () => {
  return (
    <section className='h-full'>
      <div className="container mx-auto">
        <div className='flex flex-col md:flex-row items-center md:pt-8 md:pb-24'>
          <div className='md:ml-20'><MainPhoto /></div>
          <div className='text-center md:ml-60'>
          <span className="h1 ">Hello I'm</span><br/>
            <span className="h1 text-[#1a1a5c]">Ayushi Lonkar</span>
            <h2 className='h2'>Senior Software Engineer <br/> at HSBC </h2><br/>
            <p className ='max-w-[500px] mb-7'>Versatile DevOps and Full Stack Developer experienced in both business operations and production support. Skilled in crafting CI/CD pipelines, scalable applications, and data visualizations</p>
          
            <button className=' flex items-center px-4 py-2 text-white bg-[#1a1a5c] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 shadow-lg'>Download Resume <FaDownload/></button>
          
          </div>
        </div>
      </div>


    </section>
  )
}

export default Home
