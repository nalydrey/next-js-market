import { AnchorHTMLAttributes, ButtonHTMLAttributes, DetailedHTMLProps, ForwardRefExoticComponent } from "react"
import styles from './MenuItem.module.scss'
import Link from "next/link"
import { Icon } from "@/app/ui/components/SVGComponents/Icon"


interface MenuItemProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>{
    href: string
    title: string
    isArrow: boolean
}

export const MenuItem = ({
    href,
    title,
    isArrow,
    ...props
}: MenuItemProps) => {
    return (
        <Link
            href={href}
            className={styles.item}
            {...props}
        >
            <span>
                {title}
            </span>
           {isArrow && <Icon iconName="rightArrow"/>}
        </Link>
    )
}