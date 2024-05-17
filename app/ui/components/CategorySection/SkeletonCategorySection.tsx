import { CategoryAreaSkeleton } from '../Preloaders/CategoryAreaSkeleton/CategoryAreaSkeleton'
import { PageContainer } from '../PageContainer/PageContainer'
import styles from './CategorySection.module.scss'

export const SkeletonCategorySection = () => {
    return (
        <section className={styles.section}>
            <PageContainer className={styles.container}>
                <CategoryAreaSkeleton/>
                <CategoryAreaSkeleton/>
                <CategoryAreaSkeleton/>
                <CategoryAreaSkeleton/>
            </PageContainer>
        </section>
    )
}