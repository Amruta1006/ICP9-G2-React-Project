import React, { useEffect, useState } from 'react';
import petimg from '../../src/assets/petimg.jpg';
import { Teams } from './TeamsData';



const AboutUs = ({organizationName})=>{
const [searchText, setsearchText] = useState("");
const [filterdUsers, setfilterdUsers] = useState(Teams);

useEffect(()=>{
  if(!searchText){
    setfilterdUsers(Teams);
    return;
  }




  const tempfilterdUsers = Teams.filter((team)=>{
    if(team.name.toLocaleLowerCase().includes(searchText)){
      return true;
    }
    else if(team.role.toLocaleLowerCase().includes(searchText))
    {
      return true;
    }
    else{
      return false;
      }
  })

  setfilterdUsers(tempfilterdUsers);

},[searchText])


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

    <input type='text' placeholder='Search' className='w-2/3 p-2 mb-5 bg-white block mx-auto rounded-lg text-2xl border border-purple-100' value={searchText}
    onChange={(e)=>setsearchText(e.target.value)} />
    
    
    <div className="flex flex-wrap justify-around">
      
      {filterdUsers.map((userData, index)=>{
      const {name,role,avatar} = userData;

      return(
      <div className='bg-white shadow-lg m-5 px-5 py-2 rounded-lg w-[400px]' key={index}>
        <img src={avatar} className='w-full h-auto'/>
        
        <h1 className='text-center font-bold text-lg m-3'>{name}</h1>
        <p className='text-center'>Role:{role}
        </p>
      </div>)
      
    }
    )}</div>
    </div>
    
    
  )
}

export default AboutUs  