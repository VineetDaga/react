import React, { useEffect, useState } from 'react';
import Accor from './Accor';

const AboutSection = ({showalert}) => {
    const [mode,setMode] = useState("Dark")

   
    const tooglemode = ()=>{
      if(mode === "Dark"){
        setMode("White");
        document.documentElement.classList.add("dark");
        showalert("Dark mode enabled", "Success");
      }
      else{
        setMode("Dark");
        document.documentElement.classList.remove("dark");
        showalert("White mode enabled", "Failure");
      }

    }

  return (
    <section className="bg-gray-100 text-black dark:bg-gray-900 dark:text-gray-400" id='one'>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`text-3xl font-extrabol sm:text-4xl`}>About Us</h2>
          <p className={` text-lg mt-2`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi laboriosam, quibusdam optio, quidem eveniet ipsam animi at veniam aliquam deleniti velit ex mollitia inventore voluptas.
          </p>
          <Accor title='Our Mission' />
          <Accor title='Our Members' />
          <Accor title='Contact Us' />
          <button className={`bg-green-500 hover:bg-green-700 text-black dark:bg-blue-500 dark:hover:bg-blue-700 dark:text-gray-400 font-bold py-2 px-4 rounded m-1`}
              onClick={tooglemode}>
            Switch to {mode} Mode
          </button>
          
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
