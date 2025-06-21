import Image from "next/image"
import Link from "next/link"
import {MdArrowOutward} from "react-icons/md"

const JoinUsLive = () => {
return (
    <div className="w-full h-fit flex justify-center">
        
        <Link href={"/"} className="w-[90%] h-[370px] md:h-[300px] relative">
        <Image src={"/join_us_live.jpg"} width={1000} height={1000} alt="join us live" className="w-full h-full rounded-[20px] opacity-70 object-cover" priority={false} quality={100} placeholder='blur' blurDataURL={"/join_us_live.jpg"} loading='lazy' draggable={false} unoptimized={true} />
        <div className="absolute top-0 left-0 right-0 bottom-0 ">
            <div className="w-full relative bg-transparent h-[60px]">
                <MdArrowOutward className="text-5xl right-4 absolute bottom-0" />
            </div>
            <div  className="absolute bottom-4 right-0 left-0 h-fit pl-5">
                <h1 className="text-6xl">Join Us </h1>
                <h1 className="text-6xl"> Online</h1>
                <p>Streaming live every Sunday</p>
                <p className="[&>span]:text-[18px] ">at <span>8am</span> & <span>10am</span>
                </p>
            </div>
        </div>
    </Link>
    </div>
)
}

export default JoinUsLive