import PatternBg from './assets/PatternLight.svg';
import Image1 from './assets/image-1.png';
import Image2 from './assets/image-2.png';
import Image3 from './assets/image-3.png';
import HeroImage from './assets/HeroImage.png';
import icon from './assets/Icon.svg';
import { Icon } from '@iconify/react';
import Image from './assets/Image1.png';
import ImageTwo from './assets/Image2.png';
import Circle from './assets/path158.png';
import Arrow from './assets/Arrow.png';
import React, { useState, useRef } from 'react';

const App = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredStarter, setIsHoveredStarter] = useState(false);
  const [isHoveredPro, setIsHoveredPro] = useState(false);
  const [isHoveredEnterprise, setIsHoveredEnterprise] = useState(false);
  const membershipRef = useRef(null);

  const handleReviewMembershipClick = () => {
    if (membershipRef.current) {
      membershipRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    <div className="hero-grid-bg min-h-screen flex flex-col"style={{
      backgroundColor: '#FAF5F3', 
      backgroundImage: `url(${PatternBg})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center center'
      }}>
      
      <div className='container mx-auto px-4 sm:px-6 lg:px-10 pb-10 sm:pb-16'>
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-start items-center gap-2 sm:gap-4 pt-4 sm:pt-8">
          <img className='h-8 sm:h-10 w-8 sm:w-10' src={icon} alt="Tech-book club logo"/>
          <h1 className='text-lg sm:text-xl lg:text-2xl font-bold text-primary font-fira-code tracking-tight'>Tech Book Club</h1>
        </div>
        
        {/* Hero Section */}
        <main className='flex flex-col lg:flex-row items-center justify-between gap-12 mt-10 sm:mt-16'>
          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start'>
            <div className="text-center lg:text-left">
              <h1 className="font-martian-mono font-bold text-6xl tracking-tight leading-snug"
                style={{
                backgroundImage: 'linear-gradient(107.24deg, #FEA36F -11.37%, #062630 61.84%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                }}>
                Join the <br className="hidden sm:block" />
                ultimate tech <br className="hidden sm:block" />
                book club
            </h1>
            </div>
            
            <p className='pt-4 sm:pt-6 font-inter text-sm sm:text-base max-w-xs sm:max-w-md text-neutral-700 mx-auto lg:mx-0'>
              Turn your reading time into learning time with fellow tech enthusiasts. 
              Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.
            </p>
            
            <button
              className="border-2 border-primary font-martian-mono bg-button-color text-primary h-14 sm:h-16 px-4 sm:px-6 py-2 rounded-lg mt-6 sm:mt-8 text-sm sm:text-base transition-colors flex items-center justify-center gap-2 sm:gap-3 mx-auto lg:mx-0"
              style={{
                background: isHovered ? 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)' : undefined,
                color: isHovered ? '#062630' : undefined,
                borderColor: isHovered ? '#062630' : undefined,
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleReviewMembershipClick}
            >
              REVIEW MEMBERSHIP OPTIONS
              <Icon icon="hugeicons:arrow-down-02" className="inline-block ml-2" width={20} height={20} />
            </button>
            
            
            <div className='flex flex-col sm:flex-row items-center mt-6 sm:mt-10 gap-3 sm:gap-6'>
              <div className='flex flex-row -space-x-4'>
                <img className='h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-button-color' src={Image1} alt="Member 1"/>
                <img className='h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-button-color' src={Image2} alt="Member 2"/>
                <img className='h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-button-color' src={Image3} alt="Member 3"/>
              </div>
              <div className='flex flex-col gap-1 '>
                <div className='flex text-star'>
                  <Icon icon="twemoji:star"width={20} height={20} className="sm:w-6 sm:h-6"/>
                  <Icon icon="twemoji:star"width={20} height={20} className="sm:w-6 sm:h-6"/>
                  <Icon icon="twemoji:star"width={20} height={20} className="sm:w-6 sm:h-6"/>
                  <Icon icon="twemoji:star"width={20} height={20} className="sm:w-6 sm:h-6"/>
                  <Icon icon="twemoji:star"width={20} height={20} className="sm:w-6 sm:h-6"/>
                </div>
                <p className='font-martian-mono text-xs sm:text-sm text-neutral-700'>200+ developers joined already</p>
              </div>
            </div>
          </div>
          {/* === Right Column: Image with Gradient === */}
            <div className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center lg:justify-end">
                {/* Relative container for positioning the gradient */}
                <div className="relative">
                    {/* The background gradient element */}
                    <div
                        aria-hidden="true"
                        className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-gradient-radial from-[#FEA36F]/40 to-transparent blur-3xl -z-10"
                    />

                    {/*The main hero image */}
                    <img
                        className="relative z-10 w-full max-w-md lg:max-w-none rounded-lg shadow-xl"
                        src={HeroImage}
                        alt="A group of people reading books at a table"
                    />
                </div>
            </div>
        </main>
        </div>
      </div>
      


      {/* Features Section */}
    <section className='py-10 sm:py-20 bg-neutral-0'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center mt-10 sm:mt-16'>
          <div className='flex justify-center'>
          <img className='rounded-lg shadow-xl w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto' src={Image} alt/>
          </div>
            <div>
              <h2 className="font-martian-mono text-5xl sm:text-3xl lg:text-6xl font-bold text-primary tracking-tight">Read together, grow together</h2>
              <ul className="mt-4 sm:mt-6 space-y-2 sm:space-y-4 font-inter text-neutral-700  text-lg sm:text-2xl">
                <li className="flex items-start gap-2 sm:gap-3">
                  <Icon icon="hugeicons:checkmark-square-01" className="mt-1 flex-shrink-0" width={40} height={40}/>
                  <span>Monthly curated tech reads selected by industry experts</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Icon icon="hugeicons:checkmark-square-01" className="mt-1 flex-shrink-0" width={40} height={40}/>
                  <span>Virtual and in-person meetups for deep-dive discussions</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <Icon icon="hugeicons:checkmark-square-01" className="mt-1 flex-shrink-0" width={40} height={40}/>
                  <span>Early access to new tech book releases</span>
                </li>
                 <li className="flex items-start gap-2 sm:gap-3">
                  <Icon icon="hugeicons:checkmark-square-01" className="mt-1 flex-shrink-0" width={40} height={40}/>
                  <span>Author Q&A sessions with tech thought leaders</span>
                </li>
              </ul>
            </div>
      </div>
      </div>
    </section>
    {/* Third Section: Not your average book club */}
    <section className="py-10 sm:py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="font-bold text-2xl sm:text-4xl lg:text-6xl text-[#062630] tracking-tight" style={{fontFamily: "'Martian Mono', monospace"}}>
                Not your average book <span className="relative inline-block">
                    <span className="relative z-10">club</span>
                    <img src={Circle} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-auto -z-0 transform -rotate-6 pt-4"/>
                </span>
              </h2>
              <p className="mt-4 sm:mt-6 font-inter text-gray-700 max-w-xs sm:max-w-md text-sm sm:text-base">
                Connect with a community that speaks your language - from Python to TypeScript and everything in between. Our discussions blend technical depth with practical applications.
              </p>
              <div className="mt-6 sm:mt-8 flex justify-center md-hidden">
             <div className="relative w-40 h-40 mx-auto mt-8">
                {/* Icons in orbit */}
                <a href="#" className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-14 h-14 rounded-full bg-neutral-300 shadow-md text-neutral-0">
                  <Icon icon="hugeicons:typescript-01" className="w-6 h-6" />
                </a>
                <a href="#" className="absolute top-1/2 left-1 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-black shadow-md text-neutral-0">
                 <Icon icon="hugeicons:github-01" className="w-6 h-6" />
                </a>
                <a href="#" className="absolute bottom-0 right-1/3 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-400 shadow-md text-neutral-0">
                  <Icon icon="hugeicons:react" className="w-7 h-7" />
                </a>
              </div>
              </div> 
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <img src={ImageTwo} alt="A diverse group of people in a book club" className="rounded-lg shadow-xl w-full max-w-xs sm:max-w-md lg:max-w-lg h-auto"/>
            </div>
            
          </div>
        </div>
      </section>
      {/* Fourth Section: Your tech reading journey */}
      <section className="py-10 sm:py-20 bg-white">
        <div className="bg-[#FAF5F3] rounded-2xl mx-auto p-6 sm:p-10 lg:p-16 h-[454px]" style={{
      backgroundColor: '#FAF5F3', 
      backgroundImage: `url(${PatternBg})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center center',
      maxWidth: '1170px',
      maxHeight: '454px'
    }}>
           <div className='flex items-center justify-center h-50'>
            <h2 className="font-martian-mono text-2xl sm:text-3xl lg:text-6xl font-bold text-[#062630] tracking-tight text-center ">
                Your tech <br></br>reading journey
            </h2>
            </div>
            <div className="relative mt-10 sm:mt-16">
                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 sm:gap-x-8 gap-y-10 sm:gap-y-12 text-center"> 
                    {/* Step 1 */}
                    <div className="">
                        <div className="flex items-center justify-center w-10 h-10 sm:w-10 aspect-square sm:h-10 mx-auto border-2 border-[#062630] rounded-md font-martian-mono font-bold">1</div>
                        <p className="mt-3 sm:mt-4 font-martian-mono text-sm  font-bold sm:text-base">Choose your membership tier</p>
                    </div>
                    {/* Step 2 */}
                    <div className="">
                        <div className="flex items-center justify-center w-10 h-10 sm:w-10 aspect-square sm:h-10 mx-auto border-2 border-[#062630] rounded-md font-martian-mono font-bold">2</div>
                        <p className="mt-2 sm:mt-4 font-martian-mono text-sm font-bold sm:text-base">Get your monthly book selection</p>
                    </div>
                    {/* Step 3 */}
                    <div className="">
                        <div className="flex items-center justify-center w-10 h-10 sm:w-10 aspect-square sm:h-10 mx-auto border-2 border-[#062630] rounded-md font-martian-mono font-bold">3</div>
                        <p className="mt-2 sm:mt-4 font-martian-mono font-bold text-sm sm:text-base">Join our discussion forums</p>
                    </div>
                    {/* Step 4 */}
                    <div className="">
                        <div className="flex items-center justify-center w-10 h-10 sm:w-10 aspect-square sm:h-10 mx-auto border-2 border-[#062630] rounded-md font-martian-mono font-bold">4</div>
                        <p className="mt-2 sm:mt-4 font-martian-mono font-bold text-sm sm:text-base">Attend exclusive meetups</p>
                    </div>
                </div>
                
                {/* Connecting Arrows for larger screens */}
              <div className="absolute top-4 left-1 w-full hidden lg:flex justify-evenly pointer-events-none">
                <img src={Arrow} alt="arrow" className="w-[76px] h-[20px]" />
                <img src={Arrow} alt="arrow" className="w-[76px] h-[20px]" />
                <img src={Arrow} alt="arrow" className="w-[76px] h-[20px]" />
              </div>
            </div>
        </div>
      </section>
      {/* Fifth Section: Membership Options & Testimonial */}
      <section className="py-10 sm:py-20 bg-white" ref={membershipRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
            <h2 className="font-martian-mono text-2xl sm:text-3xl lg:text-4xl font-bold text-[#062630] tracking-tight text-center">
                Membership options
            </h2>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12 max-w-5xl mx-auto">
                {/* Starter Plan */}
                <div className="border border-[#E6E1DF] rounded-lg p-6 sm:p-8 flex flex-col">
                    <h3 className="font-martian-mono text-xl sm:text-2xl font-bold">Starter</h3>
                    <p className="font-inter text-gray-500 mt-1 sm:mt-2"><span className="text-3xl sm:text-4xl font-bold text-[#062630]">$19</span> <span className="text-base">/month</span></p>
                    <ul className="space-y-2 sm:space-y-4 mt-4 sm:mt-8 font-inter flex-grow text-sm sm:text-base">
                        <li className="flex items-center gap-2 sm:gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={20} height={20}/>1 book/month</li>
                        <li className="flex items-center gap-2 sm:gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={20} height={20}/>Online forums</li>
                    </ul>
                    <button className="w-full mt-6 sm:mt-8 border-2 bg-button-color border-[#062630] text-[#062630] font-martian-mono font-bold py-2 sm:py-3 rounded-lg hover:text-white transition-colors text-sm sm:text-base"
                    style={{
                background: isHoveredStarter ? 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)' : undefined,
                color: isHoveredStarter ? '#062630' : undefined,
                borderColor: isHoveredStarter ? '#062630' : undefined,
              }}
              onMouseEnter={() => setIsHoveredStarter(true)}
              onMouseLeave={() => setIsHoveredStarter(false)}
            >SUBSCRIBE NOW</button>
                </div>

                {/* Pro Plan */}
                <div className="border-2 border-[#E6E1DF] bg-[#FAF5F3] rounded-lg p-6 sm:p-8 flex flex-col shadow-lg">
                    <h3 className="font-martian-mono text-xl sm:text-2xl font-bold">Pro</h3>
                    <p className="font-inter text-gray-500 mt-1 sm:mt-2"><span className="text-3xl sm:text-4xl font-bold text-[#062630]">$29</span> <span className="text-base">/month</span></p>
                    <ul className="space-y-2 sm:space-y-4 mt-4 sm:mt-8 font-inter flex-grow text-sm sm:text-base">
                        <li className="flex items-center gap-2 sm:gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={20} height={20}/>2 books/month</li>
                        <li className="flex items-center gap-2 sm:gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={20} height={20}/>Virtual meetups</li>
                    </ul>
                    <button className="w-full mt-6 sm:mt-8 border-2 border-[#062630] bg-button-color text-white font-martian-mono font-bold py-2 sm:py-3 rounded-lg hover:bg-opacity-90 transition-colors text-sm sm:text-base"
                    style={{
                        background: isHoveredPro ? 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)' : undefined,
                        color: isHoveredPro ? '#062630' : undefined,
                        borderColor: isHoveredPro ? '#062630' : undefined,
                      }}
              onMouseEnter={() => setIsHoveredPro(true)}
              onMouseLeave={() => setIsHoveredPro(false)}
            >SUBSCRIBE NOW</button>
                </div>

                {/* Enterprise Plan */}
                <div className="border border-[#E6E1DF] rounded-lg p-6 sm:p-8 flex flex-col">
                    <h3 className="font-martian-mono text-xl sm:text-2xl font-bold">Enterprise</h3>
                    <p className="font-inter text-gray-500 mt-1 sm:mt-2"><span className="text-3xl sm:text-4xl font-bold text-[#062630]">Custom</span></p>
                     <ul className="space-y-2 sm:space-y-4 mt-4 sm:mt-8 font-inter flex-grow text-sm sm:text-base">
                        <li className="flex items-center gap-2 sm:gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={20} height={20}/>Team access</li>
                        <li className="flex items-center gap-2 sm:gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={20} height={20}/>Private sessions</li>
                    </ul>
                    <button className="w-full mt-6 sm:mt-8 border-2 bg-button-color border-[#062630] text-[#062630] font-martian-mono font-bold py-2 sm:py-3 rounded-lg hover:text-white transition-colors text-sm sm:text-base"
                    style={{
                        background: isHoveredEnterprise ? 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)' : undefined,
                        color: isHoveredEnterprise ? '#062630' : undefined,
                        borderColor: isHoveredEnterprise ? '#062630' : undefined,
                       }}
                      onMouseEnter={() => setIsHoveredEnterprise(true)}
                      onMouseLeave={() => setIsHoveredEnterprise(false)}
            >TALK TO US</button>
                </div>
            </div>

            {/* Testimonial */}
            <div className="mt-12 sm:mt-20 text-center max-w-xs sm:max-w-3xl mx-auto">
                <div className="flex justify-center gap-1 text-star">
                    <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                    <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                    <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                    <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                    <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                </div>
                <blockquote className="mt-4 sm:mt-6 font-martian-mono text-lg sm:text-2xl font-bold leading-relaxed">
                    "This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"
                </blockquote>
                <p className="mt-4 sm:mt-6 font-inter text-gray-600 text-sm sm:text-base">Sarah Chen, Software Architect</p>
            </div>
        </div>
      </section>
      
      {/* Footer CTA & Final Footer */}
      <div className="footer-grid-bg text-neutral-0" style={{
        backgroundColor: '#062630', 
        backgroundImage: `url(${PatternBg})`,
        backgroundSize: 'auto',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'center center'}}>
        <section className="container mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-20 text-center">
            <h2 className="font-martian-mono text-2xl sm:text-4xl lg:text-5xl font-bold">Ready to debug your reading list?</h2>
            <button className='border-2 border-white font-martian-mono bg-transparent text-white font-bold h-12 sm:h-14 px-4 sm:px-6 rounded-lg mt-6 sm:mt-10 text-sm sm:text-base transition-colors flex items-center justify-center gap-2 sm:gap-3 mx-auto hover:bg-neutral-700'
              onClick={handleReviewMembershipClick}
            >
              REVIEW MEMBERSHIP OPTIONS
              <Icon icon="hugeicons:arrow-up-02" width={20} height={20} />
            </button>
            <div className='flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-10 gap-3 sm:gap-6'>
                <div className='flex flex-row -space-x-4'>
                  <img className='h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-button-color' src={Image1} alt="Member 1"/>
                  <img className='h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-button-color' src={Image2} alt="Member 2"/>
                  <img className='h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-button-color' src={Image3} alt="Member 3"/>
                </div>
                <div className='flex flex-col gap-1 items-start'>
                   <div className="flex text-star">
                        <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                        <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                        <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                        <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                        <Icon icon="twemoji:star" width={20} height={20} className="sm:w-6 sm:h-6"/>
                    </div>
                  <p className='font-martian-mono text-xs sm:text-sm text-gray-300'>200+ developers joined already</p>
                </div>
            </div>
        </section>
        <footer className="">
          <hr className="border-gray-700 mx-4 sm:mx-6 lg:mx-10" />
            <div className="container mx-auto px-4 sm:px-6 lg:px-10 py-4 sm:py-6 flex flex-col sm:flex-row justify-between items-center font-inter text-gray-400 text-xs sm:text-base gap-2 sm:gap-0">
                <p>&copy; 2024 — Tech Book Club</p>
                <div className="flex gap-4 sm:gap-6">
                    <a href="#" aria-label="Twitter" className="hover:text-white"><Icon icon="hugeicons:new-twitter" width="18" height="18" className="sm:w-5 sm:h-5"/></a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-white"><Icon icon="hugeicons:linkedin-01" width="18" height="18" className="sm:w-5 sm:h-5"/></a>
                </div>
            </div>
        </footer>
      </div>
    
  </div>
  );
}

export default App;