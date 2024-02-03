import React from 'react'
import { social } from '../data'

const Contact = () => {
  return (
    <section id='contact' className='bg-primary text-white min-h-[732px] section'>
        <div className='container mx-auto text-center'>
            <h2 className='text-5x1 font-primary font-extrabold mb-4'>Contact Us</h2>
            <p className='max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]'> 
                ggggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggggg
                ggggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggggg
                gggggggggggggggggggggggggggggggggggggggggg
                ggggggggggggggggggggggggggggggggggggggggg
            </p>
            {}
            <form className='px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]'>
                <input className='form-control' placeholder='Full Name'type='text'/>
                <input className='form-control' placeholder='Email address'type='email'/>
                <textarea className='textarea' placeholder='Message'></textarea>
                <button className='btn bg-black hover:bg-accent-hover transition-all'>Send message</button>
            </form>
            {}
            <div className='flex items-center justify-between max-w-[205px] mx-auto'>
                {social.map((item, index) => {
                    return(
                        <a herf='#' key={index}>
                            <img src={item.icon} alt='' />
                        </a>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Contact
