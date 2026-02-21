import React, { useState } from "react";

const Myself = () => {
  const [user, setUser] = useState({
    name: "Chinmoy Hembram",
    email: "chinmoy@email.com",
    phone: "8207008994",
    location: "West Bengal, India",
    college: "Ramkrishna Mahato Government Engineering College",
    degree: "B.Tech in Computer Science",
    skills: "React, Node.js, MySQL, Express",
    summary: "Passionate React Developer with experience in full-stack application development.",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 flex gap-6">
      {/* Form Section */}
      <div className="w-1/2 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-4">Edit Resume</h2>

        {Object.keys(user).map((key) => (
          <div key={key} className="mb-3">
            <label className="block text-sm font-medium capitalize">{key}</label>
            <input type="text" name={key} value={user[key]} onChange={handleChange} className="w-full border p-2 rounded mt-1" />
          </div>
        ))}
      </div>

      {/* Resume Preview */}
      <div className="w-1/2 bg-white p-8 shadow-lg text-sm">
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-blue-600">
          {user.email} | {user.phone}
        </p>
        <p>{user.location}</p>

        <hr className="my-4 border-black" />

        <h2 className="font-bold uppercase">Summary</h2>
        <p className="mt-1">{user.summary}</p>

        <hr className="my-4 border-black" />

        <h2 className="font-bold uppercase">Education</h2>
        <p className="mt-1 font-semibold">{user.college}</p>
        <p>{user.degree}</p>

        <hr className="my-4 border-black" />

        <h2 className="font-bold uppercase">Skills</h2>
        <p className="mt-1">{user.skills}</p>
      </div>
    </div>
  );
};

export default Myself;
