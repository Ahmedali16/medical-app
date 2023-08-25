// import React from 'react'

// export default function Customer() {
//   return (
//     < >
//     <div className='p-10 md:mx-20  px-auto'>
//     <div className='p-4  text-white w-full rounded-xl bg-blue-400'>  
   
//       <h1 className='text-3xl font-semibold  text-center col'>  What our customers are saying </h1>
    
//       <div className='w-20 mx-auto mt-3 '> <hr /></div>
//       <div className='flex md:flex-row col p-3 md:ml-7 '>
//         <div className='md:w-1/2 flex md:flex-row  items-center flex-col'>
//         <img src={require("./images/owner.jpeg")} className='h-20 w-20 m-2 rounded-xl' alt="no image" />
//          <h3 className=' font-semibold text-2xl m-2'>Ahmed ali</h3>
//          <p>( Website Founder )</p>
//         </div>
//         <div className='md:w-1/2 md:flex-row  row items-center text-center md:mr-6'>Our patients encourage Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores earum, voluptatibus voluptatum minus quia doloremque unde quas facilis hic.</div>
//         </div> 
         
//     </div>
//     </div>
  
//     </>
//   )
// }

import React from 'react'

export default function Customer() {
  return (
    < >
    <div className='p-10 md:mx-20  px-auto'>
    <div className='p-4  text-white w-full rounded-xl bg-blue-400'>  
   
      <h1 className='text-3xl font-semibold  text-center col'>  What our customers are saying </h1>
    
      <div className='w-20 mx-auto mt-3 '> <hr /></div>
      <div className='flex flex-col md:flex-row items-center '>
        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center items-center'>
        <img src={require("./images/owner.jpeg")} className='h-20 w-20 m-2 rounded-xl' alt="no image" />
         <h3 className=' font-semibold text-2xl m-2'>Ahmed ali</h3>
         <p>( Website Founder )</p>
        </div>
        <div className='w-full md:w-1/2 p-4 flex flex-col justify-center items-center'>Our patients encourage Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores earum, voluptatibus voluptatum minus quia doloremque unde quas facilis hic.</div>
        </div> 
         
    </div>
    </div>
  
    </>
  )
}


