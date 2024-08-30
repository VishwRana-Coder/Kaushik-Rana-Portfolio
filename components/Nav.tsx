"use client"
import React from "react";


//Importing Components
import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {

  //Items for Nav
  const nav =[
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
      path: "/experience"
    },
    {
      name: "Contact",
      path: "/contact"
    }

  ]
  const router = usePathname()
  console.log(router)
  return (
    <>
      <nav className="flex">
        <ul className="flex gap-4 items-center mr-4">
          {nav.map((item, index) => (
            <li
              key={index}
              className={`${
                item.path === router ? "text-light-accent dark:text-dark-accent text-[16px] underline" : "text-[16px]"
              }`}
            >
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <ModeToggle></ModeToggle>
      </nav>
    </>
  );
};

export default Nav;
