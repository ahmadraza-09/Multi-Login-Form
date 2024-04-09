import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Registration = () => {
    
    const navigate = useNavigate();

    const [name, getName] = useState('');
    const [username, getUsername] = useState('');
    const [email, getEmail] = useState('');
    const [password, getPassword] = useState('');
    const [formerror, getFormError] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const nameregex = /^[a-z A-Z]{2,15}$/;
    const usernameregex = /^[a-z A-Z]{2,15}$/;
    const emailregex = /^[a-z A-Z 0-9]+@[a-z]+\.[a-z]{2,6}$/; 
    const passwordregex = /^[0-9]{8}$/;

     const nameHandler = (event) => {
        getName(event.target.value);
    }

    const usernameHandler = (event) => {
        getUsername(event.target.value);
    }

    const emailHandler = (event) => {
        getEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        getPassword(event.target.value);
    }

    const checkboxHandler = () => {
        setIsChecked(!isChecked);
    };

    const submitHandler = (e) => {
    e.preventDefault(); {
        if (name === '') {
            getFormError("Enter your Name");
            return false;
        } else if (!name.match(nameregex)) {
            getFormError("Enter Name in Letters");
            return false;
        } else if (username === '') {
            getFormError("Enter your username");
            return false;
        } else if (!username.match(usernameregex)) {
            getFormError("Enter your username in Letters");
            return false;
        } else if (email === '') {
            getFormError("Enter your Email");
            return false;
        } else if (!email.match(emailregex)) {
            getFormError("Enter Valid Email");
            return false;
        } else if (password === '') {
            getFormError("Enter your Password");
            return false;
        } else if (password.match(passwordregex)) {
            getFormError("Password must be at least 8 characters");
            return false;
        } else if (!isChecked) {
            getFormError("Please agree to the terms and conditions.");
            return false;
        } else {
            navigate('/pageone')
        }
      }
    }

  return (
    <>
    <div className="mx-auto h-screen w-full flex sd:flex-col">
        <div className="registration-left h-screen w-2/6 bg-yellow-200 flex flex-col items-start justify-center pl-7 sm:pl-0 xs:hidden sd:w-full sd:flex-row sd:items-center sd:h-[250px]">
            <h2 className='text-2xl pl-7 font-bold font-sans text-yellow-600'>Discover the world's top <br />
                Designers & Creatives.
            </h2>

            <img className='w-[400px] sd:w-[300px]' src="Images/image1.png" alt="" />
        </div>

        <div className="registration-right h-screen w-2/3 bg-white pr-8 pt-8 sd:pr-0 xs:pr-0 xs:pt-4 sd:pl-0 xs:pl-0 sm:pr-2 xs:w-full sd:w-full xs:h-fit sd:fit">
            <div className="sign-in text-right xs:mr-4 sd:mr-4">Already a member? <span className='text-blue-500 cursor-pointer'>Sign In</span></div>
            <form className='w-[450px] xs:w-full sd:w-full sm:p-4 mx-auto flex flex-col gap-4 sm:w-full!important xs:h-fit sd:h-fit xs:p-6 sd:p-6' method="post" onSubmit={submitHandler}>
                <h2 className='text-2xl font-bold'>Sign up to Dribble</h2>
                <div className="error text-start text-red-500">
                    <li className='list-none'>{formerror}</li>
                </div>
                <div className='flex gap-4 w-full' >
                    <div className='flex flex-col w-2/4'>
                        <label className='font-bold'>Name</label>
                        <input type="text" name="name" value={name} onChange={nameHandler} className='bg-slate-200 rounded pl-4 h-8 w-4/4 sm:w-full xs:w-full sd:w-full'/>
                    </div>
                    <div className='flex flex-col w-2/4'>
                        <label className='font-bold'>Username</label>
                        <input type="text" name="username" value={username} onChange={usernameHandler} className='h-8 pl-4 bg-slate-200 rounded sm:w-full xs:w-full sd:w-full'/>
                    </div>
                </div>
                <div className='flex flex-col xs:w-full'>
                    <label className='font-bold'>Email</label>
                    <input type="email" name="email" value={email} onChange={emailHandler} className='h-8 pl-4 bg-slate-200 w-4/4 rounded sm:w-full xs:w-full'/>
                </div>
                <div className='flex flex-col xs:w-full'>
                    <label className='font-bold'>Password</label>
                    <input type="password" name="password" value={password} onChange={passwordHandler} placeholder='6+ Characters' className=' h-8 pl-4 placeholder:font-semibold bg-slate-200 rounded sm:w-full xs:w-full'/>
                </div>
                <div className='flex space-x-2'>
                    <input type="checkbox" name="checkbox" checked={isChecked} onChange={checkboxHandler} className='checkbox cursor-pointer h-8 pl-4 font-semibold bg-slate-200 rounded'/>
                    <label className='font-medium text-gray-500'>Creating an account means you're okay with our <span  className='text-blue-600 cursor-pointer'>Terms of Service</span>, <span className='text-blue-600 cursor-pointer'>Privacy Policy</span>, and our default <span className='text-blue-600 cursor-pointer'>Notification Settings.</span></label>
                </div>

                <button className='flex items-center bg-pink-500 h-8 text-center justify-center rounded-md w-40 text-white font-bold' onClick={submitHandler}>Create Account</button>
                <label className='font-medium text-gray-400'>This site is protected by reCAPTCHA and the Google <span  className='text-blue-600 cursor-pointer'>Privacy Policy</span> and <span  className='text-blue-600 cursor-pointer'>Terms of Service</span> apply.</label>

            </form>
        </div>
    </div>
    </>
  )
}

export default Registration
