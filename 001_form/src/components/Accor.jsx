import React, { useState } from 'react'

function Accor({title ="Our Mission"}) {
  const [isOpen ,setIsOpen] = useState(false)
  const toggleAccordion = () => {
    setIsOpen(!isOpen);

  };
  return (
    <div className="mt-4">
            <button
              onClick={toggleAccordion}
              className={`w-full rounded-md shadow-md py-4 px-4 flex justify-between bg-blue-300 dark:bg-red-500 dark:text-white items-center focus:outline-none`}>
              <span className={`text-lg`}>{title}</span>
              <svg
                className={`w-6 h-6 transition-transform duration-300 transform ${
                  isOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                />
              </svg>
            </button>
            {isOpen && (
              <div className={`mt-4 text-md`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus ante et velit porta, ut maximus magna gravida. Aenean ac massa eget erat vehicula iaculis.
                </p>
              </div>
            )}
          </div>
  )
}

export default Accor


