import React from 'react'

//Importing Components
import Link from 'next/link'


const Experience = () => {
  return (
    <>
      <div className="container mt-20 md:flex-row flex-col gap-10">
        {/* Card 1 */}
        <Link
          href={"/experience/uv-college"}
          className="md:w-[50%] bg-[#eeeeee] h-[300px] border border-[#272727] w-[100%] rounded-xl px-3 py-3 text-light-primary dark:text-dark-primary dark:bg-[#1e1e1e]"
        >
          <section>
            <h1 className="text-[18px] text-light-accent dark:text-dark-accent text-center mt-3">
              Shri U. V. Patel College of Engineering
            </h1>
            <div className="text-center ml-5 mt-3 font-semibold">
              <div>July 2006- April 2011</div>
              <div>Lecturer</div>
            </div>
            <p className="text-center mt-10 mr-6 ml-6">
              Shri U. V. Patel College of Engineering, Ganpat University,
              Kherva, India Deemed University under Govt. of Gujarat
            </p>
          </section>
        </Link>

        {/* Card 2 */}
        <Link
          href={"/experience/vgec"}
          className="md:w-[50%] bg-[#eeeeee] h-[300px] border border-[#272727] w-[100%] rounded-xl px-3 py-3 text-light-primary dark:text-dark-primary dark:bg-[#1e1e1e]"
        >
          <section>
            <h1 className="text-[18px] text-light-accent dark:text-dark-accent text-center mt-3">
              Vishwakarma Government Engineering College
            </h1>
            <div className="text-center ml-5 font-semibold mt-3">
              <div>May 2011 - Now</div>
              <div>Assistant Professor</div>
            </div>
            <p className="text-center mt-10">
              Vishwakarma Government Engineering College, Ahmedabad, India Under
              Aegis of Education Department, Govt. of Gujarat
            </p>
          </section>
        </Link>
      </div>
    </>
  );
}

export default Experience