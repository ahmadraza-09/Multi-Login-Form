import React from 'react'
import { useState } from 'react';

const PageTwoComp = () => {

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
    <div className='h-screen w-full container flex items-center justify-center relative'>
        <i class="fa-solid fa-angle-left text-xl absolute top-4 left-44 bg-gray-200 w-8 h-8 text-center justify-center items-center flex cursor-pointer"></i>
      <form className='w-[650px] border-black mx-auto my-auto flex flex-col items-center'>
        <h1 className='font-extrabold text-2xl text-center'>What  brings you to Dribble?</h1>
        <label className='text-gray-500 text-xs text-center'>Select the options that best describe you. Don't worry, you can explore other options later.</label>

        <div className='flex gap-6 mt-16'>
            <div className={`flex flex-col border w-60 h-60 ${isBoxOneChecked ? 'border-2 border-pink-500' : ''} shadow-md rounded-xl text-center items-center justify-center gap-2 p-4`}>
                <img src="Images/image2.png" className='h-[100px]' alt="" />
                <h3 className='font-bold'>I'm a designer looking to share my work</h3>
                <p className={`text-xs text-gray-500 ${isBoxOneChecked ? '' : 'hidden'}`}>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                <input type="checkbox" onClick={handleOneChange} class={`form-checkbox text-pink-600 cursor-pointer h-4 w-4 ${isBoxOneChecked ? 'mb-20' : ''}`}/>
            </div>
            <div className={`flex flex-col border w-60 h-60 ${isBoxTwoChecked ? 'border-2 border-pink-500' : ''} shadow-md rounded-xl text-center items-center justify-center gap-2 p-4`}>
                <img src="Images/image3.png" className='h-[100px]' alt="" />
                <h3 className='font-bold'>I'm looking to hire a designer</h3>
                <p className={`text-xs text-gray-500 ${isBoxTwoChecked ? '' : 'hidden'}`}>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                <input type="checkbox" onClick={handleTwoChange} class={`form-checkbox text-pink-600 cursor-pointer h-4 w-4 ${isBoxTwoChecked ? 'mb-20' : ''}`}/>
            </div>
            <div className={`flex flex-col border w-60 h-60 ${isBoxThreeChecked ? 'border-2 border-pink-500' : ''} shadow-md rounded-xl text-center items-center justify-center gap-2 p-4`}>
                <img src="Images/image4.png" className='h-[100px]' alt="" />
                <h3 className='font-bold'>I'm a looking for design inspiration</h3>
                <p className={`text-xs text-gray-500 ${isBoxThreeChecked ? '' : 'hidden'}`}>With over 7 million shots from a vast community of designers, Dribbble is the leading source for design inspiration.</p>
                <input type="checkbox" onClick={handleThreeChange} class={`relative text-pink-600 cursor-pointer h-4 w-4 checked:bg-pink-600 ${isBoxThreeChecked ? 'mb-20' : ''}`}/>
            </div>
        </div>

        <div className='flex flex-col items-center justify-center mt-10 gap-4'>
          <h3 className={`font-bold text-sm ${isBoxThreeChecked || isBoxTwoChecked || isBoxOneChecked ? '' : 'invisible'}`}>Anything else? You can select</h3>
          <button className={`flex items-center bg-pink-500 h-8 text-center justify-center rounded-md w-48 text-white font-bold ${isBoxThreeChecked || isBoxTwoChecked || isBoxOneChecked ? '' : 'disabled:bg-pink-300'}`} disabled={!isBoxOneChecked && !isBoxTwoChecked && !isBoxThreeChecked}>Finish</button>
          <h3 className={`font-bold text-sm text-gray-500 ${isBoxThreeChecked || isBoxTwoChecked || isBoxOneChecked ? '' : 'invisible'}`}>or Press RETURN</h3>
        </div>
      </form>
    </div>
    </>
  )
}

export default PageTwoComp
