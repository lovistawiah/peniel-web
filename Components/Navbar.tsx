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
            <li >
            <Link href={"/"}>About Us <span> <FaChevronDown  /></span></Link>
        
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
            <li >
            <Link href={"/"}>Media <span><FaChevronDown /></span></Link>
            
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