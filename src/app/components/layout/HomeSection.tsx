"use client"
import React from 'react'
import ProfilePicture from '../ui/ProfilePicture'
import { FaDownload } from 'react-icons/fa';
import Socials from '../ui/Socials';
import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from 'react-icons/fa'
const Home = () => {
  
  return (
    <section className='h-full'>
      <div className="container mx-auto">
        <div className='flex flex-col md:flex-row items-center md:pt-8 md:pb-24'>
          <div className='md:ml-20'><ProfilePicture /></div>
          <div className='text-center md:ml-60'>
            <span className="h1 ">Hello I'm</span><br />
            <span className="h1 text-[#1a1a5c]">Ayushi Lonkar</span>
            <h2 className='h2'>Senior Software Engineer <br /> at HSBC </h2><br />
            <p className='max-w-[500px] mb-7'>Versatile DevOps and Full Stack Developer experienced in both business operations and production support. Skilled in crafting CI/CD pipelines, scalable applications, and data visualizations</p>

            <button className="px-4 py-2 text-white bg-[#1a1a5c] hover:bg-[#3E3EA7] shadow-lg rounded">
              <div className="flex items-center space-x-2">
                <FaDownload />
                <span>Download Resume</span>
              </div >
            </button>
            <div className='mt-20'>
              <Socials/>
            </div>
          </div>
        </div>
      </div>


    </section >
  )
}

export default Home
