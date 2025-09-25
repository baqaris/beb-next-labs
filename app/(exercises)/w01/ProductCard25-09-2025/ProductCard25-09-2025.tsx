// app\(exercises)\w01\ProductCard25-09-2025\ProductCard25-09-2025.tsx


"use client";

import type { Product } from "../../../src/types/types";
import styles from "./ProductCard25-09-2025.module.css";




type ProductCardProps = {
    item: Product;
    onAdd: (p: Product) => void;
    highlight?: boolean;
}

export default function NewProductCard({ item, onAdd, highlight = false }: ProductCardProps) {

    const { title, price, image, rating, isNew, oldPrice, description, soldOut } = item;

    const discountProcent = typeof oldPrice === "number" ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;
    const discount = typeof oldPrice === "number" && oldPrice > price;

    const corectPrice = typeof price === "number" ? price.toFixed(2) : null;

    function getRatingLabel(rating?: number) {
        if (typeof rating !== "number") return "No rating";
        if (rating >= 4.5) return "Excellent";
        if (rating >= 3.5) return "Very good";
        if (rating >= 2.5) return "Good";
        if (rating >= 1.5) return "Average";
        return "Poor";
    }



    return (
        <div className={`${styles.card} ${highlight ? styles.newPrduct : ""} 
        ${soldOut ? styles.soldOut : ""}
        `} >
            <div className={styles.body}>
                {soldOut && <span className={styles.soldOutLabel}>Sold Out</span>}

                <div className={styles.image}>
                    {image && <img src={image} alt={title} className={styles.image} />}
                </div>
                {isNew && <span className={styles.isNew}>New</span>}
                {discountProcent && <span className={styles.discountProcent}> - {discountProcent} %</span>}
                {rating && (
                    <span className={styles.rating} title={getRatingLabel(rating) || undefined}>
                        ⭐ {rating}
                    </span>
                )}
                <div className={styles.descriptionContainer}>
                    {title && <h2 className={title}>{title}</h2>}
                    {description && <p className={styles.description}>{description}</p>}
                    <span className={styles.priceContainer}>
                        {price && <p className={styles.price}>$ {corectPrice}</p>}
                        {discount && <p className={styles.discount}>$ {oldPrice}</p>}
                    </span>
                </div>
                <button className={styles.btn} disabled={soldOut === true} onClick={() => onAdd(item)}>
                    {soldOut ? "Not avalable" : "Add to cart"}
                </button>


            </div>



        </div>
    )
}