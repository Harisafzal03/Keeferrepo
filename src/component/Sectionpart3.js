import React from 'react';
import '../App.css';
import Bulletwhite from "../asset/bullet_white.gif";
import TopAttorney from "../asset/qqq.gif";
import NCFDD from "../asset/national_college_large.gif";
function Sectionpart3() {
  return (
    <div className='p-10 w-[30%] max-lg:w-full max-sm:p-0'>
        <div>
          <div className='flex max-sm:flex-col max-sm:gap-5 max-sm:items-center justify-between'>
          <img src={TopAttorney} alt="TopAttorney" className='aspect-[102/113] w-[45%] h-[120px]'/>
          <img src={NCFDD} alt="NCFDD" className='aspect-[102/113] w-[35%] h-[120px]'/>
          </div>
          <p className='headingfont max-2xl:py-4'>CERTIFICATES & <span className='text-red-900'>CREDENTIALS</span></p>
          <div className='flex'>
            <div>
              <p className='fontsp py-4'>Keefer Law Firm has protected the rights of Virginians for over 30 years.</p>
              <div className='flex flex-col place-items-end'>
              <div className='2xl:w-[70%] max-2xl:w-[80%] max-xl:w-full border-t-2 border-gray-400'/>
              <button className='mr-[5%]'>
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
