import { RefObject, useEffect } from "react"

export const useClickOutside = (isOpen: boolean,  menuRef: RefObject<HTMLElement>, callback?: () => void) => {
    
    useEffect(()=>{

        if(!isOpen) return
        
        const closeOutside = (e: MouseEvent) => {
            const targ = e.target as Node
            if(menuRef.current && !menuRef.current.contains(targ)){
                callback && callback()
            }
        }
        
        document.addEventListener('click', closeOutside) 
        return () => {
            document.removeEventListener('click', closeOutside)
        }
    },[menuRef, isOpen])


}