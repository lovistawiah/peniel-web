import { useState, } from "react"

const useCloseSublinks = () => {
    const [openAbout, setOpenAbout] = useState(false)
    const [openMedia, setOpenMedia] = useState(false)

    const toggleAbout = () => {
        if (openAbout) {
            setOpenAbout(false)

        } else {
            setOpenAbout(true)
            setOpenMedia(false) // Close Media sublinks when About is opened
        }
    }
    const toggleMedia = () => {
        if (openMedia) {
            setOpenMedia(false)

        } else {
            setOpenMedia(true)
            setOpenAbout(false) // Close About sublinks when Media is opened
        }
    }
    return { toggleAbout, openAbout, toggleMedia, openMedia }
}

export default useCloseSublinks