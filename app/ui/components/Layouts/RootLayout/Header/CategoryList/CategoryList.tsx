import { CategoryModel } from '@/app/lib/models/entities/category.model'
import clsx from 'clsx'
import styles from './CategoryList.module.scss'
import { MenuItem } from './MenuItem/MenuItem'
import { useRef } from 'react'
import { SubCategories } from './SubCategories/SubCategories'
import { useClickOutside } from '@/app/lib/hooks/useClickOutside'

interface CategoryListProps {
    isOpen: boolean
    className?: string
    categories: CategoryModel[]
    childrenList: CategoryModel[]
    setCategory: (categiry: CategoryModel) => void
    onClose?: () => void
}

export const CategoryList = ({
    isOpen,
    className,
    categories,
    childrenList,
    setCategory,
    onClose
}: CategoryListProps) => {

    const menuRef = useRef<HTMLDivElement>(null)

    useClickOutside(isOpen, menuRef, onClose)
   
    return (
        <div 
            ref={menuRef}
            className={
                clsx(styles.container,{[styles.listPosition]: isOpen}, className) 
                }
        >
            {categories.map((category) => (
                <MenuItem 
                    key={category.id}
                    title={category.name}
                    href={category.systemName}
                    isArrow={!!category.children.length}
                    onClick={() => setCategory(category)}
                    onMouseEnter={() => setCategory(category)
                    }
                />
            ))}
            {
                !!childrenList.length && 
                <SubCategories
                    list={childrenList}
                />
            }
        </div>
    )
}