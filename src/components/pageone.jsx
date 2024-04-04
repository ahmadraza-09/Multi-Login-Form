import React from 'react'

const PageOneComp = () => {
  return (
    <>
    <div className='h-screen w-full my-auto container flex items-center justify-center xl:items-center sd:w-full xs:w-full xs:p-4 xs:m-auto sd:m-auto'>
      <form className='w-[450px] sd:w-fit flex flex-col gap-4 sd:my-auto xs:my-auto'>
        <h1 className='font-extrabold text-2xl xs:text-xl'>Welcome! Let's Create your profile</h1>
        <label className='text-gray-500 text-xs'>Let others get to know you better! You can do these later.</label>

        <div className='flex flex-col gap-4'>
            <h2 className='font-bold'>Add an avatar</h2>
            <div className='flex space-x-6'>
                <div className='w-[100px] h-[100px] border-2 border-dashed border-gray-400 text-gray-500 rounded-full flex items-center justify-center xs:w-10 xs:h-10'><i class="fa-solid fa-camera"></i></div>
                <div className='flex flex-col gap-4'>
                    <input type="file" id='actual-btn' hidden/>
                    <label for="actual-btn" className='border-[1px] border-black-900 h-8 w-28 flex text-center justify-center items-center text-xs rounded-lg font-semibold cursor-pointer hover:bg-gray-100 transition-all'>Choose Image</label>
                    <label className='text-gray-500 flex items-center justify-center gap-2 text-sm'><i class="fa-solid fa-angle-right"></i> or choose one of our defaults</label>
                </div>
            </div>
            <h2 className='font-bold'>Add your location</h2>
            <input type="text" className='border-b-2 pb-2 outline-none placeholder:font-medium placeholder:text-xs' placeholder='Enter a location'/>
            <button className='flex items-center bg-pink-500 h-8 text-center justify-center rounded-md w-48 text-white font-bold mt-6'>Next</button>
        </div>
      </form>
    </div>
    </>
  )
}

export default PageOneComp
