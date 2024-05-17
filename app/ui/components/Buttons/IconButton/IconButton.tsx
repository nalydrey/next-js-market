import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { Icon, IconNames } from "../../SVGComponents/Icon"
import clsx from "clsx"
import styles from './IconButton.module.scss'

interface IconButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon: IconNames
    isActive?: boolean
    buttonType: 'card' | 'round' | 'buy' | 'header'
}

export const IconButton = ({
    isActive,
    className,
    buttonType,
    icon,
    ...props
}: IconButtonProps) => {
    return (
        <button
            className={clsx(styles.button,
                {
                    [styles.active]: isActive,
                    [styles.cardButton] : buttonType === 'card',
                    [styles.roundButton] : buttonType === 'round',
                    [styles.buyButton] : buttonType === 'buy',
                    [styles.headerButton]: buttonType === 'header',
                },
                className
            )}
            {...props}
        >
            <Icon iconName={icon}/>
        </button>
    )
}