import { useSearchParams } from "next/navigation"
import styles from './SearchList.module.scss'
import { useEffect, useState } from "react"
import { getProducts } from "@/app/lib/api/productsApi"
import { ProductModel } from "@/app/lib/models/entities/product.model"
import { SEARCH_FIELD_NAME } from "@/app/lib/constants"
import clsx from "clsx"


export const SearchList = () => {

    const searchParams = useSearchParams()

    const [open, setOpen] = useState<boolean>(false)
    const [products, setProducts] = useState<ProductModel[]>()

    
    
    useEffect(() => {
        const title = searchParams.get(SEARCH_FIELD_NAME)
        title && fetchProducts(title)
        setOpen && setOpen(searchParams.has(SEARCH_FIELD_NAME))
    }, [searchParams.get(SEARCH_FIELD_NAME)])

    const fetchProducts = async (title: string) => {
        const products = await getProducts({filter: {like: title}, page: 0})
        setProducts(products)
    }

    return (
        <div className={clsx(styles.list, {[styles.close]: !open}) }>{
            products?.length ? 
            products.map(({id, title})=> (
                <div key={id}>{id} {title}</div>
            ))
            :
            <div>За данним запитом товар відсутній</div>
        }</div>
    )
}