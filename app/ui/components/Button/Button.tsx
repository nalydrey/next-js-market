import clsx from "clsx"
import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react"
import styles from './Button.module.scss'
import { green } from "@mui/material/colors"

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    icon?: ReactNode
    title?: string
    color?: 'black' | 'orange'
}

export const Button = ({
    icon,
    className,
    title,
    color = 'black',
    ...props
}: ButtonProps) => {

    return (
        <button 
            {...props}
            className={clsx( styles.button,
                {   
                    [styles.black]: color === 'black',
                    [styles.orange]: color === 'orange',
                    [styles.icon]: !!icon,
                    className: true
                    
                }, className
                )}
            
        >
            {icon}
            <span>{title}</span>{}
        </button>
    )
}