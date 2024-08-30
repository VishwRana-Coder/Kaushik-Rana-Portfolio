import React from 'react'

const UV = () => {
  return (
    <>
      <div className="container mt-10 flex-col">
        <h2 className="text-2xl text-light-accent dark:text-dark-accent">
          Lecturer
        </h2>
        <h3 className="text-xl mt-4">
          Shri U. V. Patel College of Engineering, Ganpat University, Kherva,
          India Deemed University under Govt. of Gujarat
        </h3>
        <h3 className="text-left font-semibold mt-1">July 2006- April 2011</h3>
        <ul className="list-disc mt-4 text-justify">
          <li>
            Achieved average achievement of 99% in my courses of Java, Software
            Engineering, Advance Operating System etc.
          </li>
          <li className="mt-4">
            Supervised more than 50 undergraduates in their final year projects
          </li>
          <li className="mt-4">Participated in more than 10 FDPs.</li>
          <li className="mt-4">
            Delivered guest lecture in National Workshop(RTST) at NIT Rourkela
          </li>
        </ul>
      </div>
    </>
  );
}

export default UV