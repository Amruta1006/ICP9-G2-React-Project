import React, { useEffect, useState } from 'react';
import petimg1 from '../assets/AboutImages/aboutpet-1.jpg';
import petimg2 from '../assets/AboutImages/aboutpet-2.jpg';


import Amruta from '../assets/AboutImages/Amruta_Maskar.jpg';
import Abhishek from '../assets/AboutImages/Abhishek.jpg';
import Yash from '../assets/AboutImages/Yash_Yeole.jpg';
import Gitanjali from '../assets/AboutImages/Gitanjali_Sase.jpg';
import Juned from '../assets/AboutImages/Juned_Ansari.jpg';
import Bhakti from '../assets/AboutImages/Bhakti_Dhete.jpg';
import Tosif from '../assets/AboutImages/Tosif.jpg';
import Samiksha from '../assets/AboutImages/Samiksha_Wagaj.jpg';

const AboutUs = ({ organizationName }) => {
    const Teams = [
        { name: "Amruta Maskar", role: "Team Leader", avatar: Amruta },
        { name: "Abhishek Ugalmugale", role: "Pet Details", avatar: Abhishek },
        { name: "Yash Yeole", role: "Adopt a Pet", avatar: Yash },
        { name: "Gitanjali Sase", role: "User Dashboard", avatar: Gitanjali },
        { name: "Juned Ansari", role: "Contact Us", avatar: Juned },
        { name: "Bhakti Dethe", role: "How To Adopt", avatar: Bhakti },
        { name: "Tosif", role: "Success Stories", avatar: Tosif },
        { name: "Samiksha Wagaj", role: "About Page", avatar: Samiksha },
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
        <div className="bg-[#fdfaf3] min-h-screen ">
            <img src={petimg1} alt='pet image1' className='w-full h-[300px] sm:h-[350px] md:h-[500px] object-cover' />
            <h1 className='text-center text-3xl pt-4 font-semibold'>About Us</h1>
            <div className='bg-white mt-3'>
                <p className='text-xl font-semibold sm:text-xl md:text-2xl bg-white text-center'>
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

            <input type='text' placeholder='Search' className='w-2/3 p-2 ps-3 mb-5 bg-white block mx-auto rounded-lg text-2xl border border-gray-500'
                value={searchText} onChange={(e) => setSearchText(e.target.value)} />

            <div className='mb-5 text-center border border-gray-500 w-fit px-3 rounded-2xl mx-auto'>
                <span className='text-xl sm:text-2xl mb-2 sm:mr-4'>Filter By Position:</span>
                <select className='text-lg my-2 rounded-lg px-5' value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
                    <option value='all'>All</option>
                    {Teams.map((team) => (
                        <option value={team.role} key={team.role}>{team.role}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap justify-evenly">
                {filteredUsers.map((userData, index) => {
                    const { name, role, avatar } = userData;
                    return (
                        <div className='bg-white shadow-lg m-5 px-5 py-4 border-1 border-gray-300 rounded-lg w-[300px]' key={index}>
                            <img src={avatar} className='w-full h-[300px] object-contain' alt={name} />
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