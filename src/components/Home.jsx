import React from 'react'

import heroImageBg from '../assets/img/bg-hero.jpg'
import HeroImage from '../assets/img/hero.png'
import about_1 from '../assets/img/about-1.jpg'
import about_2 from '../assets/img/about-2.jpg'
import about_3 from '../assets/img/about-3.jpg'
import about_4 from '../assets/img/about-4.jpg'
import { FaUtensils } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <div className='hero-section relative  '>
        <img src={heroImageBg} alt="Hero Background" className="w-full h-auto" />
        <div className="overlay absolute top-0 left-0 w-full h-full bg-gray-800 opacity-80">
          <div className="container mx-12">
            <div className='flex flex-row h-auto justify-center items-center space-x-4'>
              <div className='w-[50%] px-10 '>
                <h2 className='text-white font-bold text-6xl m-auto py-2'>Enjoy Our <br/>Delicious Meal</h2>
                <p className='text-white  text-xl py-4'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                   Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, 
                  sed stet lorem sit clita duo justo magna dolore erat amet</p>
                  <button className='btn bg-[#FEA116]  text-white p-3'>Book A Table</button>
              </div>
              <div className='w-[50%]'>
                <img src={HeroImage} alt="heroImage" className='w-[80%] h-auto mt-10' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className='Service-Section flex flex-row'>
        <div className="card bg-gray-100/25 hover:bg-orange-500 hover:text-white p-10  m-10 flex flex-col shadow-lg rounded-lg">
          <FaUserAlt class="text-[#FEA116] text-4xl" />
          <h1 className="text-xl font-bold py-2">Master Chefs</h1>
          <p className="text-gray-500">Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>
        <div className='card bg-gray-100/25 m-10 p-10 flex flex-col shadow-lg hover:bg-orange-500 hover:text-white'>
          <FaUtensils className='text-[#FEA116] text-4xl ' />
          <h1 className='text-xl font-bold py-2'>Master Chefs</h1>
          <p className='text-gray-500'>
            Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
          </p>
      </div>
         <div className='card  bg-gray-100/25 m-10 p-10 flex flex-col shadow-lg hover:bg-orange-500 hover:text-white'>
         <FaCartPlus className='text-[#FEA116] text-4xl' />
         <h1 className='text-xl font-bold py-2'>Master Chefs</h1>
         <p className='text-gray-500'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
         </div>
         <div className='card  bg-gray-100/25 m-10 p-10 flex flex-col shadow-lg hover:bg-orange-500 hover:text-white'>
         <FaHeadset className='text-[#FEA116] text-4xl' />
         <h1 className='text-xl font-bold py-2'>Master Chefs</h1>
         <p className='text-gray-500'>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
         </div>
         
        </div>
      </section>
      <section>
        <div className="about-us flex flex-row gap-8 mt-10">
          <div className='about-images p-4 '>
          <div className='flex flex-row gap-4 justify-center '>
          <div className='w-60'>
            <img src={about_1}  alt="About 1" className='w-full' />
           </div>
           <div className='w-40 flex items-end  truncate'>
            <img src={about_2} alt="About 2"  className='w-full' />
           </div>
          </div>
           <div className="flex flex-row gap-4 justify-center mt-4  ml-40 ">
           <div className='w-40 '>
            <img src={about_3} alt="About 3"  className='w-full '/>
           </div>
           <div className='w-60'> 
            <img src={about_4} alt="About 4"  className='w-full ' />
           </div>
           </div>
          </div>
          <div className='about-info flex flex-col justify-start px-20'>
            <h1 className='text-[#FEA116] font-bold'>About US</h1>
            <h2 className='text-gray-800 font-extrabold text-2xl pb-6'>Welcome to Restoran</h2>
            <p className='text-gray-600'> 
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
               <br/>
               <br/>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
           <div className='pt-8'>
           <button className='btn bg-[#FEA116]  text-white p-3 w-[8rem] '>Read More</button>
           </div>
          </div>
        </div>
      </section>
      <footer>
        <div className='flex flex-row bg-gray-800 gap-8 justify-center items-center'>
          <div className='p-4'>
            <h1 className='text-[#FEA116] font-bold text-xl'>Company</h1>
            <p className='text-white'>About us</p>
            <p className='text-white'>Contact us</p>
            <p className='text-white'>Reservation</p>
            <p className='text-white'>Privacy & Policy</p>
            <p className='text-white'>Terms and Conditions</p>
          </div>
          <div className='p-4'>
            <h1 className='text-[#FEA116] font-bold text-xl'>Contact</h1>
            <p className='text-white'>123 Street, New York, USA</p>
            <p className='text-white'>+012 345 67890</p>
            <p className='text-white'>info@example.com</p>
            <p className='text-white'>Privacy & Policy</p>
          
          </div>
          <div className='p-4'>
            <h1 className='text-[#FEA116] font-bold text-xl'>Opening</h1>
            <p className='text-white'>Monday - Saturday</p>
            <p className='text-white'>09AM - 09PM</p>
            <p className='text-white'>Sunday</p>
            <p className='text-white'>10AM - 08PM</p>
            
          </div>
          <div className='p-4'>
            <h1 className='text-[#FEA116] font-bold text-xl'>Newletter</h1>
            <p className='text-white'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <input type="email" name="" id="" className='px-4 py-2 my-2'  placeholder='Enter Your Email'/>
            
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home