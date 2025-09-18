// app\(exercises)\w01\useState\page.tsx

"use client"

import { useState } from "react"
import styles from "./Counter.module.css";

export default function Counter() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount((c) => c + 1);
        setCount((c) => c + 1);
        setCount((c) => c + 1);
    }
    return (
        <div className={styles.Container}>
            <p className={styles.Counter}>{count}</p>
            <button className={styles.button} onClick={() => setCount(c => c + 1)}>+1</button>
            <button className={styles.button} onClick={increase}>+3(functional)</button>
            <button className={styles.button} onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}