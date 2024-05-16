'use client'

import { ChangeEvent } from 'react';
import { SearchIcon } from '../SVGComponents/SearchIcon'
import styles from './SearchField.module.scss'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { SEARCH_FIELD_NAME } from '@/app/lib/constants';

export const SearchField = () => {

    const {replace} = useRouter()
    const path = usePathname()
    const searchParams = useSearchParams();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        const params = new URLSearchParams(searchParams)
        if(value){
            params.set(SEARCH_FIELD_NAME, value)
        }
        else {
            params.delete(SEARCH_FIELD_NAME)
        }
        replace(`${path}?${params.toString()}`)
    }

    return (
        <div className={styles.fieldContainer}>
            <input 
                id='search'
                className={styles.input}
                type="text" 
                autoComplete='off'
                defaultValue={searchParams.get('query')?.toString()}
                placeholder='Пошук за каталогом'
                onChange={handleChange}
            />
            <label 
                htmlFor="search"
                className={styles.label}
            >
                <SearchIcon/>
            </label>
        </div>
    )
}