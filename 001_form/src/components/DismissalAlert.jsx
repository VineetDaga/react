import React from 'react';

const DismissalAlert = (props) => {
  return (
    props.alert && <div className="relative transition-all duration-500 ease-in-out bg-green-500 text-white px-4 py-2 rounded shadow-md">
      <div className="flex justify-between items-center">

        <p>{props.alert.message}</p>
      
      </div>
    </div>
  );
};

export default DismissalAlert;
