import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'

const Profile = () => {
    const [bannerUrl,setBannerUrl]=useState("https://images.squarespace-cdn.com/content/v1/65fa1b3bde7d9316f574931d/be33761c-4056-4c72-8da9-7c7ec315da99/2025+WaterCar+EV+%281500+x+400+px%29.png")

    const [profileUrl,setProfileUrl]=useState("https://cdn-icons-png.flaticon.com/512/6522/6522516.png")

    const handleBannerChange =(event:any)=>{
        const file = event.target.files[0]
        if(file){
            setBannerUrl(URL.createObjectURL(file));
        }
    }

    const handleProfileChange= (event:any)=>{
        const file=event.target.files[0];
        if(file){
            setProfileUrl(URL.createObjectURL(file))
        }
    }

  return (
    <div className='relative w-[95.3%] ml-[5rem]'>
        <div className='relative'>
            <img src={bannerUrl} alt="background image" className='w-full h-80 object-cover' />
            <button className='absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>
                <label htmlFor="banner-upload" className=' cursor-pointer'>
                    <FaCamera size={24} />
                </label>
                <input type="file" id='banner-upload' accept='image/*' className='hidden' onChange={handleBannerChange}/>
            </button>
        </div>
        {/* Logo */}
        <div className='flex items-center ml-4 mt-[2rem]'>
            <img src={profileUrl} className='w-40 h-40 object-cover rounded-full border-white relative' alt="Channel Logo" />
            <button className='absolute ml-[4rem] z-10 mt-[8rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600'>
                <label htmlFor="profile-upload" className='cursor-pointer'>
                    <FaCamera size={24} />
                </label>
                <input type="file" id='profile-upload' accept='image/*' className='hidden' onChange={handleProfileChange} />
            </button>
        </div>

    </div>
  )
}

export default Profile