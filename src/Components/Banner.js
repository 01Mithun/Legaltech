 import React from 'react';
import Header from './Hearder';
import Appointment from './Appointment';
import LawerImage from '../assets/img/lawyer_banner.png';
const Banner = () => {
  return (
    <section id='home' className='lg:h-full 
    lg:max-h-800 bg-gradient-to-t from-[#f8f3ec] to-[#e0cBac]'>
        <Header />
        <div className='container mx-auto h-full lg:flex pt-32'>
            {}
            <div className='text-center mx-auto h-full lg:text-left px-8 md:p-0'>
                <h1 className='font-primary font-black text-6xl lg:text-7xl text-primary mb-4 lg:mt-[70px] leading-tight lg:leading-[90px] '>
                    Your Problem <br /> <spna className='text-accent'>Our Goal.</spna>
                </h1>
                <p className='max-w-sm mx-auto mb-[50px]
                lg:mx-0 lg:max-w-[540px]'>
                    Lorem ipsum dolor sit amet consectetur,avkcv
                    jvkbqilui
                    cvkviwbfuiyfgwfbouibi8f
                    dcvucctvkdjcbi7tfdviuebi7fecico8gco
                    cdhgtcviubceuitfciobdcitvdcodug7fsdacg9pc
                    cdutfciuiunfbouiwefouefo8yco
                </p>
                <div className='lg:absolute mx-auto max-w-[445px] lg:mx-0 '>
                    <Appointment/>
                </div>
            </div>
            {}
            <div className='hidden flex-1 lg:flex lg:flex-col items-end'>
                <img src={LawerImage} alt='' />
            </div>
        </div>
    </section>
  );
};

export default Banner;