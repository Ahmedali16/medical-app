import React from 'react'

export default function LatestArticle() {
  return (
    <div className='p-4'>
    <div className='mb-3'>
      <h1 className='text-center font-semibold text-3xl'>Check Out Our Latest News</h1>
      <hr  className='text-black w-60 mx-auto'/>
    </div>
    <div className="flex flex-wrap -mx-4 mt-8">
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
              className="w-full h-25 mx-auto mb-4"
              src={require("./images/MaskGroup.png")}
              alt="Service 1"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Desease Detection  check up in the Labortary</h2>
            <p className="text-gray-600">
            Sed euismod lectus eu nulla congue, a vehicula nulla vestibulum.
            </p>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2'>See more</button>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
              className="w-full h-25 mx-auto mb-4"
              src={require("./images/MaskGroup(1).png")}
              alt="Service 1"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Herbal Medcine that are safe for consuption</h2>
            <p className="text-gray-600">
              PraeSed euismod lectus eu nulla congue, a vehicula nulla vestibulum.
            </p>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2'>Read more</button>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-lg p-6 shadow-md">
          <img
              className="w-full h-25 mx-auto mb-4"
              src={require("./images/MaskGroup(2).png")}
              alt="Service 1"
            />
            <h2 className="text-xl font-semibold mb-2 text-center">Natural Care for your heathy and shiny skin</h2>
            <p className="text-gray-600">
            Sed euismod lectus eu nulla congue, a vehicula nulla vestibulum.bero.
            </p>
            <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded m-2'>Read more</button>
          </div>
        </div>
      </div>
      <button className=' block bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto'>View all</button>

      
    </div>
  )
}
