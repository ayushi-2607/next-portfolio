"use client"
import React from 'react'
import Image from 'next/image';
import { easeIn, motion } from 'framer-motion';
import { ParallaxScroll } from "../components/ui/parallex-scroll";
const About = () => {
  const images = [
    "/sample_image.jpg",
    "/sample_image.jpg",
    "/sample_image.jpg",

  ];
  const skills = {
    "Programming Languages": ["Java", "JavaScript", "Groovy", "C", "C++"],
    "Frontend Technologies": ["React", "HTML", "CSS", "Tailwind CSS", "Next.js"],
    "Data and Reporting": ["BigQuery", "BIRT", "Jasper"],
    "CI/CD and Automation": ["Jenkins", "Ansible"],
    "Monitoring and Logging": ["Grafana", "Geneos"],
    "Orchestration and Workflow": ["Apache Airflow", "Control-M"],
    "Tools & Methodologies": ["Putty", "Postman", "WinSCP", "Jira", "Agile"],
  };
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
                alt="Edward Devis"
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
              
              <h1 className="text-4xl font-bold mb-2">Hi There! I'm Ayushi Lonkar</h1>
              <h2 className="text-xl text-yellow-500 mb-4  ">Full Stack Developer</h2>
              <p className="mb-4">
                I am a passionate learner having <strong className='text-xl'>3+ yrs </strong>of Experience with a relentless drive to acquire new skills and broaden my knowledge.
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
      <div className="relative text-center py-16">
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
            initial={{ y: -100, opacity: 0 }}
            animate={{ opacity: 1, y: 0, boxShadow: ["0 0 10px #334365", "0 0 10px #334365", "0 0 10px #334365"] }}
            transition={{ duration: 0.8, ease: easeIn }}
            key={category} className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
              <h3 className="text-xl font-semibold text-yellow-500 mb-4">{category}</h3>
              <p className="text-base text-white">
                {items.join(', ')}
              </p>
              </motion.div>
            
           
          ))}
          
        </div>
      <ParallaxScroll images={images} /> 
    </>
  )
}

export default About
