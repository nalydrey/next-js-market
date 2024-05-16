import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'
import styles from './RoundButton.module.scss'
import { Icon, IconNames } from '../SVGComponents/Icon'

interface RoundButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconNames
}

export const RoundButton = ({
    icon,
    ...props
}: RoundButtonProps) => {
    return (
        <button
            className={styles.button}
            {...props}
        >
            <Icon iconName={icon}/>
        </button>
    )
}