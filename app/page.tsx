
"use client";

import GptCardProductList from "./(exercises)/ProductList/TaskCardProductList";
import Productlist from "./(exercises)/ProductList/ProductsList";
import Counter from "./(exercises)/w01/useState/Counter";
import NameForm from "./(exercises)/w01/useState/NameForm";
import FormName from "./(exercises)/w01/useState/traningPage";
import styles from "./page.module.css";
import Button from "./src/components/Button/Button";
import ProductCard from "./src/components/ProductCard/ProductCard";
import { products } from "./src/types/basic";
import TaskProductCard from "./(exercises)/w01/GptCard/TaskProductCard";
import TaskCardProductList from "./(exercises)/ProductList/TaskCardProductList";
import Input from "./(exercises)/w02/controls/Input";
import ProductCardlist2025_09_25 from "./(exercises)/ProductList/ProductCardList-25-09-2025";


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
        <div>
          <h1>პროდუქტის გამოტანა</h1>
          <Productlist/>
        </div>

        <div>
          <h3>Figma task:</h3>
         <TaskCardProductList/>
        </div>
        <Input
        label="სახელი"
        required
        hleperText="სახელის შეყვანა აუცილებელია"
        erorr="სახელი არასწორია"
        />

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
      <FormName/>
      <ProductCardlist2025_09_25 />
    </div>
  );
}
