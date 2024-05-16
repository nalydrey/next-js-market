import { RoundButton } from '../RoundButton/RoundButton'
import { ProductContainer } from './ProductContainer/ProductContainer'
import { CardSkeleton } from '../CardSkeleton/CardSkeleton'
import styles from './CategoryArea.module.scss'
import { Suspense } from 'react'

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
                   <RoundButton icon='leftArrow'/>
                   <RoundButton icon='rightArrow'/>
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