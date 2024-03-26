import React from 'react';
import '../App.css';
import Banner from "../asset/gurantee_banner.gif";
import Confidential from "../asset/confidential.png";
import Bulletwhite from "../asset/bullet_white.gif";

function Section() {
  return (
    <div className='flex max-xl:flex-col max-xl:gap-5 p-12 h-full'>
      <div>
        <img src={Banner} alt="banner" width={1650} className='shadow-lg shadow-gray-500 widths max-xl:w-full'/>
      </div>
      <div className='formbg xl:ml-7 flex flex-col gap-10 xl:gap-3 2xl:gap-5 shadow-lg shadow-gray-500 max-xl:w-full'>
        <div className='flex pr-5 max-md:flex-col'>
          <div>
            <p className='bannerheading bg-[#b00704] px-3 tracking-[3px]'>QUESTIONS?</p>
          </div>
          <p className='bannertext tracking-wide'>Have a <span className='text-[40px] max-2xl:text-[30px] text-blue-900'>Question</span> about your case?</p>
        </div>
        <div className='mx-1'>
          <p className='text px-6'>Enter your information and get your questions answered quickly and discreetly or call us at: 540.433.6906</p>
        </div>
        <div className='flex max-md:flex-col px-10'>
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between'>
              <label className='flex justify-center font-bold'>
                NAME:
              </label>
              <input type="text" id="name" name="name" className='ml-4 input'/>
            </div>
            <div className='flex justify-between'>
              <label className='flex justify-center text-[18px] font-bold'>
                EMAIL:
              </label>
              <input type="text" id="email" name="email" className='input'/>
            </div>
            <div className='flex justify-between'>
              <label className='flex justify-center text-[18px] font-bold'>
                PHONE:
              </label>
              <input type="text" id="phone" name="phone" className='ml-4 input'/>
            </div>
          </div>
          <div className='flex items-center'>
            <img src={Confidential} alt="Confidential" width={300} className='rotate-12 mx-8'/>
          </div>
        </div>
        <div className='px-12 h-[100px] xl:h-[20%]'>
          <input type="text" id="table" name="table" className='w-full h-full'/>
        </div>
        <div className='flex max-md:flex-col pl-7 pr-12 justify-between'>
          <div className='flex items-center'>
            <p className='italic text-gray-600 textfirst'>100% Privacy Guaranteed</p>
          </div>
          <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-4 py-2 shadow shadow-[#b00704]'>
            <p className='text-white pr-3 texts font-semibold tracking-[0.11em]'>Ask Us About Your Case </p>
            <div className='flex items-center'>
              <img src={Bulletwhite} alt="BulletWhite" width={12} />
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
