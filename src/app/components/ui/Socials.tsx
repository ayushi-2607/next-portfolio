import React from 'react'
import Link from "next/link"
import { socials } from '@/constants/data/socials';
const Socials = () => {
    
    return (

        <div className="flex gap-5 justify-center">
      {socials.map((item, index) => {
        const IconComponent = item.icon;
        return (
          <div key={index} className="p-3 rounded-full border-4 duration-300 transform hover:scale-125 hover:shadow-lg bg-[#C2C1C2]">
            <Link href={item.path} passHref>
              
                <IconComponent size={30} 
                />
           
            </Link>
          </div>
        );
      })}
    </div>
    )
}

export default Socials
