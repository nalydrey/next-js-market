import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { Icon, IconNames } from "../SVGComponents/Icon"
import styles from './CardButton.module.scss'

interface CardButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconNames
}

export const CardButton = ({
    icon,
    ...props
}: CardButtonProps) => {
    return (
        <button
            className={styles.button}
            {...props}
        >
            <Icon iconName={icon}/>
        </button>
    )
}