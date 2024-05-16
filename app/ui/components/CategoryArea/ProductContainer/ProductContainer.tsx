import { getProducts } from "@/app/lib/api/productsApi"
import { ProductCard } from "../../Cards/ProductCard/ProductCard"

interface ProductContainerProps {
    categoryId: number
} 

export const ProductContainer = async ({
    categoryId
}: ProductContainerProps) => {

    const products = await getProducts({page: 0, filter: {category: {id: categoryId}}, limit: 2})
   
    return (
        <>
            {products.map((product)=> (
                <ProductCard
                    key={product.id}
                    product={product}
                />
            ))}
        </>
    )
}