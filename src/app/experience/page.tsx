"use client"
import React, { useState } from 'react';
import { easeIn, motion } from 'framer-motion';
import { experiences } from '@/constants/data/experience';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
type Position = {
  position: string;
  duration: string;
  description: string;
  responsibilities: string[];
};

const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);
  const [hoveredPosition, setHoveredPosition] = useState<Position | null>(null);

  return (
    
    <div className="max-w-6xl mx-auto py-8">
      {experiences.map((exp, index) => (
        <motion.div
                
        animate={{ boxShadow: ["0 0 10px #334365", "0 0 10px #334365", "0 0 10px #334365"] }}
        transition={{ duration: 2, repeat: Infinity }}
        data-aos="fade-up"
    >
        <div key={index} className="relative mb-12 bg-white shadow-lg rounded-lg p-8">
          <img
            src={exp.logo}
            alt="logo"
            className="absolute top-2 left-3 w-15 h-20"
          />
          <div className="ml-24">
            <h3 className="font-semibold mb-4 text-3xl">{exp.company}</h3>
            <div className="border-l-4 border-gray-300 pl-8 ml-4 hover:cursor-pointer">
              {exp.positions.map((position, posIndex) => (
                <div
                  key={posIndex}
                  className="mb-8 relative"
                  onMouseEnter={() => setHoveredPosition(position)}
                  onMouseLeave={() => setHoveredPosition(null)}
                >
                  <div className="absolute -left-10 w-4 h-4 bg-[#1A1A5C] rounded-full"></div>
                  {posIndex < exp.positions.length - 1 && (
                    <div className="absolute -left-9 top-8 w-px h-full bg-gray-300"></div>
                  )}
                  <div className="flex flex-col md:flex-row">
                    <div className="md:mb-0 md:mr-8">
                      <h4 className="text-xl font-semibold text-[#413D3E]">{position.position}</h4>
                      <p className="text-gray-600 italic">{position.duration}</p>
                      <p className="text-gray-400 italic ">{position.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {hoveredPosition && exp.positions.includes(hoveredPosition) && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.8, ease: easeIn}}
              className="md:absolute md:top-2  md:right-11 md:w-1/2 p-5 bg-gray-700 shadow-lg rounded-lg mt-4 md:mt-0"
            >
              <h4 className="text-xl text-yellow-400 font-semibold mb-4">{hoveredPosition.position} Responsibilities</h4>
              <ul className="list-disc list-inside space-y-2">
                {hoveredPosition.responsibilities.map((item, index) => (
                  <li key={index} className="text-gray-200 font-thin">{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
        </motion.div>
      ))}
    </div>
   
  );
};

export default ExperienceSection;