import React from 'react'

export default function Services() {
  return (
    <>
    <div>
      <h1 className="text-3xl font-semibold text-center mb-4">
          Services
        </h1>
        <p className='text-gray-600 text-center p-4 '>
          We provide best services in town.  Which you need for your healthcare. Our professional Staff examine you perfectly. Medical and surgical services and the supporting laboratories, equipment and personnel that make up the medical and surgical mission of a hospital or hospital system.
        </p>
    </div>
    <div className="container mx-auto py-10 bg-[#a8f2ff] w-100 p-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
              className="w-16 h-16 mx-auto mb-4"
              src={require("./images/SearchDoctor.png")}
              alt="Service 1"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Search Doctor</h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis quam vel elit fringilla.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
              className="w-16 h-16 mx-auto mb-4"
              src={require("./images/pharmacy.png")}
              alt="Service 1"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Online Pharmacy</h2>
            <p className="text-gray-600">
              Sed euismod lectus eu nulla congue, a vehicula nulla vestibulum.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
              className="w-16 h-16 mx-auto mb-4"
              src={require("./images/Consultation.png")}
              alt="Service 1"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Consulatation</h2>
            <p className="text-gray-600">
            Sed euismod lectus eu nulla congue, a vehicula nulla vestibulum.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-4 mt-8">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
              className="w-16 h-16 mx-auto mb-4"
              src={require("./images/DetailInfo.png")}
              alt="Service 1"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Detail Info</h2>
            <p className="text-gray-600">
            Sed euismod lectus eu nulla congue, a vehicula nulla vestibulum.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
              className="w-16 h-16 mx-auto mb-4"
              src={require("./images/Emergency.png")}
              alt="Service 1"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Emergency Care</h2>
            <p className="text-gray-600">
              PraeSed euismod lectus eu nulla congue, a vehicula nulla vestibulum.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
              className="w-16 h-16 mx-auto mb-4"
              src={require("./images/Tracking.png")}
              alt="Service 1"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Tracking</h2>
            <p className="text-gray-600">
            Sed euismod lectus eu nulla congue, a vehicula nulla vestibulum.bero.
            </p>
          </div>
        </div>
      </div>
      <div className='text-center'><button className=" bg-blue-500 hover:bg-blue-600 text-white rounded-md px-4 py-2">
          Book Today
        </button></div>
    </div>
 
    </>
  )
}
