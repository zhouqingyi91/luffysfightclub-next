'use client';

import { useState } from 'react';
import AnimateHeight from 'react-animate-height';
import HomeLink from './HomeLink';
import Menu from './Menu';

export default function MobileNav() {
  const [showMobileMenu, setShowMobileMenu] = useState<0 | 'auto'>(0);

  const toggleMobileMenuHandler = () => {
    setShowMobileMenu(prev => prev === 0 ? 'auto' : 0)
  }
  return (
    <section className={'md:hidden py-5 my-5 text-base text-center '}>
      <div className='flex justify-between'>
        <HomeLink />
        <button onClick={toggleMobileMenuHandler} className='h-7 w-7 relative cursor-pointer flex justify-center items-center '>
          <div className={'absolute w-7 h-1 rounded before:bg-neutral-400 before:absolute before:h-1 before:w-7 before:right-0 before:rounded before:content-[""] after:bg-neutral-400 after:absolute after:h-1 after:w-7 after:right-0 after:rounded after:content-[""] ' + (showMobileMenu ? ' before:top-0 before:rotate-45 before:[transition:transform_ease_.2s_.2s,top_ease_.2s] after:top-0 after:-rotate-45 bg-transparent [transition:transform_ease_.2s_.2s,top_ease_.2s] after:[transition:transform_ease_.2s_.2s,top_ease_.2s]' : ' before:-top-2 bg-neutral-400 [transition:top_ease_.2s_.2s,_transform_ease_.2s] before:[transition:top_ease_.2s_.2s,_transform_ease_.2s] after:[transition:top_ease_.2s_.2s,_transform_ease_.2s] after:top-2 ')}></div>
        </button>
      </div>
      <AnimateHeight duration={400} height={showMobileMenu}>
        <hr className='my-5' />
        <nav>
          <Menu />
        </nav>
      </AnimateHeight>
    </section>
  );
};