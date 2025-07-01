import PatternBg from './assets/PatternLight.svg';
import Image1 from './assets/image-1.png';
import Image2 from './assets/image-2.png';
import Image3 from './assets/image-3.png';
import HeroImage from './assets/HeroImage.png';
import icon from './assets/icon.svg';
import { Icon } from '@iconify/react';
import Image from './assets/Image1.png';
import ImageTwo from './assets/Image2.png';
const App = () => {
  return (
    <div className="hero-grid-bg min-h-screen flex flex-col" >
     <div className='container mx-auto px-6 lg:px-10 pb-16'style={{
      backgroundColor: '#FAF5F3', 
      backgroundImage: `url(${PatternBg})`,
      backgroundSize: 'auto',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center center',
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
            
            <button className='border-2 border-primary font-martian-mono bg-button-color text-primary h-16 px-6 py-2 rounded-lg mt-8 text-base hover:bg-opacity-90 transition-colors flex items-center justify-center gap-3'>
              REVIEW MEMBERSHIP OPTIONS 
              <Icon icon="hugeicons:arrow-down-02" className='inline-block ml-2' width={20} height={20} />
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
                  <Icon icon="hugeicons:star"width={24} height={24} />
                  <Icon icon="hugeicons:star"width={24} height={24} />
                  <Icon icon="hugeicons:star"width={24} height={24} />
                  <Icon icon="hugeicons:star"width={24} height={24} />
                  <Icon icon="hugeicons:star"width={24} height={24} />
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
                  <a href="#" aria-label="Calendar" className="text-gray-600 hover:text-[#062630]"><Icon icon="ion:calendar-clear-outline" width="32" height="32" /></a>
                  <a href="#" aria-label="GitHub" className="text-gray-600 hover:text-[#062630]"><Icon icon="cib:github" width="32" height="32" /></a>
                  <a href="#" aria-label="Community" className="text-blue-400 hover:text-blue-500"><Icon icon="ion:people-circle-outline" width="38" height="38" /></a>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 md:order-2 flex justify-center">
              <img src={ImageTwo} alt="A diverse group of people in a book club" className="rounded-lg shadow-xl w-full max-w-md"/>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;