import React from "react";

//Importing Components
import Link from "next/link";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="md:container  gap-10 md:flex-row flex-col md:justify-center md:items-center grid place-items-center">
        {/* Image */}
        <div className="border border-[#b4b4b4] dark:border-[#474747] rounded-full md:w-[300px] md:h-[300px] h-[200px] w-[200px]">
          <img
            src="/kaushik-image.png"
            className="md:w-[300px] md:h-[300px] h-[200px] w-[200px]"
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
              <div className="font-semibold">Tel:</div>&nbsp; +91-97255 77964
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
                Vishwakarma Government Engineering College,
                <br /> Near Visat-Ghandinagar Highway,
                <br /> Chandkheda, Ahmedabad-382424
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
            className="text-[#003ba1] text-3xl flex gap-2 dark:text-[#025fff]"
          >
            <FaLinkedin />{" "}
            <span className="text-light-primary dark:text-dark-primary text-xl">
              Linkedin
            </span>
          </Link>
          {/* Facebook */}
          <Link href={"/"} className="text-3xl mt-2 text-[#0059f2] flex gap-2">
            <FaFacebook />
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
