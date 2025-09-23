// app\(exercises)\w01\product\ProductCard.tsx

"use client";

import styles from "./ProductCard.module.css";
import { Product } from "@/app/src/types/types";

type Props = {
    item: Product;
    onAdd?: (p: Product) => void;
    highlight?: boolean;
};

function getRaiting(rating: number) {
    if (rating >= 4.5) return "Exelent";
    if (rating >= 4.0) return "Good";
    if (rating >= 3.0) return "Avarage"
}


function formatPrice(n: number) {
    return n.toFixed(2);

}


export default function ProductCard({ item, onAdd, highlight = false }: Props) {

    const { title, price, oldPrice, rating, isNew, image, soldOut } = item; 

    const discount = typeof oldPrice === "number" && oldPrice > price ? Math.floor(((oldPrice - price) / oldPrice) * 100) : 0;
    


    return (
        <article className={`${styles.card} ${highlight ? styles.highlight : ""}`}>
            <div className={styles.thumb}> 
                <img src={image} alt={title}/>
                {isNew && <span className={styles.badgeNew}>new</span>}
                {soldOut && <span className={styles.badgeSold}>Sold out</span>}
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.meta}>
                    <span className={styles.price}>{formatPrice(price)}</span>
                    {typeof oldPrice === "number" && oldPrice > price && (
                        <>
                        <s className={styles.oldPrice}>{formatPrice(oldPrice)}</s>
                        <span className={styles.discount}> -- {discount}</span>
                        </>
                    )}

                    {typeof rating === "number" && Number.isFinite(rating) && (
                        <span className={styles.rating} title={getRaiting(rating)}>
                           ⭐ {rating.toFixed(1)}
                        </span>
                    )}
                </div>
                <button className={styles.btn}
                onClick={()=>onAdd?.(item)}
                disabled={soldOut === true}
                >
                    {soldOut ? "არ არის მარაგში" : "დაამატე"}
                </button>
            </div>
        </article>
    );
}