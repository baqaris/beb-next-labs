"use client"

import styles from "./profileCard.module.css";

type Person = {
    name: string;
    role: string;
    img: string;
};

const people: Person[] = [

    { name: "Ana", role: "FrontEnd", img: "https://picsum.photos/seed/ana/400/300" },
    { name: "Gio", role: "UI Desinger", img: "https://picsum.photos/seed/gio/400/300" },
    { name: "Nika", role: "Full-Stack", img: "https://picsum.photos/seed/nika/400/300" },
    { name: "Salome", role: "Back-End", img:"https://picsum.photos/seed/salome/400/300" },
    {name: "Gocha", role: "driver", img: "https://picsum.photos/seed/salome/400/300"}

]


export default function Page() {
    return (
        <div>
            <main className={styles.page}>
                <h1 className={styles.title}>Profile card</h1>
                <p className={styles.subtitle}>Responsive ბარათები .hover scale . focus-visible</p>

                <section className={styles.grid} aria-label="Team">
                    {people.map((p) => (
                        <article key={p.name} className={styles.card} tabIndex={0}>
                            <img className={styles.avatar} src={p.img} alt={`${p.name} avatar`} />
                            <h2 className={styles.name}>{p.name}</h2>
                            <p className={styles.role}>{p.role}</p>
                            <button className={styles.btn}>Contact</button>
                        </article>
                    ))}
                </section>
               
            </main>

        </div>

    );
}