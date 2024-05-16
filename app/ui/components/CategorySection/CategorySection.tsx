import { getCategories } from "@/app/lib/api/categoriesApi"
import { CategoryArea } from "../CategoryArea/CategoryArea"
import { PageContainer } from "../PageContainer/PageContainer"
import styles from './CategorySection.module.scss'
import { Suspense } from "react"

export const CategorySection = async () => {

    const categories = await getCategories({page: 0})

    return (
        <section className={styles.section}>
            <PageContainer className={styles.container}>
                {categories.map(({id, name}) => (
                    <CategoryArea key={id} title={name} categoryId={id}/>
                ))}
            </PageContainer>
        </section>
    )
}