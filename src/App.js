import React from 'react';
import Banner from './Components/Banner';
import Testimonials from './Components/Testimonials';
import Skills from './Components/Skills';
import Team from './Components/Team';
import Newsletter from './Components/Newsletter';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import BackTotopbtn from './Components/BackTotopbtn';


const App = () => {
 return(
  <div>
    <Banner />
    <Testimonials />
    <Skills />
    <Team />
    <Newsletter />
    <Contact />
    <Footer />
    <BackTotopbtn />
    
    
    <div className='h-[2000px]'></div>
  </div>
 );
};

export default App;
