import PatternBg from './assets/PatternLight.svg';
import Image1 from './assets/image-1.png';
import Image2 from './assets/image-2.png';
import Image3 from './assets/image-3.png';
import HeroImage from './assets/HeroImage.png';
import icon from './assets/Icon.svg';
import { Icon } from '@iconify/react';
import Image from './assets/Image1.png';
import ImageTwo from './assets/Image2.png';
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
    <div className="hero-grid-bg min-h-screen flex flex-col" >
     <div className='container mx-auto px-6 lg:px-10 pb-16'style={{
      backgroundColor: '#FAF5F3', 
      backgroundImage: `url(${PatternBg})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center center'
    }}>
        {/* Header */}
        <div className="flex justify-start items-center gap-4 pt-4 sm:pt-8">
          <img className='h-8 sm:h-10 w-8 sm:w-10' src={icon} alt="Tech-book club logo"/>
          <h1 className='text-xl sm:text-2xl font-bold text-primary font-fira-code tracking-tight'>Tech Book Club</h1>
        </div>
        
        {/* Hero Section */}
        <main className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 mt-16 items-center justify-center'>
          <div className='order-2 lg:order-1 text-center lg:text-left'>
            <div className="w-full">
              <h1 className="font-martian-mono font-bold text-4xl sm:text-5xl lg:text-[52px] leading-tight tracking-tighter"
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
            
            <p className='pt-6 font-inter text-base max-w-md text-neutral-700'>
              Turn your reading time into learning time with fellow tech enthusiasts. 
              Get curated recommendations, join vibrant discussions, and level up your skills one chapter at a time.
            </p>
            
            <button
              className="border-2 border-primary font-martian-mono bg-button-color text-primary h-16 px-6 py-2 rounded-lg mt-8 text-base transition-colors flex items-center justify-center gap-3"
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
            
            {/* Profile Images and Stars */}
            <div className='flex items-center mt-10 gap-4 sm:gap-6'>
              <div className='flex flex-row -space-x-4'>
                <img className='h-16 w-16 rounded-full border-2 border-button-color' src={Image1} alt="Member 1"/>
                <img className='h-16 w-16 rounded-full border-2 border-button-color' src={Image2} alt="Member 2"/>
                <img className='h-16 w-16 rounded-full border-2 border-button-color' src={Image3} alt="Member 3"/>
              </div>
              <div className='flex flex-col gap-1 '>
                <div className='flex text-star'>
                  <Icon icon="twemoji:star"width={24} height={24} />
                  <Icon icon="twemoji:star"width={24} height={24} />
                  <Icon icon="twemoji:star"width={24} height={24} />
                  <Icon icon="twemoji:star"width={24} height={24} />
                  <Icon icon="twemoji:star"width={24} height={24} />
                </div>
                <p className='font-martian-mono text-sm text-neutral-700'>200+ developers joined already</p>
              </div>
            </div>
          </div>
          
          <div className='order-1 lg:order-2 flex items-center justify-center lg:justify-end'>
              <img className="w-full max-w-md lg:max-w-full h-auto object-cover rounded-lg shadow-lg" src={HeroImage} alt="Hero" />
          </div>
        </main>
      </div>
      {/* Features Section */}
    <section className='py-20 bg-neutral-0'>
      <div className='container mx-auto px-6 lg:px-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mt-16 sm:mt-20'>
          <div className='flex justify-center'>
          <img className='rounded-lg shadow-xl w-full max-w-md' src={Image} alt/>
          </div>
            <div>
              <h2 className="font-martian-mono text-3xl sm:text-4xl font-bold text-primary tracking-tight">Read together, grow together</h2>
              <ul className="mt-6 space-y-4 font-inter text-gray-700">
                <li className="flex items-start gap-3">
                  <Icon icon="hugeicons:checkmark-square-01" className="mt-1 flex-shrink-0" width={22} height={22}/>
                  <span>Monthly curated tech reads selected by industry experts</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="hugeicons:checkmark-square-01" className="mt-1 flex-shrink-0" width={22} height={22}/>
                  <span>Virtual and in-person meetups for deep-dive discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon icon="hugeicons:checkmark-square-01" className="mt-1 flex-shrink-0" width={22} height={22}/>
                  <span>Early access to new tech book releases</span>
                </li>
                 <li className="flex items-start gap-3">
                  <Icon icon="hugeicons:checkmark-square-01" className="mt-1 flex-shrink-0" width={22} height={22}/>
                  <span>Author Q&A sessions with tech thought leaders</span>
                </li>
              </ul>
            </div>
      </div>
      </div>
    </section>
    {/* Third Section: Not your average book club */}
    <section className="py-20 bg-[#FFFFFF]">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Text Content */}
            <div className="order-2 md:order-1">
              <h2 className="font-martian-mono text-3xl sm:text-4xl font-bold text-[#062630] tracking-tight">
                Not your average book <span className="highlight-circle">club</span>
              </h2>
              <p className="mt-6 font-inter text-gray-700 max-w-md">
                Connect with a community that speaks your language - from Python to TypeScript and everything in between. Our discussions blend technical depth with practical applications.
              </p>
              <div className="flex items-center gap-4 mt-8">
                  <a href="#" aria-label="Calendar" className="text-gray-600 hover:text-[#062630]"><Icon icon="hugeicons:typescript-01" width="32" height="32" /></a>
                  <a href="#" aria-label="GitHub" className="text-gray-600 hover:text-[#062630]"><Icon icon="hugeicons:github-01" width="32" height="32" /></a>
                  <a href="#" aria-label="Community" className="text-blue-400 hover:text-blue-500"><Icon icon="hugeicons:react" width="38" height="38" /></a>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <img src={ImageTwo} alt="A diverse group of people in a book club" className="rounded-lg shadow-xl w-full max-w-md"/>
            </div>
            
          </div>
        </div>
      </section>
      {/* Fourth Section: Your tech reading journey */}
      <section className="py-20 bg-white">
        <div className="bg-[#FAF5F3] rounded-2xl mx-auto p-16" style={{
      backgroundColor: '#FAF5F3', 
      backgroundImage: `url(${PatternBg})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center center',
      maxWidth: '1170px',
      maxHeight: '454px'
    }}>
            <h2 className="font-martian-mono text-3xl sm:text-4xl font-bold text-[#062630] tracking-tight text-center">
                Your tech reading journey
            </h2>
            <div className="relative mt-12 flex justify-center">
                {/* Steps */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 w-full">
                    
                    {/* Step 1 */}
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto border-2 border-[#062630] rounded-md font-martian-mono font-bold">1</div>
                        <p className="mt-4 font-inter">Choose your membership tier</p>
                    </div>

                    {/* Step 2 */}
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto border-2 border-[#062630] rounded-md font-martian-mono font-bold">2</div>
                        <p className="mt-4 font-inter">Get your monthly book selection</p>
                    </div>

                    {/* Step 3 */}
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto border-2 border-[#062630] rounded-md font-martian-mono font-bold">3</div>
                        <p className="mt-4 font-inter">Join our discussion forums</p>
                    </div>

                    {/* Step 4 */}
                    <div className="text-center">
                        <div className="flex items-center justify-center w-10 h-10 mx-auto border-2 border-[#062630] rounded-md font-martian-mono font-bold">4</div>
                        <p className="mt-4 font-inter">Attend exclusive meetups</p>
                    </div>
                </div>
                
                {/* Connecting Arrows for larger screens */}
                <div className="absolute top-5 left-0 w-full h-full hidden lg:flex justify-center items-start pointer-events-none">
                    <div className="w-full max-w-4xl flex justify-around">
                        <div className="w-1/4"></div>
                        <div className="w-1/4 flex justify-center journey-arrow -ml-4">
                            <Icon icon="ph:arrow-curved-right-thin" width="48" height="48" />
                        </div>
                        <div className="w-1/4 flex justify-center journey-arrow">
                             <Icon icon="ph:arrow-curved-right-thin" width="48" height="48" />
                        </div>
                        <div className="w-1/4 flex justify-center journey-arrow -mr-4">
                             <Icon icon="ph:arrow-curved-right-thin" width="48" height="48" />
                        </div>
                         <div className="w-1/4"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>
      {/* Fifth Section: Membership Options & Testimonial */}
      <section className="py-20 bg-white" ref={membershipRef}>
        <div className="container mx-auto px-6 lg:px-10">
            <h2 className="font-martian-mono text-3xl sm:text-4xl font-bold text-[#062630] tracking-tight text-center">
                Membership options
            </h2>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
                {/* Starter Plan */}
                <div className="border border-[#E6E1DF] rounded-lg p-8 flex flex-col">
                    <h3 className="font-martian-mono text-2xl font-bold">Starter</h3>
                    <p className="font-inter text-gray-500 mt-2"><span className="text-4xl font-bold text-[#062630]">$19</span> /month</p>
                    <ul className="space-y-4 mt-8 font-inter flex-grow">
                        <li className="flex items-center gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={22} height={22}/>1 book/month</li>
                        <li className="flex items-center gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={22} height={22}/>Online forums</li>
                    </ul>
                    <button className="w-full mt-8 border-2 bg-button-color border-[#062630] text-[#062630] font-martian-mono font-bold py-3 rounded-lg hover:text-white transition-colors"
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
                <div className="border-2 border-[#E6E1DF] bg-[#FAF5F3] rounded-lg p-8 flex flex-col shadow-lg">
                    <h3 className="font-martian-mono text-2xl font-bold">Pro</h3>
                    <p className="font-inter text-gray-500 mt-2"><span className="text-4xl font-bold text-[#062630]">$29</span> /month</p>
                    <ul className="space-y-4 mt-8 font-inter flex-grow">
                        <li className="flex items-center gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={22} height={22}/>2 books/month</li>
                        <li className="flex items-center gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={22} height={22}/>Virtual meetups</li>
                    </ul>
                    <button className="w-full mt-8 border-2 border-[#062630] bg-button-color text-white font-martian-mono font-bold py-3 rounded-lg hover:bg-opacity-90 transition-colors"
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
                <div className="border border-[#E6E1DF] rounded-lg p-8 flex flex-col">
                    <h3 className="font-martian-mono text-2xl font-bold">Enterprise</h3>
                    <p className="font-inter text-gray-500 mt-2"><span className="text-4xl font-bold text-[#062630]">Custom</span></p>
                     <ul className="space-y-4 mt-8 font-inter flex-grow">
                        <li className="flex items-center gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={22} height={22}/>Team access</li>
                        <li className="flex items-center gap-3"><Icon icon="hugeicons:checkmark-square-01" className="text-[#FEA36F]" width={22} height={22}/>Private sessions</li>
                    </ul>
                    <button className="w-full mt-8 border-2 bg-button-color border-[#062630] text-[#062630] font-martian-mono font-bold py-3 rounded-lg hover:text-white transition-colors"
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
            <div className="mt-20 text-center max-w-3xl mx-auto">
                <div className="flex justify-center gap-1 text-star">
                    <Icon icon="twemoji:star" width={24} height={24} />
                    <Icon icon="twemoji:star" width={24} height={24} />
                    <Icon icon="twemoji:star" width={24} height={24} />
                    <Icon icon="twemoji:star" width={24} height={24} />
                    <Icon icon="twemoji:star" width={24} height={24} />
                </div>
                <blockquote className="mt-6 font-martian-mono text-2xl font-bold leading-relaxed">
                    "This book club transformed my technical reading from a solitary activity into an enriching community experience. The discussions are gold!"
                </blockquote>
                <p className="mt-6 font-inter text-gray-600">Sarah Chen, Software Architect</p>
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
        <section className="container mx-auto px-6 lg:px-10 py-20 text-center">
            <h2 className="font-martian-mono text-4xl sm:text-5xl font-bold">Ready to debug your reading list?</h2>
            <button className='border-2 border-white font-martian-mono bg-transparent text-white font-bold h-14 px-6 rounded-lg mt-10 text-base transition-colors flex items-center justify-center gap-3 mx-auto hover:bg-neutral-700'>
                REVIEW MEMBERSHIP OPTIONS
                <Icon icon="hugeicons:arrow-up-02" width={20} height={20} />
            </button>
            <div className='flex justify-center items-center mt-10 gap-4 sm:gap-6'>
                <div className='flex flex-row -space-x-4'>
                  <img className='h-16 w-16 rounded-full border-2 border-button-color' src={Image1} alt="Member 1"/>
                  <img className='h-16 w-16 rounded-full border-2 border-button-color' src={Image2} alt="Member 2"/>
                  <img className='h-16 w-16 rounded-full border-2 border-button-color' src={Image3} alt="Member 3"/>
                </div>
                <div className='flex flex-col gap-1 items-start'>
                   <div className="flex text-star">
                        <Icon icon="twemoji:star" width={24} height={24} />
                        <Icon icon="twemoji:star" width={24} height={24} />
                        <Icon icon="twemoji:star" width={24} height={24} />
                        <Icon icon="twemoji:star" width={24} height={24} />
                        <Icon icon="twemoji:star" width={24} height={24} />
                    </div>
                  <p className='font-martian-mono text-sm text-gray-300'>200+ developers joined already</p>
                </div>
            </div>
        </section>
        <footer className="">
          <hr className="border-gray-700 mx-6 lg:mx-10" />
            <div className="container mx-auto px-6 lg:px-10 py-6 flex justify-between items-center font-inter text-gray-400">
                <p>&copy; 2024 — Tech Book Club</p>
                <div className="flex gap-6">
                    <a href="#" aria-label="Twitter" className="hover:text-white"><Icon icon="hugeicons:new-twitter" width="20" height="20" /></a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-white"><Icon icon="hugeicons:linkedin-01" width="20" height="20" /></a>
                </div>
            </div>
        </footer>
      </div>
    </div>
  );
}

export default App;