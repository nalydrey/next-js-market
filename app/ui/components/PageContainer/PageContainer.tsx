import { ReactNode } from "react"
import clsx from "clsx"
import styles from './PageContainer.module.scss'


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