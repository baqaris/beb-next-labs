// app\(exercises)\w02\controls\Input.tsx

"use client";

import styles from "./Input.module.css";
import { useState } from "react";


type InputProps = {
    label: string;
    required?: boolean;
    hleperText?: string;
    erorr?: string;
}


export default function Input({ label, required, hleperText, erorr }: InputProps) {

    const [value, setValue] = useState("");

    return (
        <div className={styles.container}>
            <label>
                {label} {required && "*"}
            </label>
            <input 
            value={value}
            onChange={(e) => setValue(e.target.value)}  
            aria-invalid={!!erorr}
            aria-describedby={hleperText ? `${label} - helper` : undefined}
            required={required} 
            />
            {hleperText && <p id={`${label}-helper`}>{hleperText}</p>}
            {erorr && <span className={styles.error}>{erorr}</span>}
            {value && <p>შენ დაწერე: {value}</p>}
        </div>
    );

}