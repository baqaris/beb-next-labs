// app\(exercises)\w01\useState\NameForm.tsx
"use client"

import styles from "./NameForm.module.css";
import { useState, useMemo } from "react";

export default function NameForm() {

    const [first, setFirst] = useState("");
    const [last, setlast] = useState("");
    const FullName = useMemo(() =>
        `${first} ${last}`.trim(),
        [first, last]
    )
    function handleClear() {
        setFirst("")
        setlast("")
    }

    return (
        <div className={styles.container}>
            <input className={styles.input} value={first} onChange={e => setFirst(e.target.value)} />
            <input className={styles.input} value={last} onChange={e => setlast(e.target.value)} />
            <p>Full name: {FullName || "-"}</p>
            <button onClick={handleClear} disabled={!first && !last}>გასუფთავევა</button>
        </div>
    );

}