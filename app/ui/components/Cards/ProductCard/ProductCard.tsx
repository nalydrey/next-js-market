import { ProductModel } from '@/app/lib/models/entities/product.model'
import Image from 'next/image'
import styles from './ProductCard.module.scss'
import { IconButton } from '../../Buttons/IconButton/IconButton'

interface ProductCardProps {
    product: ProductModel
}

export const ProductCard = ({
    product
}: ProductCardProps) => {

    const {title, priceHistory, status, images} = product

    return (
        <div className={styles.card}>
            <header className={styles.header}>
                <IconButton  
                    icon='chart'
                    buttonType='card'
                />
                <IconButton  
                    icon='heart'
                    buttonType='card'
                />
            </header>
            <div className={styles.img}>
                {
                    images.length && 
                    <Image
                        src={images[0].fileName}
                        alt={images[0].name}
                        fill = {true}
                        style={{objectFit: 'contain'}}
                    />
                }
            </div>
            <div className={styles.pagination}>
                {
                    images.map(({id}) => (
                        <button key={id} className={styles.page}/>
                    ))
                }
                
            </div>
            <div className={styles.gridContainer}>
                <h2 className={styles.title}>
                    {title}
                </h2>
                <span className={styles.price}>
                    {priceHistory[0].value}$
                </span>
                {
                    priceHistory[1] &&
                    <span className={styles.oldPrice}>
                        {priceHistory[1].value}$
                    </span>
                }
                <span className={styles.status}>
                    {status}
                </span>
            </div>
            <IconButton 
                buttonType='buy'
                icon='basket'
                className={styles.buyButton}
            />
        </div>
    )
}