import React from 'react';
import '../App.css';
import Bulletwhite from "../asset/bullet_white.gif";
import Cardboard from "../asset/paste_board.gif";
function Sectionpart1() {
  return (
    <div className='p-10 max-sm:p-0 w-[30%] max-lg:w-full'>
          <p className='headingfont'>CHARGED WITH <span className='text-red-900'>DUI?</span></p>
          <p className='text-red-900 pr-3 text-[20px] font-semibold flex justify-start'>FREE CASE EVALUATION</p>
          <div className='flex max-xl:flex-col-reverse py-5'>
            <div className='flex flex-col gap-3 xl:w-[80%]'>
              <p className='fontsp'>Being charged with a DUI can be scary. Get the help you deserve.</p>
              <p className='fontsp'>Clickhere to let us know how we can help you with your case.</p>
            </div>
            <div>
            <img src={Cardboard} alt="Cardboard" width={150} className='max-lg:w-[150px]' />
            </div>
          </div>
          <div className='flex flex-col max-lg:w-[50%] max-sm:w-full max-lg:mx-auto place-items-end'>
          <div className='2xl:w-[70%] max-2xl:w-[80%] max-xl:w-full border-t-2 border-gray-400'/>
            <button className='mr-[6%]'>
          <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-2 shadow-lg shadow-gray-400'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={Bulletwhite} alt="BulletWhite" width={12} />
        </div> 
        </div>
        </button>
        </div>
        </div>
  );
}

export default Sectionpart1;
