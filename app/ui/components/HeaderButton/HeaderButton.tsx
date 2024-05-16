import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import clsx from "clsx"
import styles from './HeaderButton.module.scss'
import { Icon, IconNames } from "../SVGComponents/Icon"

interface HeaderButtonProps 
extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: IconNames
    isActive?: boolean
}

export const HeaderButton = ({
    className,
    icon,
    isActive,
    ...props
}: HeaderButtonProps) => {
    return (
        <button 
            className={clsx(styles.wrapper, {[styles.active]: isActive}, className)}
            {...props}
        >
            <Icon iconName={icon}/>
        </button>
    )
}