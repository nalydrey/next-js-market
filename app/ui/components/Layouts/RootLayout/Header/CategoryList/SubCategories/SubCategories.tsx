import { CategoryModel } from '@/app/lib/models/entities/category.model'
import styles from './SubCategories.module.scss'
import clsx from 'clsx'
import Link from 'next/link'

interface SubCategoriesProps {
    list: CategoryModel[]
}

export const SubCategories = ({
    list
}: SubCategoriesProps) => {

    
    return (
        <ul className={styles.container}>
            {list.map(({id, name, systemName}) => (
                <Link href={systemName} key={id}>{name}</Link>
            ))}
        </ul>
    )
}