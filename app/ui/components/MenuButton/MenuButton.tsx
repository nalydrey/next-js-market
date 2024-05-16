import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import styles from './MenuButton.module.scss' 
import clsx from "clsx"
import { Icon, IconNames } from "../SVGComponents/Icon"

interface MenuButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    icon: IconNames
    title: string
    isActive: boolean
}

export const MenuButton = ({
    icon,
    title,
    className,
    isActive,
    ...props
}: MenuButtonProps) => {
    return (
        <button
            {...props}
            className={clsx(styles.button, {[styles.active]: isActive}, className)}
        >
            <Icon iconName={icon}/>
            <span>{title}</span>
        </button>
    )
}