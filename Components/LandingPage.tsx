import Image from 'next/image'
import React from 'react'

const LandingPage = () => {
  return (
    <section className='h-[95vh] w-full relative overflow-hidden'>
        {/* image */}
        <Image src={"/landing_pic.jpg"} width={600} height={400} alt='landing pic' className='h-full w-full object-cover opacity-90' priority={true} quality={100} placeholder='blur' blurDataURL={"/landing_pic.jpg"} loading='eager' draggable={false} unoptimized={true}
        />
        {/* overlay */}
        <div className='absolute bottom-0 left-0 right-0 text-white w-full h-[323px] bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(17,17,17,0.99)_80%)] flex items-end z-5 p-5'>
            {/* bar */}
            <div className='w-[10px] h-[239px] rounded bg-white'></div>
            {/* sunday info */}
            <div className='ml-4 '>
                <h1 className='text-5xl  font-semibold text-start mb-2 '
                >Join Us This Sunday</h1>
                {/* more info */}
                <p className='mb-[10px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <span className='italic text-[#EBBD48]'>Integer luctus mi libero, quis</span>
                </p>
                <p className='mb-[5px]'>First Service: <span className='font-bold text-xl'>7:30 AM</span>
                </p>
                <p>Second Service: <span className='font-bold text-xl'>9:30 AM</span>
                </p>
            </div>
        </div>
    </section>
  )
}

export default LandingPage