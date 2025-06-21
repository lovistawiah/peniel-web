const ContentBar = ({contentTitle}:{contentTitle:string}) => {
  return (
    <div className="w-[90%] self-center h-fit **:bg-[#333333] flex items-center justify-center gap-1">
        <div className="w-full h-[6px]"></div>
        <div className="uppercase p-[8px] font-semibold text-base md:text-lg rounded-[8px] ">{contentTitle}</div>
        <div className="w-full h-[6px]"></div>
    </div>
  )
}

export default ContentBar