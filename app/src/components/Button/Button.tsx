

import type { ReactNode, MouseEventHandler } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    children: ReactNode;
    variant?: "primary" | "ghost";
    size?: "md" | "sm" | "lg";
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: MouseEventHandler<HTMLButtonElement>;
    fullWidth?: boolean;
    className?: string;
}

export default function Button(
    { children,
        variant = "ghost",
        size = "md",
        disabled = false,
        onClick,
        fullWidth = false,
        type = "button",
        className
    }: ButtonProps) {

    const cls = [styles.btn,
    styles[variant],
    styles[size],
    fullWidth && styles.full,
    disabled && styles.disabled,
        className,
    ].filter(Boolean).join(" ");

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={cls}

        >
            {children}
        </button>
    )

}