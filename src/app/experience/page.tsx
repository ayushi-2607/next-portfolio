"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "HSBC",
    logo: "/hsbc_logo.png",
    positions: [
      {
        position: "Senior Software Engineer",
        duration: "Jul 2023 - Present",
        description: "Pune, India",
        responsibilities: [
          "Lead the development team.",
          "Architected new features.",
          "Conducted code reviews."
        ]
      },
      {
        position: "Software Engineer",
        duration: "Jan 2022 - Jul 2023",
        description: "Pune, India",
        responsibilities: [
          "Developed new application features.",
          "Fixed bugs and improved performance.",
          "Collaborated with cross-functional teams."
        ]
      },
      {
        position: "Trainee Software Engineer",
        duration: "Aug 2021 - Dec 2021",
        description: "Pune, India",
        responsibilities: [
          "Developed new application features.",
          "Fixed bugs and improved performance.",
          "Collaborated with cross-functional teams."
        ]
      }
    ]
  },
  {
    company: "bluCursor Infotech Pvt Ltd",
    logo: "/blucursor_logo.jpg",
    positions: [
      {
        position: "Intern",
        duration: "Jan 2020 - Mar 2020",
        description: "Indore, India",
        responsibilities: [
          "Assisted in software development.",
          "Participated in code reviews.",
          "Wrote unit tests."
        ]
      }
    ]
  }
];

type Position = {
  position: string;
  duration: string;
  description: string;
  responsibilities: string[];
};

const ExperienceSection: React.FC = () => {
  const [hoveredPosition, setHoveredPosition] = useState<Position | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index} className="relative mb-12 bg-white shadow-lg rounded-lg p-8">
          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
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
                      <p className="text-[#1A1A5C] italic">{position.duration}</p>
                      <p className="text-gray-500 italic ">{position.description}</p>
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
              className="absolute top-0 right-0 w-1/3 p-6 bg-white shadow-lg rounded-lg"
            >
              <h4 className="text-xl font-semibold mb-4">{hoveredPosition.position} Responsibilities</h4>
              <ul className="list-disc list-inside space-y-2">
                {hoveredPosition.responsibilities.map((item, index) => (
                  <li key={index} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExperienceSection;
