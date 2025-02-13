import React from 'react'

const AboutUs = ({organizationName})=>{
  return (
    <div className=' bg-gray-100 full-h-screen'>
    <div className='bg-white mt-3'>
    <h1 className='text-center text-4xl text-purple-600 bg-white'><b>About Us</b></h1>
    <p className='text-center mt-5 text-2xl bg-white'>
        Welcome to <span className='font-semobolad text-purple-500'>{organizationName}</span>, a loving home for pets in need. 
          Our mission is to connect rescue animals with caring individuals and families, ensuring every pet 
          finds a forever home filled with love and happiness.
      </p>
    </div> 
    </div>
    
  )
}

export default AboutUs  