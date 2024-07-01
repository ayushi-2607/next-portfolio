"use client"
import React from 'react'
import Image from 'next/image'
import { educationList } from '@/constants/data/education'
import Link from 'next/link';

const Education = () => {

    return (
        <div className="max-w-4xl mx-auto my-8 p-4">
            <h2 className="text-4xl font-bold text-center text-[#1A1A5C] mb-8">Education</h2>
            <div className="max-w-4xl mx-auto space-y-6">
                {educationList.map((edu, index) => (
                    <Link key={index} href={edu.link}>
                         < div className="bg-white rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-shadow  p-6 flex items-center space-x-4 mb-4">
                            <img src={edu.logo} alt={edu.org} className="w-20 h-20 rounded-full object-cover" />
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-gray-800">{edu.org}</h3>
                                <p className="text-[#1A1A5C] font-semibold">{edu.degree}</p>
                                <div className="flex justify-between text-gray-500 mt-2 font-semibold">
                                    <span>{edu.year}</span>
                                    <span>{edu.grade}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    )
}

export default Education
