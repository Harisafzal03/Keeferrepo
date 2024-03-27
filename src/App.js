import React from 'react';
import './App.css';
import Header from "./component/Header";
import Section from "./component/Section";
import Sectionpart1 from "./component/Sectionpart1";
import Sectionpart2 from "./component/Sectionpart2";
import Sectionpart3 from "./component/Sectionpart3";
import Bulletwhite from "./asset/bullet_white.gif";
import TopAttorney from "./asset/qqq.gif";
import NCFDD from "./asset/national_college_large.gif";
import Linkedin from "./asset/linked_icon.gif";
import Google from "./asset/google_icon.gif";
import Facebook from "./asset/fb_icon.gif";
import Twitter from "./asset/twitter_icon.gif";
import Menu from "./asset/menu_bg.gif";
import BulletRed from "./asset/bullet_red.gif";

function App() {
  return (
    <div className="App">
      <head>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;700&display=swap"/>


      </head>
      <body>
      <Header/>
      <Section/>
      <div className='flex max-lg:flex-col shadow-2xl px-16'>
      <Sectionpart1/>
      <Sectionpart2/>
      <Sectionpart3/>     
      </div>
      <div className='flex max-lg:flex-col p-12'>
        <div className='w-[22%] max-lg:w-full'>
          <div>
            <p className='headingfont'>PRACTICE <span className='text-red-900'>AREAS</span></p>
            <div className='pl-1'>
            <div className='flex my-5 shadow-lg shadow-gray-500'>
              <div>
                <img src={Menu} alt="MenuLine" width={12} className='h-[90px]'/>
              </div>
              <div className='bg-[#888084] w-full p-2 flex flex-col justify-between'>
                <p className='headingfontboxes'>DUI & DWI</p>
          <div className='flex justify-end px-2'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={BulletRed} alt="BulletRed" width={12} />
        </div> 
        </div>
              </div>
              </div>
              <div className='flex my-5 shadow-lg shadow-gray-500'>
              <div>
                <img src={Menu} alt="MenuLine" width={12} className='h-[90px]'/>
              </div>
              <div className='bg-[#888084] w-full p-2 flex flex-col justify-between'>
                <p className='headingfontboxes'>DUI & DWI</p>
          <div className='flex justify-end px-2'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={BulletRed} alt="BulletRed" width={12} />
        </div> 
        </div>
              </div>
              </div>
              <div className='flex my-5 shadow-lg shadow-gray-500'>
              <div>
                <img src={Menu} alt="MenuLine" width={12} className='h-[90px]'/>
              </div>
              <div className='bg-[#888084] w-full p-2 flex flex-col justify-between'>
                <p className='headingfontboxes'>DUI & DWI</p>
          <div className='flex justify-end px-2'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={BulletRed} alt="BulletRed" width={12} />
        </div> 
        </div>
              </div>
              </div>
              <div className='flex my-5 shadow-lg shadow-gray-500'>
              <div>
                <img src={Menu} alt="MenuLine" width={12} className='h-[90px]'/>
              </div>
              <div className='bg-[#888084] w-full p-2 flex flex-col justify-between'>
                <p className='headingfontboxes'>DUI & DWI</p>
          <div className='flex justify-end px-2'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={BulletRed} alt="BulletRed" width={12} />
        </div> 
        </div>
              </div>
              </div>
            </div>
          </div>
          <div className='py-10'>
            <p className='headingfont'>LEARN <span className='text-red-900'>MORE</span> ABOUT</p>
            <div className='py-24 flex flex-col items-center'>
              <p className='Aboutfont'>MENU</p>
              <p className='Aboutfont'>AREA</p>
              <p className='Aboutfont'>HERE</p>
            </div>
          </div>
        </div>
        <div className='w-[53%] lg:px-14 max-lg:w-full'>
          <h1 className='mainheading text-3xl'>&lt;H1&gt;PAGE TITLE HERE</h1>
          <p className='fontsp max-lg:py-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
        </div>
        <div className='w-[20%] max-lg:w-full'>
          <div className='mb-10'>
            <div className='px-2'>
          <p className='headingfont'>CLIENT <span className='text-red-900'>TESTEMONIALS</span></p>
          <p className='fontsp py-4'>Read what others say about Keefer Law Firm.</p>
          </div>
          <div className='flex flex-col max-lg:w-[50%] max-sm:w-full max-lg:mx-auto'>
              <div className='border-t-2 border-gray-500'/>
              <button className='ml-[30%] flex place-items-end'>
          <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-2 shadow-lg shadow-gray-400'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={Bulletwhite} alt="BulletWhite" width={12} />
        </div> 
        </div>
        </button>
          </div>
          </div>
          <div className='mb-10'>
            <div className='px-2'>
          <p className='headingfont'>DOWNLOAD <span className='text-red-900'>FREE</span>REPORTS</p>
          <p className='fontsp py-4'>Discover the truth about Virginia Law.</p>
          </div>
              <div className='flex flex-col max-lg:w-[50%] max-sm:w-full max-lg:mx-auto'>
              <div className='border-t-2 border-gray-500'/>
              <button className='ml-[30%] flex place-items-end'>
          <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-2 shadow-lg shadow-gray-400'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={Bulletwhite} alt="BulletWhite" width={12} />
        </div> 
        </div>
        </button>
          </div>
          
          </div>
          <div className='mb-10'>
            <div className='px-2'>
          <p className='headingfont'>CONTACT <span className='text-red-900'>OUR</span> OFFICES</p>
          <p className='fontsp py-4'>Get your questions answered right now.</p>
          </div>
          <div className='flex flex-col max-lg:w-[50%] max-sm:w-full max-lg:mx-auto'>
              <div className='border-t-2 border-gray-500'/>
              <button className='ml-[30%] flex place-items-end'>
          <div className='flex bg-gradient-to-b from-[#bb080b] to-[#990202] px-2 shadow-lg shadow-gray-400'>
        <p className='button'>CLICK HERE</p>
        <div className='flex items-center'>
        <img src={Bulletwhite} alt="BulletWhite" width={12} />
        </div> 
        </div>
        </button>
          </div>
          </div>
          
          <div className='flex lg:flex-col max-lg:justify-around'>
          <div className='px-16 max-md:px-10 my-10'>
          <img src={TopAttorney} alt="TopAttorney" className='aspect-[3/3] lg:w-full max-lg:h-full'/>
          </div>
          <div className='px-16 max-md:px-10 my-10 '>
          <img src={NCFDD} alt="NCFDD" className='aspect-[3/3] lg:w-full'/>
          </div>
          </div>
          <div className='mb-10 w-full max-lg:w-[60%] max-md:w-[70%] max-lg:mx-auto max-[500px]:w-full'>
            <div className='flex justify-center'>
          <p className='headingfont'>FOLLOW <span className='text-red-900'>US</span></p>
          </div>
              <div className='border-t-2 border-gray-500'/>
              <div className='flex lg:justify-between max-lg:justify-around pt-5'>
                <div>
              <img src={Facebook} alt="Facebook" className='w-[60px] max-2xl:w-[50px] max-xl:w-[40px] max-lg:w-[60px]'/>
              </div>
              <div>
              <img src={Google} alt="Google" className='w-[60px] max-2xl:w-[50px] max-xl:w-[40px] max-lg:w-[60px]'/>
              </div>
              <div>
              <img src={Twitter} alt="Twitter" className='w-[60px] max-2xl:w-[50px] max-xl:w-[40px] max-lg:w-[60px]'/>
              </div>
              <div>
              <img src={Linkedin} alt="Linkedin" className='w-[60px] max-2xl:w-[50px] max-xl:w-[40px] max-lg:w-[60px]'/>
              </div>
              </div>


          </div>
        </div>
      </div>
      <div className='bg-gradient-to-b from-red-700 to-red-900 h-4'></div>
      </body>
    </div>
  );
}

export default App;
