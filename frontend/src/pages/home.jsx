import React from 'react';
import {Hero} from '../component/mainpage_sections/hero';
import { Youtube } from '../component/mainpage_sections/Youtube';
import Nav from '../component/Nav';


export const Home = () => {
  return (
    <div >
      <Nav />
      <div className='flex flex-row justify-between'>
        {/* <div className='flex flex-col w-1/4 justify-center '>
          <Youtube />
        </div>     */}
        <div className='w-3/4'> 
          <Hero/>
        </div>
        <div className='flex flex-col w-1/4 justify-center '>
          <Youtube />
        </div>
        
      </div>
    </div>
  );
}