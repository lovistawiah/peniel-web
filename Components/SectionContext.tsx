import {  ReactNode } from "react"
import ContentBar from "./ContentBar"

const SectionContent = ({contentTitle, children}:{contentTitle:string, children:ReactNode}) => {
  return (
    <div className="w-full h-fit flex flex-col gap-[20px] ">
   <ContentBar contentTitle={contentTitle} />
    <div className="w-full h-fit flex flex-col md:flex-row gap-[25px] md:gap-0 justify-center md:px-5">
    {children}
    </div>
    </div>
  )
}

export default SectionContent