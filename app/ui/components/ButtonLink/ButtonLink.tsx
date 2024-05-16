import clsx from "clsx"
import styles from './ButtonLink.module.scss'
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"

interface ButtonLinkProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    isActive: boolean
    title: string
}


export const ButtonLink = ({
    isActive,
    title,
    ...props
}: ButtonLinkProps) => {
    return (
        <button
            className={clsx(
                styles.button,
                {[styles.active]: isActive}
            )}
            {...props}
        >
            {title}
        </button>
    )
}