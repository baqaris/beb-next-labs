// app\(exercises)\w01\GptCard\TaskProductCard.tsx


import styles from "./TaskProductCard.module.css";
import type { TaskCardType } from "@/app/src/types/taskCardType";

type taskCardProps = {
    item: TaskCardType;
    onAdd?: (p: TaskCardType) => void;
    highlight?: boolean;

}

export default function TaskProductCard({ item, onAdd, highlight = false }: taskCardProps) {

    const { title, image, price, oldPrice, isNew, rating, soldOut, description } = item;

    const discount = typeof oldPrice === "number" && oldPrice - price > 0 ? Math.round(((oldPrice - price) / oldPrice) * 100) : null;
    const numberOfDiscount = typeof oldPrice === "number" && oldPrice - price;
   
    function getRating(rating?: number) {
        if (!rating) return "No rating";
        if (rating >= 4.5) return "Excellent";
        if (rating >= 3.5) return "Good";
        if (rating >= 2.5) return "Average";
        return "bed";
    }


    return (
        <div className={`${styles.Card} ${highlight ? styles.NewProduct : ""}`}>

            <div className={styles.body}>
                {isNew && <span className={styles.new}>New</span>}
                {soldOut && <span className={styles.soldOut}>Sold Out</span>}
                <div className={styles.imgContainer}>
                    {image && <img src={image} alt={title} className={styles.image} />}

                </div>
                <div className={styles.descriptionContainer}>
                    <h2 className={styles.title}>{title}</h2>
                    <span className={styles.ratingDiscount}>
                        <p className={styles.rating} title={getRating(rating)}> ⭐ {rating?.toFixed(2)}</p>
                        {discount && <p className={styles.discount}>-{discount}%</p>}
                    </span>
                    <span className={styles.priceOldPrice}>
                        {price && <p className={styles.price}>$ {price.toFixed(2)}</p>}
                        {numberOfDiscount && <p className={styles.numberOfDiscountCont}>${numberOfDiscount}</p>}
                    </span>
                </div>
                <button className={styles.btn}
                    onClick={() => onAdd?.(item)}
                    disabled={soldOut === true}
                >


                    {soldOut ? " not avalable" : "Add to cart"}
                </button>
            </div>
        </div>
    );
}



