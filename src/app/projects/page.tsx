"use client"
import React from 'react';
import AOS from 'aos';
import { easeIn, motion } from 'framer-motion';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {projects} from "../../constants/data/projects";
export default function Home() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
        });
      }, []);
    return (
        <div className=" text-white py-16 px-8">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div

                        animate={{ boxShadow: ["0 0 10px #334365", "0 0 10px #334365", "0 0 10px #334365"] }}
            
                        key={index} className="bg-gray-600 p-6 rounded-lg shadow-lg" data-aos="fade-up">
                        {/* <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg" data-aos="fade-up"> */}
                            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">{project.title}</h3>
                            <p className="text-base mb-4"> {project.objective}</p>
                            <h4 className="text-lg font-bold text-yellow-500 mb-2">Features:</h4>
                            <ul className="list-disc list-inside mb-4">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="text-base font-extralight">{feature}</li>
                                ))}
                            </ul>
                            <h4 className="text-lg font-bold text-yellow-500 mb-2">My Contribution:</h4>
                            <ul className="list-disc list-inside">
                                {project.contribution.map((contribution, idx) => (
                                    <li key={idx} className="text-base">{contribution}</li>
                                ))}
                            </ul>
                        {/* </div> */}
                        </motion.div> 
                    ))}
                   
                </div>
            </div>
        </div>
    );
}
