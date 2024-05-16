import { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { Icon, IconNames } from "../SVGComponents/Icon"
import styles from './BuyButton.module.scss'
import clsx from "clsx"

interface BuyButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}

export const BuyButton = ({
    className,
    ...props
}: BuyButtonProps) => {
    return (
        <button
        className={clsx(styles.button, className) }
        {...props}
        >
            <Icon iconName={'basket'}/>
        </button>
    )
}