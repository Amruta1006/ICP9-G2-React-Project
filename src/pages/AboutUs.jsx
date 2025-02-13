import React from 'react';
import petimg from '../../src/assets/petimg.jpg';
import { Pets } from './PetData';
const AboutUs = ({organizationName})=>{
  return (
    <div className=' bg-gray-100 full-h-screen '>
    <img src={petimg} alt='pet image' className="w-[1600px] h-[500px] " />
    <div className='bg-white mt-3'>
    <h1 className='text-center text-4xl text-purple-600 bg-white'><b>About Us</b></h1>
    <p className='text-center mt-5 text-2xl bg-white'>
        Welcome to <span className='font-semobolad text-purple-500'>{organizationName}</span>, a loving home for pets in need. 
          Our mission is to connect rescue animals with caring individuals and families, ensuring every pet 
          finds a forever home filled with love and happiness.
      </p>
    </div> 
    <h2 className='text-center text-3xl m-5 text-purple-400'>LEADERSHIP TEAM</h2>
    <div className="flex flex-wrap justify-around">
      
      {Pets.map((userData, index)=>{
      const {name,role,avatar} = userData;

      return(
      <div className='bg-white shadow-lg m-5 px-5 py-2 rounded-lg w-[400px]' key={index}>
        <img src={avatar} className='w-full h-auto'/>
        
        <h1 className='text-center'>Name:{name}</h1>
        <p className='text-center'>Role:{role}
        </p>
      </div>)
      
    }
    )}</div>
    </div>
    
    
  )
}

export default AboutUs  