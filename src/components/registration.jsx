import React from 'react'

const Registration = () => {
  return (
    <>
    <div className="container mx-auto h-screen w-full bg-black flex">
        <div className="registration-left h-screen w-2/6 bg-yellow-200 flex flex-col items-start justify-center pl-7">
            <h2 className='text-2xl pl-7 font-bold font-sans text-yellow-600'>Discover the world's top <br />
                Designers & Creatives.
            </h2>

            <img className='w-[400px]' src="Images/image1.png" alt="" />
        </div>

        <div className="registration-right h-screen w-2/3 bg-white pr-8 pt-8">
            <div className="sign-in text-right">Already a member? <span className='text-blue-500 cursor-pointer'>Sign In</span></div>
            <form className='w-[450px] mx-auto flex flex-col gap-4'>
                <h2 className='text-2xl font-bold'>Sign up to Dribble</h2>
                <div className="error text-start text-red-500">
                    <li>Username has already been taken</li>
                </div>
                <div className='flex gap-4' w-full>
                    <div className='flex flex-col w-2/4'>
                        <label className='font-bold'>Name</label>
                        <input type="text" name="name" className='bg-slate-200 rounded pl-4 h-8 w-4/4'/>
                    </div>
                    <div className='flex flex-col w-2/4'>
                        <label className='font-bold'>Username</label>
                        <input type="text" name="name" className='h-8 pl-4 bg-black bg-slate-200 rounded'/>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold'>Email</label>
                    <input type="text" name="name" className='h-8 pl-4 bg-slate-200 w-4/4 rounded'/>
                </div>
                <div className='flex flex-col'>
                    <label className='font-bold'>Password</label>
                    <input type="text" name="name" placeholder='6+ Characters' className=' h-8 pl-4 placeholder:font-semibold bg-slate-200 rounded'/>
                </div>
                <div className='flex space-x-2'>
                    <input type="checkbox" name="name" placeholder='6+ Characters' className='cursor-pointer h-8 pl-4 font-semibold bg-slate-200 rounded'/>
                    <label className='font-medium text-gray-500'>Creating an account means you're okay with our <span  className='text-blue-600 cursor-pointer'>Terms of Service</span>, <span className='text-blue-600 cursor-pointer'>Privacy Policy</span>, and our default <span className='text-blue-600 cursor-pointer'>Notification Settings.</span></label>
                </div>

                <button className='flex items-center bg-pink-500 h-8 text-center justify-center rounded-md w-40 text-white font-bold'>Create Account</button>
                <label className='font-medium text-gray-400'>This site is protected by reCAPTCHA and the Google <span  className='text-blue-600 cursor-pointer'>Privacy Policy</span> and <span  className='text-blue-600 cursor-pointer'>Terms of Service</span> apply.</label>

            </form>
        </div>
    </div>
    </>
  )
}

export default Registration
