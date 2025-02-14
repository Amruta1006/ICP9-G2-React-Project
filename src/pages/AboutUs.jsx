import React, { useEffect, useState } from 'react';
import petimg from '../../src/assets/petimg.jpg';
import petimg2 from '../../src/assets/petimg2.jpg';

import { Teams } from './TeamsData';



const AboutUs = ({organizationName})=>{
const [searchText, setsearchText] = useState("");
const [filterdUsers, setfilterdUsers] = useState(Teams);
const [filterRole, setfilterRole] = useState("");
 
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

useEffect(()=>{
  if(!filterRole){
    setfilterdUsers(Teams);
    return;
    }
    const tempfilterdUsers = Teams.filter((team)=>{
      if(filterRole && team.role=== filterRole){
        return true;
        }
        else{
          return false;
          }
    });
    setfilterdUsers(tempfilterdUsers);
},[filterRole])


  return (
    <div className=' bg-white full-h-screen '>
    <img src={petimg} alt='pet image' className="w-[1600px] h-[400px] " />
    <div className='bg-white mt-3'>
    
    <p className='text-center mt-5 text-2xl bg-white'>
        Welcome to <span className='font-semobolad text-purple-600'>{organizationName}</span>, a loving home for pets in need. 
          
      </p>
    </div> 
    
   
    <div className='bg-gray-100 mt-5 flex justify-around'>
    
    <ui className=' text-2xl mt-20 text-purple-400 text-justify'>
      <h2 className='txet-2xl m-2 ml-15 text-black'>Our Mission</h2>
      <li>To prevent cruelty to animals</li>
      <li>To protect them from injury.</li>
      <li>To promote animal care and welfare.</li>
      <li>To foster the human-animal relationship.</li>
      <li>To inculcate humanistic values among humans.</li>
    </ui>

<img src={petimg2} alt='pet image2' className='w-[500px] m-4'/>
</div>

<div className='p-20'>
  <h2 className='text-center text-4xl text-purple-500 py-10 border-2 border-purple-300 border-dotted rounded-md'>Animal Count</h2>
</div>


    <h2 className='text-center text-3xl m-5 text-purple-500'><b>Our TEAM</b></h2>
    
    <input type='text' placeholder='Search' className='w-2/3 p-2 mb-5 bg-white block mx-auto rounded-lg text-2xl border border-purple-100' value={searchText}
    onChange={(e)=>setsearchText(e.target.value)} />
       <div className='ml-150 mb-5 '>
      <span className='text-2xl'>Filter By Position:</span>
      <select className='text-lg my-2  rounded-lg px-5 text-purple-500' value={filterRole}
      onChange={(e)=>setfilterRole(e.target.value)}>


      
      
        <option value='all'>all</option>
        {
          Teams.map((team)=>{
            return <option value={team.role} key={team.role}>{team.role}</option>
          })
        }
       
        
      </select>
      </div>
    


    
    
    <div className="flex flex-wrap justify-around bg-gray-100">
      
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