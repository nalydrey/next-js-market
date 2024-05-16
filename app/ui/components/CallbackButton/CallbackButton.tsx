import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import styles from './CallbackButton.module.scss'

interface CallbackButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title: string
}

export const CallbackButton = ({
    title,
    ...props
}: CallbackButtonProps) => {
    return (
        <button
            className={styles.button}
            {...props}
        >
            {title}
        </button>
    )
}