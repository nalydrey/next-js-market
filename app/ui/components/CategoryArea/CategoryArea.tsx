import { ProductContainer } from './ProductContainer/ProductContainer'
import { CardSkeleton } from '../Preloaders/CardSkeleton/CardSkeleton'
import styles from './CategoryArea.module.scss'
import { Suspense } from 'react'
import { IconButton } from '../Buttons/IconButton/IconButton'

interface CategoryAreaProps {
    title: string
    categoryId: number
}

export const CategoryArea = async ({
    title,
    categoryId,
}: CategoryAreaProps) => {

    
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.actions}>
                   <IconButton buttonType='round' icon='leftArrow'/>
                   <IconButton buttonType='round' icon='rightArrow'/>
                </div>
            </header>
            <div className={styles.cardContainer}>
                <Suspense key={categoryId} fallback={
                    <>
                        <CardSkeleton/>
                        <CardSkeleton/>
                    </>
                }>
                    <ProductContainer categoryId={categoryId}/>
                </Suspense>
            </div>
        </div>
    )
}