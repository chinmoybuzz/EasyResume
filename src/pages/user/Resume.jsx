import React from "react";

const Resume = () => {
  return (
    <div className="bg-gray-300 min-h-screen flex justify-center py-10">
      <div className="bg-white w-[800px] p-10 text-[14px] text-gray-900 shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold">Chinmoy Hembram</h1>
            <p className="text-blue-600">LinkedIn | GitHub | chinmoy@email.com</p>
          </div>
          <div className="text-right">
            <p>Mobile: 8207008994</p>
            <p>West Bengal, India</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-4 border-black" />

        {/* Education */}
        <section>
          <h2 className="font-bold uppercase tracking-wide">Education</h2>

          <div className="flex justify-between mt-2">
            <div>
              <p className="font-semibold">Ramkrishna Mahato Government Engineering College</p>
              <p>Bachelor of Technology in Computer Science</p>
            </div>
            <div className="text-right">
              <p>Purulia, India</p>
              <p>August 2019 – July 2023</p>
            </div>
          </div>
        </section>

        <hr className="my-4 border-black" />

        {/* Experience */}
        <section>
          <h2 className="font-bold uppercase tracking-wide">Experience</h2>

          {/* Job 1 */}
          <div className="mt-3">
            <div className="flex justify-between">
              <p className="font-semibold">Fusion Techlab Private Limited</p>
              <p>Kolkata, India</p>
            </div>

            <div className="flex justify-between italic">
              <p>React Native Developer — React Native, JavaScript, REST APIs</p>
              <p>February 2025 – Present</p>
            </div>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Developed and maintained cross-platform mobile applications using React Native.</li>
              <li>Integrated RESTful APIs and implemented real-time features using Socket.IO.</li>
              <li>Optimized performance and improved user experience.</li>
              <li>Managed deployment and production releases.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mt-4">
            <div className="flex justify-between">
              <p className="font-semibold">Symlink Technologies LLP</p>
              <p>Kolkata, India</p>
            </div>

            <div className="flex justify-between italic">
              <p>Software Developer — Node.js, Express, React</p>
              <p>Aug 2023 – Oct 2024</p>
            </div>

            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Developed RESTful APIs using Node.js and Express.</li>
              <li>Implemented JWT-based authentication and role-based access.</li>
              <li>Designed MySQL schema using Sequelize ORM.</li>
            </ul>
          </div>
        </section>

        <hr className="my-4 border-black" />

        {/* Projects */}
        <section>
          <h2 className="font-bold uppercase tracking-wide">Projects</h2>

          <div className="mt-2">
            <p className="font-semibold">Event Management Backend System</p>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Designed modular Express backend for event creation and booking workflows.</li>
              <li>Implemented JWT authentication and role-based access.</li>
              <li>Optimized MongoDB schema for performance.</li>
            </ul>
          </div>

          <div className="mt-3">
            <p className="font-semibold">Event Management Mobile Application</p>
            <ul className="list-disc ml-6 mt-1 space-y-1">
              <li>Built cross-platform mobile app using React Native.</li>
              <li>Implemented Socket.IO real-time event synchronization.</li>
              <li>Designed secure authentication and role management.</li>
            </ul>
          </div>
        </section>

        <hr className="my-4 border-black" />

        {/* Technical Skills */}
        <section>
          <h2 className="font-bold uppercase tracking-wide">Technical Skills</h2>

          <ul className="mt-2 space-y-1">
            <li>
              <strong>Languages:</strong> C++, JavaScript
            </li>
            <li>
              <strong>Technologies:</strong> Node.js, Express, React, Redux, Socket.IO, JWT, AWS (EC2, S3, RDS)
            </li>
            <li>
              <strong>Databases:</strong> MongoDB, MySQL, PostgreSQL
            </li>
            <li>
              <strong>Core CS:</strong> Data Structures, OOP, DBMS, OS, Networking, Linux
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
