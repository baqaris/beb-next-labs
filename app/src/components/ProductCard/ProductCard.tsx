import type { Product } from "../../types/basic";
import styles from "./ProductCard.module.css";

export default function ProductCard({ item }: { item: Product }) {
    return (
        <div
         className={styles.wrap}>
      
        <article className={styles.card}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.meta}>{item.category} - {item.price}</p>
            <p className={styles.desc}>{item.description}</p>
            <small className={styles.stock}>{item.inStock ? "in Stock" : "Out of stock"}</small>
        </article>
          </div>
    );
}