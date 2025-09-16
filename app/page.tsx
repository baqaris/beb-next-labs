
"use client";
import Counter from "./(exercises)/w01/useState/Counter";
import NameForm from "./(exercises)/w01/useState/NameForm";
import styles from "./page.module.css";
import Button from "./src/components/Button/Button";
import ProductCard from "./src/components/ProductCard/ProductCard";
import { products } from "./src/types/basic";



export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        {products.map((p) => (
          <ProductCard key={p.id} item={p} />
        ))}
        <div className={styles.Counter}>
          <Counter/>
        </div>
        <NameForm/>

      </main>
      <footer className={styles.footer}>
        <Button size="sm">Small</Button>
         <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        {/**/}
        <Button disabled> Disabled</Button>

        <Button type="submit" variant="primary">Submit</Button>

        <Button onClick={() => alert("დაწოლა შესრულებულია")}>დაწოლა</Button>
       
        <Button fullWidth variant="primary">Full width</Button>
      </footer>
    </div>
  );
}
