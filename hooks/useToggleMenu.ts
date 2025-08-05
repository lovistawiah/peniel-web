import { useState } from "react"

const useToggleMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return { isOpen, toggleMenu }
}

export default useToggleMenu