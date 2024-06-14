"use client"
import Home from '@/app/page'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { NAV_ITEMS } from '@/constants/data/navitems';

const Header = () => {
  const [navVariable, setNavBar] = useState(false);
  return (
    <header className='w-full mx-auto bg-nav text-white'>
      <div className='justify-between md:items-center md:flex'>
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <div>

            <h2 className='ml-2 text-2xl font-bold'><Link href="/" className = "hover:text-background">My Portfolio </Link></h2>

          </div>
          <div className='md:hidden' onClick={() => { setNavBar(!navVariable) }}>
            <button className='mr-4'>
              {navVariable ? <IoClose /> : <GiHamburgerMenu size={30} />}

            </button>
          </div>
        </div>
        <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navVariable ? "block" : "hidden"
          }`}>
          <div>
            <div className='items-center justify-end space-y-3 md:flex md:space-x-6 md:space-y-0 mr-2'>
              {NAV_ITEMS.map((item, index) => {
                return (
                  <Link
                    href={`/${item.page}`}
                    className={
                      "block lg:inline-block  hover:text-background"
                    }

                    onClick={() => setNavBar(!navVariable)}
                  >
                    {item.label}
                  </Link>
                )
              })
              }
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
