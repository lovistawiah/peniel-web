'use client'
import {CiMenuBurger,CiLocationOn,} from 'react-icons/ci'
import {FaChevronDown,FaInstagram,FaFacebookF,FaPhone,FaEnvelope} from 'react-icons/fa6'
import {FiYoutube,} from 'react-icons/fi'
import Link from 'next/link'    
import Image from 'next/image'

import useCloseSublinks from '@/hooks/useCloseSublinks'
import useToggleMenu from '@/hooks/useToggleMenu'
import { useEffect, useRef, useState } from 'react'


const Navbar = () => {
    const { toggleAbout, openAbout, toggleMedia, openMedia } = useCloseSublinks()
    const { isOpen, toggleMenu } = useToggleMenu()
    const [show, setShow] = useState(true)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window === 'undefined') return;
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY.current && currentScrollY > 10) {
                setShow(false); // scrolling down, hide
            } else {
                setShow(true); // scrolling up, show
            }
            lastScrollY.current = currentScrollY;
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`${isOpen ? 'bg-[#111111]' : 'bg-transparent'} w-full font-potta text-white sticky top-0 shadow-md z-50 transition-transform duration-300 ${(show ? ' translate-y-0' : ' -translate-y-full')}`}
            style={{ willChange: 'transform' }} >
            <nav >
                <div className="flex items-center justify-between p-[23px] ">
                    {/* Menubar */}
                    <div>
                        <CiMenuBurger className='text-5xl w-[48px]' onClick={toggleMenu} />
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
                <ul className={`flex flex-col items-center justify-center text-white h-fit w-full font-Potta [&_li]:text-center [&_li]:text-[20px] [&_li]:border-b-[0.5px] [&_li]:border-b-[#454545] [&_li]:w-full [&_li]:h-[70px] [&_li]:flex [&_li]:items-center [&_li]:justify-center [&>li>p]:flex [&>li>p]:justify-center [&>li>p]:items-center [&>li>p]:gap-[4px] [&>li>p]:underline  [&_li_a]:flex [&_li_a]:justify-center [&_li_a]:items-center [&_li]:cursor-pointer [&_li_a]:gap-1 [&_li_a]:w-full [&_li_a]:h-full [&_li_a]:underline first:border-t-[0.5px] ${isOpen ? 'block' : 'hidden'}`} >
                    {/* about us */}
                    <li onClick={toggleAbout} className='relative'>
                        <p>About Us <FaChevronDown /></p>
                    </li>
                    {/* sub links to the about page */}
                    <section className={`w-full h-fit ${openAbout ? 'block' : 'hidden'}`}>
                        <ul className=' w-full h-fit [&_li]:bg-[#1C1C1C]'>
                            <li>
                                <Link href={"/about"}>Who We Are</Link>
                            </li>
                            <li>
                                <Link href={"/"}>What We Do</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Who We Believe</Link>
                            </li>
                        </ul>
                    </section>
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
                    {/* Media*/}
                    <li onClick={toggleMedia} className='relative'>
                        <p>Media <FaChevronDown /></p>
                    </li>
                    {/* sub links to the about page */}
                    <section className={`w-full h-fit ${openMedia ? 'block' : 'hidden'}`}>
                        <ul className=' w-full h-fit [&_li]:bg-[#1C1C1C]'>
                            <li>
                                <Link href={"/about"}>Live</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Online Radio</Link>
                            </li>
                            <li>
                                <Link href={"/"}>Sermons</Link>
                            </li>
                        </ul>
                    </section>
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
                        <Link className='text-[#EBBD48]' href={"/"}>Give</Link>
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