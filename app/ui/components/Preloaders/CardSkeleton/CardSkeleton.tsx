import styles from './CardSkeleton.module.scss'

export const CardSkeleton = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}/>
            <div className={styles.img}/>
            <div className={styles.title}/>
            <div className={styles.footer}>
                <div className={styles.price}/>
                <div className={styles.button}/>
            </div>
        </div>
    )
}