// app\(exercises)\w01\product\ProductCard.tsx

"use client";

import styles from "./ProductCard.module.css";
import { Product } from "@/app/src/types/types";


type ProductCardProps = {
    item: Product;
    onAdd?: (p: Product) => void; // optional callback განმარტება მომეცი რატო ჩასვი p: Product ???
    highlight?: boolean; //  // optional visual flag ეს განმარტე

}

export default function ProductCard({ item, onAdd, highlight = false }: ProductCardProps) {
    const { title, price, rating, isNew } = item; // ეს მოქმედება რას შრრება რატო აღწერე ისევ ხელახლა app\src\types\types.ts-დან
    return (
        <article className={`${styles.card} ${highlight ? styles.highlight : ""}`}>
            <div className={styles.thumb}>
                <img src={item.image} alt={title} /> {/* <img src={image} alt={title} /> აქ image ერორს მირტყამდა Cannot find name 'image'. Did you mean 'Image'?ts(2552)
lib.dom.d.ts(38389, 13): 'Image' is declared here.
any  და ჩავამატე ჩემი ინტუიცით  {item.image}*/}

                {isNew && <span className={styles.badge}>New</span>}
            </div>
            <div className={styles.body}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.meta}>
                    <span className={styles.price}>{price.toFixed(2) /*რატო ხმარობ .toFixed(2) ეგეც ამიღწერე */}</span>
                    {typeof rating === "number" && (
                        <span className={styles.rating}>⭐ {price.toFixed(1)} </span>

                    )}
                </div>
                {onAdd && (
                    <button className={styles.btn} onClick={() => onAdd(item) /* ასევე ამიღწერე მნიშვნელობა ონქლიკზე რატოა onAdd(item)*/}>
                        დამატება
                    </button>
                )}
            </div>
        </article>
    );

}