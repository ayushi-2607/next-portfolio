"use client"
import React from 'react';
import {socials} from '../../../constants/data/socials'
const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Ayushi Lonkar. All rights reserved.</p>
          <div className="flex space-x-4">
          {socials.map((item, index) => {
        const IconComponent = item.icon;
        return (
          
          <a href={item.path} target="_blank" rel="noopener noreferrer"><IconComponent size ={25}/></a>
        );
      })}
      
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
