import React from 'react';
import '../App.css';
import Bulletwhite from "../asset/bullet_white.gif";
import order from "../asset/order_icon.gif";
import Laptop from "../asset/pic1.gif";

function Sectionpart2() {
  return (
    <div className='lg:border-x-2 w-[40%] max-lg:w-full flex flex-col justify-between'>          
      <div className='flex max-xl:flex-col-reverse max-lg:text-center p-10 max-sm:p-2'>
        <div className='lg:pr-[10%]'>
          <p className='headingfont'>LAW <span className='text-red-900'>BLOG</span></p>
          <p className='fontsp py-3'>Learn more about Virginia Traffic Laws.</p>
          <div className='flex flex-col max-lg:w-[50%] max-sm:w-full max-lg:mx-auto place-items-end'>
            <div className='2xl:w-[90%] max-2xl:w-[90%] max-xl:w-full border-t-2 border-gray-400'/>
            <button className='mr-[5%] max-md:mx-auto max-md:mb-10'>
              <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-2 shadow-lg shadow-gray-400'>
                <p className='button'>CLICK HERE</p>
                <div className='flex items-center'>
                  <img src={Bulletwhite} alt="BulletWhite" width={12} />
                </div> 
              </div>
            </button>
          </div>
        </div>
        <div className='max-lg:my-4 max-lg:flex max-lg:justify-center'>
          <img src={Laptop} alt="Laptop" width={300} className='max-lg:w-[250px] max-xl:w-[200px]'/>
        </div>
      </div>
      <div class='lg:border'/>
      <div className='flex max-xl:flex-col-reverse max-lg:text-center lg:justify-between p-10 max-sm:p-2'>
        <div>
          <p className='headingfont'>CASE <span className='text-red-900'>RESULTS</span></p>
          <div className='py-3'>
            <p className='fontsp '>See how we help our clients.</p>
            <p className='fontsp '>Read our latest case results.</p>
          </div>
          <div className='flex flex-col max-lg:w-[50%] max-sm:w-full max-lg:mx-auto place-items-end'>
            <div className='2xl:w-[90%] max-2xl:w-full max-xl:w-full border-t-2 border-gray-400'/>
            <button className='mr-[5%] max-md:mx-auto max-md:mb-10'>
              <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-2 shadow-lg shadow-gray-400'>
                <p className='button'>CLICK HERE</p>
                <div className='flex items-center'>
                  <img src={Bulletwhite} alt="BulletWhite" width={12} />
                </div> 
              </div>
            </button>
          </div>
        </div>
        <div className='max-lg:my-4 max-lg:flex max-lg:justify-center'>
          <img src={order} alt="order" width={200} className='max-lg:w-[250px]' />
        </div>
      </div>
    </div>
  );
}

export default Sectionpart2;
