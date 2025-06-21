import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"


// this holds all customizable box components
const Box = ({image, title1,title2, link, alt, description,}: {image: string, title1: string, title2:string, link: string, description: string, alt:string}) => {
    return (
        <div className="w-full h-fit flex justify-center">
            
            <Link href={link} className="w-[90%] h-[370px] md:h-[300px] relative">
            <Image src={image} width={1000} height={1000} alt={alt} className="w-full h-full rounded-[20px] opacity-70 object-cover" priority={false} quality={100} placeholder='blur' blurDataURL={image} loading='lazy' draggable={false} unoptimized={true} />
            <div className="absolute top-0 left-0 right-0 bottom-0 ">
                <div className="w-full relative bg-transparent h-[60px]">
                    <MdArrowOutward className="text-5xl right-4 absolute bottom-0" />
                </div>
                <div  className="absolute bottom-4 right-0 left-0 h-fit pl-5">
                    <h1 className="text-6xl">{title1}</h1>
                    <h1 className="text-6xl"> {title2}</h1>
                    
                    <p className="opacity-80">{description}</p>
                </div>
            </div>
        </Link>
        </div>
    )
}

export default Box