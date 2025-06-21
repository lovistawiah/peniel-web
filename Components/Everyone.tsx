import Link from 'next/link'
import React from 'react'

const Everyone = () => {
  return (
    <div className='w-[90%] h-fit self-center bg-white/90 rounded-[20px] text-black py-[20px] px-[20px] md:[&_h4]:text-lg '>
        {/* headers */}
       <div className='[&>h1]:text-5xl md:[&>h1]:text-6xl [&>hi]:font-semibold'>
       <h1>A Place for</h1>
       <h1 className='pb-[15px]'>Everyone</h1>
       <p className='opacity-50'>A seat for everyone in this generation and the next</p>
       </div>
       {/* younger kids */}
       <Link href={"/"} className='w-full h-fit flex items-center gap-[15px] bg-black/10 rounded-[20px] mt-[20px] p-[20px]'>
        <div className='rounded-full w-5 h-5 bg-[#666666]'></div>
        <div className='flex flex-col gap-[-10px]'>
            <h4 className='font-semibold'>Kids Preschool</h4>
            <p className='opacity-50'>Younger kids, 0-4yrs</p>
        </div>
       </Link>
       {/* Older kids */}
       <Link href={"/"} className='w-full h-fit flex items-center gap-[15px] bg-black/10 rounded-[20px] mt-[20px] p-[20px]'>
        <div className='rounded-full w-5 h-5 bg-[#666666]'></div>
        <div className='flex flex-col gap-[-10px]'>
            <h4 className='font-semibold'>Kids</h4>
            <p className='opacity-50'>Older kids, 5-9yrs</p>
        </div>
       </Link>
       {/* Older kids */}
       <Link href={"/"} className='w-full h-fit flex items-center gap-[15px] bg-black/10 rounded-[20px] mt-[20px] p-[20px]'>
        <div className='rounded-full w-5 h-5 bg-[#666666]'></div>
        <div className='flex flex-col gap-[-10px]'>
            <h4 className='font-semibold'>Kids</h4>
            <p className='opacity-50'>Older kids, 5-9yrs</p>
        </div>
       </Link>
       {/* Teens */}
       <Link href={"/"} className='w-full h-fit flex items-center gap-[15px] bg-black/10 rounded-[20px] mt-[20px] p-[20px]'>
        <div className='rounded-full w-5 h-5 bg-[#666666]'></div>
        <div className='flex flex-col gap-[-10px]'>
            <h4 className='font-semibold'>Teens</h4>
            <p className='opacity-50'>Older kids, 10-15yrs</p>
        </div>
       </Link>
       {/* Youth  */}
       <Link href={"/"} className='w-full h-fit flex items-center gap-[15px] bg-black/10 rounded-[20px] mt-[20px] p-[20px]'>
        <div className='rounded-full w-5 h-5 bg-[#666666]'></div>
        <div className='flex flex-col gap-[-10px]'>
            <h4 className='font-semibold'>Youth</h4>
            <p className='opacity-50'>Young Adults, 18+</p>
        </div>
       </Link>
       {/* Wisdom  */}
       <Link href={"/"} className='w-full h-fit flex items-center gap-[15px] bg-black/10 rounded-[20px] mt-[20px] p-[20px]'>
        <div className='rounded-full w-5 h-5 bg-[#666666]'></div>
        <div className='flex flex-col gap-[-10px]'>
            <h4 className='font-semibold'>Wisdom Church</h4>
            <p className='opacity-50'>Aged, 60+</p>
        </div>
       </Link>
    </div>
  )
}

export default Everyone