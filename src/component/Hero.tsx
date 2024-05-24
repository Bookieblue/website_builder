import React from "react";

const Hero = () => {
  return (
    
    <section className="w-full lg:w-1/2 p-4 bg-white rounded-lg shadow-lg h-fit pb-20 mb-10 lg:mb-0">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Welcome to Our Calculator!
      </h2>
      <p className="text-lg mb-4 text-gray-700">
        Our calculator is a versatile tool designed to help you with your
        everyday mathematical needs. Whether you're performing simple arithmetic
        calculations or tackling more complex mathematical operations, our
        calculator is here to assist you.
      </p>
      <div className="border-t-2 border-gray-200 mt-8 pt-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">Key Features:</h3>
        <ul className="list-disc list-inside  text-gray-700">
          <li>
            Basic arithmetic operations: addition, subtraction, multiplication,
            division.
          </li>
          <li>
            Special functions: square root, percentage, factorial, and more.
          </li>
          <li>Clear and intuitive interface for easy usability.</li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
