import {CiMenuBurger,CiLocationOn,} from 'react-icons/ci'
import {FaChevronDown,FaInstagram,FaFacebookF,FaPhone,FaEnvelope} from 'react-icons/fa6'
import {FiYoutube,} from 'react-icons/fi'
import Link from 'next/link'    
import Image from 'next/image'
const Navbar = () => {
  return (
    <section className='bg-blue-700 w-full'>
        <nav>
            <div className="flex items-center justify-between p-[23px] ">
                {/* Menubar */}
                <div>
                <CiMenuBurger className='text-5xl w-[48px]' />
                </div>
                {/* Logo */}
                <div>
                    <Image src="/logo.png" alt="logo" width={60} height={60} />
                </div>
                {/* Location Icon */}
                <div>
                    <CiLocationOn className='text-5xl w-[48px]' />
                </div>
            </div>
            {/* Nav Links */}
        
        <ul className='flex flex-col items-center justify-center text-white h-fit w-full font-Potta [&>li]:text-center [&>li]:text-[20px] [&>li]:border-b-[0.5px] [&>li]:border-b-[#454545] [&>li]:w-full [&>li]:h-[70px] [&>li]:flex [&>li]:items-center [&>li]:justify-center [&>li>a]:flex [&>li>a]:justify-center [&>li>a]:items-center [&>li>a]:gap-1 [&>li>a]:w-full [&>li>a]:h-full first:border-t-[0.5px] 
        '>
        
            {/* about us */}
            <li className='cursor-pointer flex flex-col items-center justify-center h-fit!
             bg-yellow-500'>
           <p className='flex items-center gap-1'> About Us <span> <FaChevronDown /></span></p>
            <ul>
                <li>
                    <Link href={"/"}>Who We Are</Link>
                </li>
                <li>
                    <Link href={"/"}>What We Do</Link>
                </li>
                <li>
                    <Link href={"/"}>Who We Believe</Link>
                </li>
            </ul>
            </li>

            {/* Events */}
            <li>
            <Link href={"/"}>Events</Link>
            </li>
            {/* Ministries */}
            <li >
            <Link href={"/"}>Ministries</Link>
            </li>
            {/* Contact */}
            <li >
            <Link href={"/"}>Contact Us</Link>
            </li>

            {/* Media */}
            <li className='flex flex-col items-center justify-center h-fit!'>
            <p className='flex items-center gap-1'>Media <span> <FaChevronDown /></span></p>
            <div className='w-full h-full'>
            <ul className='text-base [&>li]:w-full [&>li]:h-fit [&>li]:p-2 [&>li]:border-b-[0.5px] [&>li]:border-b-[#454545] [&>li]:bg-[#1C1C1C] [&>li>a]:underline [&>li>a]:w-full [&>li>a]:border [&>li>a]:border-red-800
            '>
                <li>
                    <Link href={"/"}>Who We Are</Link>
                </li>
                <li>
                    <Link href={"/"}>What We Do</Link>
                </li>
                <li>
                    <Link href={"/"}>Who We Believe</Link>
                </li>
            </ul>
            </div>
           
            </li>
            {/* Departments */}
            <li >
            <Link href={"/"}>Departments</Link>
            </li>
        {/* Books */}
        <li >
            <Link href={"/"}>Books</Link>
            </li>
        {/* Give */}
        <li >
            <Link href={"/"}>Give</Link>
            </li>
        {/* Social Media Icons */}
        <li className='gap-5 **:text-3xl px-3'>
            <Link href={"/"}>
            <FaInstagram/>
            </Link>
            <Link href={"/"}>
            <FiYoutube/>
            </Link>
            <Link href={"/"}>
            <FaFacebookF/>
            </Link>
            <Link href={"/"}>
            <FaPhone/>
            </Link>
            <Link href={"/"}>
            <FaEnvelope/>
            </Link>
            </li>
        </ul>
        </nav>
    </section>
  )
}

export default Navbar