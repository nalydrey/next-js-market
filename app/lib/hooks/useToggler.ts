import { useState } from "react"

export const useToggler = () => {

    const [openStatus, setOpenStatus] = useState<boolean>(false)

    const handleOpen = () => {
        setOpenStatus(true)
    }
    const handleClose = () => {
        setOpenStatus(false)
    }

    const handleToggle = () => {
       setOpenStatus(!openStatus) 
    }
    return {
        openStatus,
        handleClose,
        handleOpen,
        handleToggle
    }
}