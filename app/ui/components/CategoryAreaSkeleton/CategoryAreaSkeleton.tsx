import { CardSkeleton } from "../CardSkeleton/CardSkeleton"
import styles from './CategoryAreaSkeleton.module.scss'

export const CategoryAreaSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title}/>
                <div className={styles.button}/>
                <div className={styles.button}/>
            </div>
            <div className={styles.cardContainer}>
                <CardSkeleton/>
                <CardSkeleton/>
            </div>
        </div>
    )
}