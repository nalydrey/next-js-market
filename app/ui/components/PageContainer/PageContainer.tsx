import { ReactNode } from "react"
import styles from './PageContainer.module.scss'
import clsx from "clsx"


interface PageContainerProps {
    className?: string
    children: ReactNode
}


export const PageContainer = ({
    className,
    children
}: PageContainerProps) => {
    return (
        <div className={clsx(styles.container, className) }>
            {children}
        </div>
    )
}