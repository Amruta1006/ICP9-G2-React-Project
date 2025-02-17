import React, { useEffect, useState } from 'react';
import petimg1 from '../assets/AboutImages/aboutpet-1.jpg';
import petimg2 from '../assets/AboutImages/aboutpet-2.jpg';

const AboutUs = ({ organizationName }) => {
    const Teams = [
        {
           "name": "Rajesh Sharma",
           "role": "Founder & CEO", 
           "avatar": "https://i.pravatar.cc/150?img=3"
        },
        {
           "name": "Priya Deshmukh",
            "role": "Co-Founder & COO",
             "avatar": "https://i.pravatar.cc/150?img=4"
        },
        {
           "name": "Amit Patil", 
           "role": "CTO (Chief Technology Officer)", 
           "avatar": "https://i.pravatar.cc/150?img=5" 
        },
        { 
          "name": "Neha Verma", 
          "role": "Chief Marketing Officer", 
          "avatar": "https://i.pravatar.cc/150?img=6"
        },
        {
           "name": "Sandeep Joshi", 
           "role": "Head of Operations", 
           "avatar": "https://i.pravatar.cc/150?img=7"
         },
        {
           "name": "Ananya Mehta", 
           "role": "Head of Customer Support",
            "avatar": "https://i.pravatar.cc/150?img=8"
        },
        {
           "name": "Vikram Singh", 
           "role": "Finance Director", 
           "avatar": "https://i.pravatar.cc/150?img=9" 
        },
        { 
          "name": "Pooja Iyer",
           "role": "HR Manager", 
           "avatar": "https://i.pravatar.cc/150?img=10" 
        },
        {
           "name": "Ravi Kulkarni",
            "role": "Head of Animal Welfare", 
            "avatar": "https://i.pravatar.cc/150?img=11" 
        }
    ];


    const [searchText, setSearchText] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(Teams);
    const [filterRole, setFilterRole] = useState("");

    useEffect(() => {
        if (!searchText) {
            setFilteredUsers(Teams);
            return;
        }
        const tempFilteredUsers = Teams.filter((team) =>
            team.name.toLowerCase().includes(searchText.toLowerCase()) ||
            team.role.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredUsers(tempFilteredUsers);
    }, [searchText]);

    useEffect(() => {
        if (!filterRole || filterRole === 'all') {
            setFilteredUsers(Teams);
            return;
        }
        const tempFilteredUsers = Teams.filter((team) => team.role === filterRole);
        setFilteredUsers(tempFilteredUsers);
    }, [filterRole]);

    return (
        <div className="bg-[#fdfaf3] full-h-screen">
            <img src={petimg1} alt='pet image1' className='w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover' />
            <h1 className='text-center'>About Us</h1>
            <div className='bg-white mt-3'>
                <p className='mt-5 text-xl sm:text-2xl md:text-3xl bg-white text-center'>
                    Welcome to <span className='font-semibold text-black'>{organizationName}</span>, a loving home for pets in need.
                </p>
            </div>
            <div className='bg-gray-100 mt-5 flex flex-col md:flex-row justify-around items-center p-5'>
                <ul className='text-2xl text-black text-left md:w-1/2 space-y-2'>
                    <h2 className='text-2xl m-2 text-black font-bold'>Our Mission</h2>
                    <li>To prevent cruelty to animals</li>
                    <li>To protect them from injury.</li>
                    <li>To promote animal care and welfare.</li>
                    <li>To foster the human-animal relationship.</li>
                    <li>To inculcate humanistic values among humans.</li>
                </ul>
                <img src={petimg2} alt='pet image2' className='w-full md:w-[500px] m-4 rounded-lg shadow-lg' />
            </div>
            <h2 className='text-center text-3xl m-5 text-black'><b>OUR TEAM</b></h2>

            <input type='text' placeholder='Search' className='w-2/3 p-2 mb-5 bg-white block mx-auto rounded-lg text-2xl border border-purple-100'
                value={searchText} onChange={(e) => setSearchText(e.target.value)} />

            <div className='mb-5 text-center sm:items-center sm:justify-center'>
                <span className='text-xl sm:text-2xl mb-2 sm:mr-4'>Filter By Position:</span>
                <select className='text-lg my-2 rounded-lg px-5' value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
                    <option value='all'>All</option>
                    {Teams.map((team) => (
                        <option value={team.role} key={team.role}>{team.role}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap justify-around">
                {filteredUsers.map((userData, index) => {
                    const { name, role, avatar } = userData;
                    return (
                        <div className='bg-white shadow-lg m-5 px-5 py-2 rounded-lg w-[400px]' key={index}>
                            <img src={avatar} className='w-full h-auto' />
                            <h1 className='text-center font-bold text-lg m-3'>{name}</h1>
                            <p className='text-center'>Role: {role}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AboutUs;