import Link from "next/link"
import { FaEnvelope, FaPhone,FaFacebookF, FaInstagram } from "react-icons/fa"
import { FiYoutube } from "react-icons/fi"

const Footer = () => {
  return (
    <div>
        <section className=" w-full h-[150px] bg-[linear-gradient(0deg,rgba(0,0,0,0)_0%,rgba(17,17,17,0.99)_80%)] "></section>
        <section className="grid grid-cols-2 grid-row-3 gap-3 md:grid-cols-3 md:grid-rows-3 px-2">
            {/* about */}
        <div className='w-full h-[150px] justify-center bg-red-400'>
            <h3>About</h3>
            <p>Who We Are</p>
            <p>What We Do</p>
        </div>
           {/* Get Involved */}
        <div className='w-full h-[150px] justify-center bg-green-400'>
        <h3>Get Involved</h3>
        <p>Outreach</p>
        <p>Ministries</p>
        <p>Family Church</p>
        <p>Serve</p>
        </div>
        {/* Media  */}
        <div className='w-full h-[150px] justify-center bg-blue-400'>
            <h3>Media</h3>
            <p>Live</p>
            <p>Online Radio</p>
            <p>Sermons</p>
        </div>

         {/* Others */}
        <div className='w-full h-[150px] justify-center bg-yellow-400'>
        <h3>Give</h3>
        <h3>Events</h3>
        <h3>Contact Us</h3>
        </div>
       
        <div className='w-full h-[150px] justify-center bg-violet-400'>
        <Link href={"/"}>
            <FaFacebookF/>
        </Link>
         <Link href={"/"}>
            <FaInstagram/>
        </Link>
        <Link href={"/"}>
            <FiYoutube/>
        </Link>
        </div>
        <div className='w-full h-[150px] justify-center bg-indigo-400'>
        <Link href={"/"}>
            <FaPhone/>
        </Link>
        <Link href={"/"}>
            <FaEnvelope/>
        </Link>
        </div>
    </section>
    </div>
  )
}

export default Footer