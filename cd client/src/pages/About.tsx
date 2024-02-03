// About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <div className="bg-purple-900 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-lg">
          I am a passionate software developer with a strong background in
          creating innovative solutions.
        </p>
        <p className="text-lg mt-4">
          My goal is to contribute to the world of technology and make a
          positive impact through my coding skills.
        </p>
      </div>
    </div>
  );
};

export default About;
