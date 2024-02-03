import React, { useEffect, useState } from 'react';
import { animateScroll as scroll} from 'react-scroll';
import { FaChevronUp } from 'react-icons/fa'
const BackTotopbtn = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if (window.scrollY > 100){
                setShow(true);
            }else {
                setShow(false);
            }
        });
    });
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
    show && (
    <button
    onClick={() => scrollToTop()} 
    className='flex justify-center items-center bg-primary-hover text-white w-12 h-12 fixed z-10 cursor-pointer text-sm'>
      <FaChevronUp />
    </button>
    )
  );
};

export default BackTotopbtn;

