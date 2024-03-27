import React from 'react';
import '../App.css';
import Bulletwhite from "../asset/bullet_white.gif";
import TopAttorney from "../asset/qqq.gif";
import NCFDD from "../asset/national_college_large.gif";
function Sectionpart3() {
  return (
    <div className='p-10 w-[30%] max-lg:w-full max-lg:text-center max-sm:p-0'>
        <div>
          <div className='flex max-md:flex-col max-sm:gap-5 max-sm:items-center max-lg:justify-center lg:justify-around'>
          <div className='px-4 max-md:px-10 my-10 max-md:my-2'>
          <img src={TopAttorney} alt="TopAttorney" className='aspect-[3/3] lg:h-[90px] xl:h-[120px] max-lg:h-full'/>
          </div>
          <div className='px-4 max-md:px-10 my-10 max-md:my-2'>
          <img src={NCFDD} alt="NCFDD" className='aspect-[3/3] lg:h-[90px] xl:h-[120px]'/>
          </div>
          </div>
          <p className='headingfont max-2xl:py-4'>CERTIFICATES & <span className='text-red-900'>CREDENTIALS</span></p>
          <div className='flex'>
            <div>
              <p className='fontsp py-4'>Keefer Law Firm has protected the rights of Virginians for over 30 years.</p>
              <div className='flex flex-col max-lg:w-[50%] max-sm:w-full max-lg:mx-auto place-items-end'>
              <div className='2xl:w-[70%] max-2xl:w-[80%] max-xl:w-full border-t-2 border-gray-400'/>
              <button className='mr-[5%] max-md:mx-auto max-md:mb-10'>
          <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-2 shadow-lg shadow-gray-400'>
        <p className='button'>LEARN MORE</p>
        <div className='flex items-center'>
        <img src={Bulletwhite} alt="BulletWhite" width={12} />
        </div> 
        </div>
        </button>
        </div>
            </div>
          </div>
        </div>
        </div>
  );
}

export default Sectionpart3;
