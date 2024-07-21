"use client"
import React from 'react'
import Image from 'next/image';
import { easeIn, motion } from 'framer-motion';
import { ParallaxScroll } from "../components/ui/parallex-scroll";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {skills} from "../../constants/data/skills";
import {achievements} from "../../constants/data/achievements";
import {images} from "../../constants/data/images";
import { GrAchievement } from "react-icons/gr";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  
  
  
  return (
    <>
      <div className=" text-white flex flex-col items-center justify-center">
        <div className="flex flex-col items-center max-w-6xl mx-auto p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ opacity: 1, x: 0, boxShadow: ["0 0 10px #334365", "0 0 10px #334365", "0 0 10px #334365"] }}
              transition={{ duration: 0.8, ease: easeIn }}
              className="mb-6 md:mb-0 md:mr-10 mt-3"
            >

              <Image
                src="/about_image.jpg"
                alt="Ayushi"
                className="rounded "
                width={1200}
                height={1200}
              />

            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ opacity: 1, x: 0, boxShadow: ["0 0 10px #334365", "0 0 10px #334365", "0 0 10px #334365"] }}
              transition={{ duration: 0.8, ease: easeIn }}
              className="bg-gray-900 p-6 rounded-md"
            >

              <h1 className="text-4xl font-bold mb-2">Hi There! I am Ayushi Lonkar</h1>
              <h2 className="text-xl text-yellow-500 mb-4  ">Full Stack Developer</h2>
              <p className="mb-4">
                I am a passionate learner having <strong className='text-xl'>3 yrs </strong>of Experience with a relentless drive to acquire new skills and broaden my knowledge.
                <br />My curiosity fuels my journey of continuous learning, making every challenge an opportunity for growth.
                <br /> With a knack for multitasking, I excel at juggling various responsibilities while maintaining a clear focus on priorities. My ability to organize and complete tasks efficiently ensures that I consistently meet my goals and deliver quality results.
              </p>
              <ul className='font-thin'>
                <li><strong>Date of Birth:</strong> July 26, 2000</li>
                <li><strong>Phone:</strong> +91 9109044554</li>
                <li><strong>Email:</strong> lonkarayushi@gmail.com</li>
                <li><strong>From:</strong> Indore, India</li>
                <li><strong>Language:</strong> English, Hindi, Marathi</li>
              </ul>

            </motion.div>
          </div>
        </div>
      </div>

      <div className="relative text-center py-16" data-aos="fade-up">
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-8xl text-[#334365] opacity-10 font-bold">SKILLS</span>
        </div>
        <h2 className="text-4xl font-bold text-[#334365] relative inline-block z-10">
          SKILLS
          <span className="block h-1 w-12 bg-yellow-500 mt-1 absolute bottom-0 ml-10"></span>
        </h2>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5 m-4">
        {Object.entries(skills).map(([category, items]) => (


          <motion.div

            animate={{ boxShadow: ["0 0 10px #334365", "0 0 10px #334365", "0 0 10px #334365"] }}

            key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-yellow-500 mb-4">{category}</h3>
            <p className="text-base text-white">
              {items.join(', ')}
            </p>
          </motion.div>
        ))}

      </div>
      <div className="relative text-center py-16" data-aos="fade-up">
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-8xl text-[#334365] opacity-10 font-bold">PASSION & INTERESTS</span>
        </div>
        <h2 className="text-4xl font-bold text-[#334365] relative inline-block z-10">
        Passion & Interests
          <span className="block h-1 w-40 bg-yellow-500 mt-1 absolute bottom-0 ml-20"></span>
        </h2>

      </div>
      <div  className="max-w-6xl m-10 mt-0 text-gray-800">
      <span >
      <strong>Music</strong> holds a special place in my heart. With classical training, I have successfully cleared three exams from Akhil Bhartiya Gandharva Mahavidyalaya. My passion has led me to win music competitions at the state level. I also had the privilege of leading the music team in college and performing at various corporate events, showcasing my dedication and love for music
      </span>
      <br/>
      <br/>
      <span >
      I have a profound interest in <strong> hosting events </strong>. My experience includes hosting numerous events at HSBC, one of the most notable being the global townhall. My ability to engage and entertain an audience has been honed through these experiences, making event hosting one of my cherished skills.
      </span>
      <br/>
      <br/>
      <span >
      <strong>Dancing and cooking</strong> are two activities that bring me immense joy. Whether it is expressing myself through dance or experimenting with new recipes in the kitchen, these hobbies allow me to explore my creativity and bring happiness to myself and others.
      </span >
      </div>
      <div className='flex max-w-6xl ml-10 mt-10 items-center'>
      <div className="flex flex-col md:flex-row  md:items-start" data-aos="zoom-in-left">
      <motion.div
             
              animate={{ boxShadow: ["0 0 10px #334365", "0 0 10px #334365", "0 0 10px #334365"] }}
             
              className="bg-gray-900 p-8 rounded-md  " 
            >
             
              <ul className='text-white space-y-3' >
                 {achievements.map((ach, posIndex) => ( <li key={posIndex} className='list-disc'>{ach} </li>))}
                
              </ul>

            </motion.div>
            </div>
            <div className='flex-col md:flex-row m-10'>
            

              <Image
                src="/achievement.png"
                alt="Edward Devis"
                className="rounded"
                width={200}
                height={30}
              />

           <h1 className='text-2xl font-semibold text-gray-700 mt-5 ml-5'>Achievements</h1>
            </div>
            </div>
            <div className="relative text-center py-16" data-aos="fade-up">
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-8xl text-[#334365] opacity-10 font-bold">GALLERY</span>
        </div>
        <h2 className="text-4xl font-bold text-[#334365] relative inline-block z-10">
        Gallery
          <span className="block h-1 w-12 bg-yellow-500 mt-1 absolute bottom-0 ml-10"></span>
        </h2>

      </div>
      <ParallaxScroll images={images} className='mt-5' />
    </>
  )
}

export default About
