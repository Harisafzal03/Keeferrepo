import React, { useState } from 'react';
import '../App.css';
import Logo from "../asset/looo.png";
import Menu from "../asset/responsive_menu_icon.png";

function Header() {
    const [Open ,setOpen] = useState(false);
    const handlebox = () => {
        setOpen(!Open);
    }    
  return (
    <header>
    <div className='flex max-lg:flex-col justify-between bg-[#fdfcf8]'>
      <div>
        <img src={Logo} alt="logo" height={185} width={900} className='object-fill max-lg:w-full' />
      </div>
      <div className='lg:px-14 my-auto max-lg:mx-auto max-md:mx-0'>
        <h1 className='firstheading tracking-widest'>CALL OUR OFFICES NOW!</h1>
        <hr className='h-1 bg-gray-100 border-0 dark:bg-gray-800' />
        <h2 className='secondheading tracking-widest'>540.433.6906</h2>
        <h2 className='thirdheading tracking-widest'>Get Your Questions Answered Fast</h2>
      </div>
    </div>
    <div className='bg-gradient-to-b from-red-700 to-red-900'>
      <div className='flex justify-end max-lg:hidden lg:mx-0 xl:mx-6 '>
        <p className="menu hover:bg-[#888084] tracking-[0.11em]">HOME</p>
        <p className="menu hover:bg-[#888084] tracking-[0.11em]">BIOGRAPHY</p>
        <p className="menu hover:bg-[#888084] tracking-[0.11em]">BLOG</p>
        <p className="menu hover:bg-[#888084] tracking-[0.11em]">AREA WE SERVE</p>
        <p className="menu hover:bg-[#888084] tracking-[0.11em]">LIBRARY</p>
        <p className="menu hover:bg-[#888084] tracking-[0.11em]">CONTACT</p>
      </div>
      <div className='max-lg:block hidden p-5' onClick={handlebox}>
        <img src={Menu} alt="Menu" height={30} width={30} className='object-fill' />
      </div>
      {Open &&
        <div className='flex flex-col justify-center'>
          <p className="menu hover:bg-[#888084] tracking-[0.11em]">HOME</p>
          <p className="menu hover:bg-[#888084] tracking-[0.11em]">BIOGRAPHY</p>
          <p className="menu hover:bg-[#888084] tracking-[0.11em]">BLOG</p>
          <p className="menu hover:bg-[#888084] tracking-[0.11em]">AREA WE SERVE</p>
          <p className="menu hover:bg-[#888084] tracking-[0.11em]">LIBRARY</p>
          <p className="menu hover:bg-[#888084] tracking-[0.11em]">CONTACT</p>
        </div>
      }
    </div>
  </header>
  
  );
}

export default Header;
