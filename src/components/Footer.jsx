import React from 'react'


export default function Footer() {
  return (
    <div className='bg-blue-400 p-10  flex flex-col md:flex-row items-center text-white'>
           
            <div className='w-full md:w-1/4 p-4 flex justify-center text-center mx-auto'> <ul>
                <li className='font-semibold text-2xl m-3'>Ahmed Clinic</li>
                <li className='m-3 '>Ahmed Clinic provides you the best Quality and best Medical care You need for your bettere life</li>
                <li className='m-3'>Medical Care</li>
                <li className='m-3'>@Ahmedali16   PVT LTD 2023</li>
                
            </ul></div>
  
        <div className='w-full md:w-1/4 p-4 flex justify-center'> <ul>
                <li className='font-semibold text-2xl m-3'>Region</li>
                <li className='m-3'>Pakistan</li>
                <li className='m-3'>Russia</li>
                <li className='m-3'>Japanese</li>
                <li className='m-3'>Canada</li>
            </ul></div>
        <div className=' w-full md:w-1/4 p-4 flex justify-center'> <ul>
                <li className='font-semibold text-2xl m-3'>Company</li>
                <li className='m-3'>Apps</li>
                <li className='m-3'>  Find a Doctor</li>
                <li className='m-3'>About</li>
                <li className='m-3'>Testimonials</li>
            </ul></div>
        <div className='w-full md:w-1/4 p-4 flex justify-center'> <ul>
                <li className='font-semibold text-2xl m-3'>Help</li>
                <li className='m-3'>Help center</li>
                <li className='m-3'>Chat Support</li>
                <li className='m-3'>Email-service</li>
                <li className='m-3'>Calling</li>
            </ul></div>
        
            <div className='text-center text-white bg-blue-500 text-2xl'>@Medical-Care  -- Ahmedali16</div>  
          

    </div>
  )
}

