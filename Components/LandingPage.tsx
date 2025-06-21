import Image from 'next/image'
import React from 'react'
import JoinUsLive from './JoinUsLive'
import ContentBar from './ContentBar'
import Box from './Box'

const LandingPage = () => {
return (
    <div className='w-full h-full flex flex-col gap-10'>
        <section className='h-[95vh] w-full relative overflow-hidden'>
        {/* image */}
        <Image src={"/landing_pic.jpg"} width={600} height={400} alt='landing pic' className='h-full w-full object-cover opacity-90' priority={false} quality={100} placeholder='blur' blurDataURL={"/landing_pic.jpg"} loading='lazy' draggable={false} unoptimized={true}
        />
        {/* overlay */}
        <div className='absolute bottom-0 md:bottom-0 left-0 right-0 text-white w-full h-[323px] md:h-[325px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(17,17,17,0.99)_80%)] md:bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(17,17,17,0.99)_96%)] flex items-end z-5 p-5 md:pl-10'>
            {/* bar */}
            <div className='w-[8px] h-[239px] md:h-[260px] rounded bg-white'></div>
            {/* sunday info */}
            <div className='ml-4 '>
                <h1 className='text-5xl  font-semibold text-start mb-2 md:text-7xl '
                >Join Us This <span className='md:block'>Sunday</span>
                </h1>
                {/* more info */}
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
                <p className='italic text-[#EBBD48] mb-[10px]'>Integer luctus mi libero, quis</p>

                <p className='mb-[5px]'>First Service: <span className='font-bold text-xl'>7:30 AM</span>
                </p>
                <p>Second Service: <span className='font-bold text-xl'>9:30 AM</span>
                </p>
            </div>
        </div>
    </section>
    <JoinUsLive />
    <ContentBar contentTitle='Discover' />
    <Box 
     image='/titus.jpg'
     title1='New to'
     title2='Peniel'
     link='/'
     description='Discover what we are all about.'
     alt='new to peniel'
     key={1}
    />
    </div>
)
}

export default LandingPage