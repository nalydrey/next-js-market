import clsx from 'clsx'
import styles from './BurgerMenu.module.scss'
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface BurgerMenuProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    open?: boolean
}

export const BurgerMenu = ({
    open,
    ...props
}: BurgerMenuProps) => {


    return (
        <button 
            className={clsx(styles.burger, {[styles.lineActive]: open})}
            {...props}
        >
            <div className={styles.line}/>
            <div className={styles.line}/>
            <div className={styles.line}/>
        </button>
    )
}