import React from 'react'
import { About } from '../component/mainpage_sections/about'
import { Services } from '../component/mainpage_sections/services'
import { Footer } from '../component/mainpage_sections/footer'
// import Nav from '../component/Nav';

export default function Mainpage() {
  return (
    <div>
     
      {/* <Nav /> */}
      <About />
      <Services/> 
      <Footer/>
    
    </div>
  );
};


