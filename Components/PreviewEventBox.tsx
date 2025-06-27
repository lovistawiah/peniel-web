import Image from "next/image"
import Link from "next/link"
import { MdArrowOutward } from "react-icons/md"
import { cn } from "@/utils"

// this holds all customizable box components
const PreviewEventBox = ({image,link,className, alt,}: {image: string,  link: string, alt:string, className:string}) => {
    return (
        <div className="w-full h-fit flex justify-center">
            
            <Link href={link} className="w-[90%] md:w-[95%]  h-[370px] md:h-[420px] relative">
            <Image src={image} width={1000} height={1000} alt={alt} className="w-full h-full rounded-[20px] opacity-70 object-cover" priority={false} quality={100} placeholder='blur' blurDataURL={image} loading='lazy' draggable={false} unoptimized={true} />
            <div className="absolute top-0 left-0 right-0 bottom-0 ">
                <div className="w-full relative bg-transparent h-[70px] ">
                    <MdArrowOutward className="text-5xl right-[20px] absolute top-[20px] " />
                    <div className={cn('left-[8px] absolute top-[8px] w-fit h-fit flex flex-col items-center gap-1.5 px-3.5 py-2 justify-center rounded-[10px]',className)}>
                        {/* month */}
                        <h3 className=
                        'text-xl font-semibold leading-5'>MAY</h3>
                        <h1 className="text-5xl leading-5 font-bold pb-1">1</h1>
                    </div>
                </div>
            </div>
        </Link>
        </div>
    )
}

export default PreviewEventBox