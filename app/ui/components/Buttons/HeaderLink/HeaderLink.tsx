import Link from "next/link"
import styles from './HeaderLink.module.scss'
import clsx from "clsx"

interface HeaderLinkProps {
    title: string
    href: string
    isActive: boolean
}

export const HeaderLink = ({
    title,
    href,
    isActive
}: HeaderLinkProps) => {

    return (
        <Link 
            className={ clsx(
                styles.link,
                {[styles.activeLink]: isActive}
            )
            }    
            href={href}
        >
            {title}
        </Link>
    )
}