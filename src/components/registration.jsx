import React from 'react'

const Registration = () => {

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
            <form className='w-[450px] xs:w-full sd:w-full sm:p-4 mx-auto flex flex-col gap-4 sm:w-full!important xs:h-fit sd:h-fit xs:p-6 sd:p-6'>
                <h2 className='text-2xl font-bold'>Sign up to Dribble</h2>
                <div className="error text-start text-red-500">
                    <li>Username has already been taken</li>
                </div>
                <div className='flex gap-4 w-full' >
                    <div className='flex flex-col w-2/4'>
                        <label className='font-bold'>Name</label>
                        <input type="text" name="name" className='bg-slate-200 rounded pl-4 h-8 w-4/4 sm:w-full xs:w-full sd:w-full'/>
                    </div>
                    <div className='flex flex-col w-2/4'>
                        <label className='font-bold'>Username</label>
                        <input type="text" name="name" className='h-8 pl-4 bg-slate-200 rounded sm:w-full xs:w-full sd:w-full'/>
                    </div>
                </div>
                <div className='flex flex-col xs:w-full'>
                    <label className='font-bold'>Email</label>
                    <input type="text" name="name" className='h-8 pl-4 bg-slate-200 w-4/4 rounded sm:w-full xs:w-full'/>
                </div>
                <div className='flex flex-col xs:w-full'>
                    <label className='font-bold'>Password</label>
                    <input type="text" name="name" placeholder='6+ Characters' className=' h-8 pl-4 placeholder:font-semibold bg-slate-200 rounded sm:w-full xs:w-full'/>
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
