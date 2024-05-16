import { ProductModel } from '@/app/lib/models/entities/product.model'
import { CardButton } from '../../CardButton/CardButton'
import Image from 'next/image'
import { BuyButton } from '../../BuyButton/BuyButton'
import styles from './ProductCard.module.scss'

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
                <CardButton icon='chart'/>
                <CardButton icon='heart'/>
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
            <BuyButton
                className={styles.buyButton}
            />
        </div>
    )
}