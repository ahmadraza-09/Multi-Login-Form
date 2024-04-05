import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const PageThreeComp = () => {

  const navigate = useNavigate();

  const [isChecked, setIsChecked] = useState(false);
  const [isBoxOneChecked, setIsBoxOneChecked] = useState(false);
  const [isBoxTwoChecked, setIsBoxTwoChecked] = useState(false);
  const [isBoxThreeChecked, setIsBoxThreeChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleOneChange = () => {
    setIsBoxOneChecked(!isBoxOneChecked);
  };

  const handleTwoChange = () => {
    setIsBoxTwoChecked(!isBoxTwoChecked);
  };

  const handleThreeChange = () => {
    setIsBoxThreeChecked(!isBoxThreeChecked);
  };

  return (
    <>
    <div className='h-screen w-full container flex items-center justify-center relative m-auto'>
      <i class="fa-solid fa-angle-left text-xl absolute top-4 left-44 bg-gray-200 w-8 h-8 text-center justify-center items-center flex cursor-pointer md:left-10 sm:left-10 sd:left-6 xs:left-4" onClick={() => {navigate('/pagetwo')}}></i>
      <form className='w-[620px] border-black mx-auto my-auto flex flex-col items-center gap-4 sd:p-4 xs:p-4'>
        <h1 className='font-extrabold text-2xl text-center sd:mt-10 xs:mt-10 xs:text-xl'>Please verify your email...</h1>
        <i class="fa-solid fa-envelope-circle-check text-pink-500 text-8xl xs:text-4xl"></i>
        <label className='text-gray-500 text-center text-sm'>Please verify your email address. We've sent a confirmation email to:</label>
        <label className='text-black text-center font-bold text-sm'>ahmadraza20082003@gmail.com</label>
        <label className='text-gray-500 text-center text-sm'>Click the confirmation link in that email to begin ussing Dribbble.</label>
        <label className='text-gray-500 text-center text-sm'>Didn't receive the email? Check your spam folder, it may have been caught by a filter. if you still don't see it. you can <span className='text-pink-500 font-bold cursor-pointer'>resend the confirmation email</span>.</label>
        <label className='text-gray-500 text-center text-sm'>Wrong email address? <span className='text-pink-500 font-bold cursor-pointer'>Change it.</span></label>
      </form>
    </div>
    </>
  )
}

export default PageThreeComp
