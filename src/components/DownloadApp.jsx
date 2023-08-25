


import React from 'react';

const DownloadApp = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
    
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-semibold text-center mb-4">
       Download Our Mobile Apps
        </h1>
        <p className="text-gray-600 text-center mb-4 p-5">
          We provide you the best medical services. Our highly professional staff is here to take care of you.What is the definition of a health care hospital?
Hospital | Definition, History, Types, Services, & Facts ...
hospital, an institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process. The modern hospital also often serves as a centre for investigation and for teaching. hospital.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
         Click here to download
        </button>
      </div>
      <div className="w-full md:w-1/2 p-4 flex justify-center">
      <img
          className="max-w-xm h-auto p-10"
          src={require("./images/DownloadOurApps.png")}
          alt="Healthcare Image"
        />
      </div>
      
    </div>
  );
};

export default DownloadApp;
