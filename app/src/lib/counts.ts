// app\src\lib\counts.ts


import type { Product, Counts } from "../types/types";


export function getCount(map: Counts, id: Product["id"]): number {
    return map[id] ?? 0;
}


export function addToCart(map: Counts, p: Product): Counts {
    if (p.soldOut) return map;
    const next = getCount(map, p.id) + 1;
    return { ...map, [p.id]: next }
}


export function removeFromCartOne(map: Counts, p: Product): Counts {
    const curr = getCount(map, p.id);
    if (curr <= 1) {
        const { [p.id]: trash, ...rest } = map;
        return rest;
    }
    return { ...map, [p.id]: curr - 1 };
}


export function clearFromCart(map: Counts, id: Product["id"]): Counts {
    const copy = { ...map };
    delete copy[id];
    return copy;
}


export function clearFullCart():Counts{
    return {};
}

export function getTolatlPrice(map: Counts, products: Product[]): number {
    let total = 0;

    for (const p of products) {
        if (p.soldOut) continue;
        const qty = map[p.id] ?? 0;
        total += p.price * qty;
    }
    return total;
}




// reduce გამოყენება
export function getTotalPrice(map: Counts, product: Product[]): number {
    return product.reduce((sum, p) =>
        sum + (p.soldOut ? 0 : p.price * (map[p.id] ?? 0)), 0)
}


