"use client"

import React from 'react'



//Importing Components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoIosMenu } from "react-icons/io";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ModeToggle } from './ModeToggle';


const MobileNav = () => {
  //Items for Nav
  const nav = [
    {
      name: "About",
      path: "/",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Publications",
      path: "/publications",
    },
    {
      name: "Experience",
      path: "/experience",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const router = usePathname()

  return (
    <>
      <nav className="flex md:hidden">
        <Sheet>
          <SheetTrigger>
            <IoIosMenu className="text-light-primary dark:text-dark-primary text-2xl"></IoIosMenu>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <h1 className="text-3xl">
                  Kaushik
                  <span className="text-light-accent dark:text-dark-accent ">
                    .
                  </span>
                </h1>
                {/* Nav */}
                <ul className="mt-10">
                  {nav.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          item.path === router
                            ? "text-light-accent dark:text-dark-accent text-xl text-left underline mb-2"
                            : "text-xl text-left mb-2"
                        }`}
                      >
                        <Link href={item.path}>{item.name}</Link>
                      </li>
                    );
                  })}
                  <div className='flex justify-normal'>
                    <ModeToggle></ModeToggle>
                  </div>
                </ul>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
}

export default MobileNav