import React from "react";

//Importing Components
import Link from "next/link";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import Image from "next/image";


const About = () => {
  return (
    <>
      <div className="md:container  gap-10 md:flex-row flex-col md:justify-center md:items-center grid place-items-center">
        {/* Image */}
        <div className=" rounded-full md:w-[300px] md:h-[300px] h-[200px] w-[200px]">
          <Image
            alt="kaushik's image"
            width={200}
            height={200}
            src="/kaushik-image.png"
            className="md:w-[300px] border border-[#b4b4b4] dark:border-[#474747] rounded-full md:h-[300px] h-[200px] w-[200px]"
          />
        </div>
        {/* Info */}
        <main className="mt-10 w-[300px]">
          {/* Name */}
          <h1 className="text-2xl">Dr. Kaushik Rana</h1>
          <Link
            href="http://www.vgec.cteguj.in/facultydetail/show/15129"
            className="text-light-accent dark:text-dark-accent hover:underline"
          >
            Assistant Professor
          </Link>
          <br />
          {/* College Info */}

          <Link
            href="https://www.vgecg.ac.in/department.php?dept=3"
            className="text-light-accent dark:text-dark-accent hover:underline"
          >
            Computer Engineering Department
          </Link>
          {/* Personal Info */}
          <ul>
            <li className="mt-3 flex">
              <div className="font-semibold">Tel:</div>&nbsp; +1 (778) 717-7675
            </li>
            <li className="mt-3 flex">
              <div className="font-semibold">Email:</div>
              &nbsp;
              <a href="mailto:kaushikrana874@gmail.com">
                Kaushikrana874@gmail.com
              </a>
            </li>
            <li className="mt-3">
              <div className="font-semibold">Address:</div>&nbsp;
              <div className="mt-[-20px]">
                13863 80A Avenue,
                <br /> Surrey, BC V3W 8V8
                <br /> Canada
              </div>
            </li>
          </ul>
        </main>
        {/* Social */}
        <div className="flex flex-col">
          {/* Linkedin */}
          <Link
            href={
              "https://www.linkedin.com/in/kaushik-rana-7970ab80/?originalSubdomain=in"
            }
            className="text-[#003ba1] text-3xl flex gap-2"
          >
            <FaLinkedin className="text-[#0059f2] bg-white"/>{" "}
            <span className="text-light-primary dark:text-dark-primary text-xl">
              Linkedin
            </span>
          </Link>
          {/* Facebook */}
          <Link href={"/"} className="text-3xl mt-2  flex gap-2">
            <FaFacebook className="text-[#0059f2] bg-white rounded-full"/>
            <span className="text-light-primary dark:text-dark-primary text-xl">
              Facbook
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
