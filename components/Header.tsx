import React from 'react'

//Importing Components
import Nav from './Nav'
import MobileNav from './MobileNav'
import Link from 'next/link'


const Header = () => {
  return (
    <>
      <div>
        {/* Desktop Nav */}
        <div className="hidden md:flex container h-[60px] items-center justify-between">
          <div className="">
            <Link href="/">
              {" "}
              <h1 className="text-3xl">
                Kaushik
                <span className="text-light-accent dark:text-dark-accent">
                  .
                </span>
              </h1>
            </Link>
          </div>
          <div>
            <Nav></Nav>
          </div>
        </div>
        {/* Mobile Nav */}
        <div className="flex md:hidden container h-[60px] items-center justify-between">
          <div className="">
            <Link href="/">
              {" "}
              <h1 className="text-3xl">
                Kaushik
                <span className="text-light-accent dark:text-dark-accent">
                  .
                </span>
              </h1>
            </Link>
          </div>
          <MobileNav></MobileNav>
        </div>
      </div>
    </>
  );
}

export default Header