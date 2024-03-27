import React from 'react';
import '../App.css';
import Bulletwhite from "../asset/bullet_white.gif";
import order from "../asset/order_icon.gif";
import Laptop from "../asset/pic1.gif";
function Sectionpart2() {
  return (
<div className='border-x-2 w-[40%] max-lg:w-full flex flex-col justify-between'>          
          <div className='flex max-xl:flex-col p-10 max-sm:p-2'>
            <div>
            <p className='headingfont'>LAW <span className='text-red-900'>BLOG</span></p>
              <p className='fontsp py-3'>Learn more about Virginia Traffic Laws.</p>
              <div className='flex flex-col max-lg:w-[50%] max-sm:w-full max-lg:mx-auto place-items-end'>
              <div className='2xl:w-[70%] max-2xl:w-[80%] max-xl:w-full border-t-2 border-gray-400'/>
            <button className='mr-[5%]'>
          <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-2 shadow-lg shadow-gray-400'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={Bulletwhite} alt="BulletWhite" width={12} />
        </div> 
        </div>
        </button>
        </div>
            </div>
            <div>
            <img src={Laptop} alt="Laptop" className='object-fit h-full'/>
            </div>
          </div>
<hr/>
          
          <div className='flex max-xl:flex-col p-10 max-sm:p-2'>
            <div>
            <p className='headingfont'>CASE <span className='text-red-900'>RESULTS</span></p>
            <div className='py-3'>
              <p className='fontsp '>See how we help our clients.</p>
              <p className='fontsp '>Read our latest ase results.</p>
              </div>
              <div className='flex flex-col max-lg:w-[50%] max-sm:w-full max-lg:mx-auto place-items-end'>
              <div className='2xl:w-[70%] max-2xl:w-[80%] max-xl:w-full border-t-2 border-gray-400'/>
            <button className='mr-[5%]'>
          <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-2 shadow-lg shadow-gray-400'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={Bulletwhite} alt="BulletWhite" width={12} />
        </div> 
        </div>
        </button>
        </div>
            </div>
            <div>
            <img src={order} alt="order" width={200} />
            </div>
        </div>
        </div>
  );
}

export default Sectionpart2;
