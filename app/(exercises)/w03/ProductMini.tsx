"use client";

import { useState, useEffect, useRef, useMemo, useDeferredValue } from "react";
import axios from "axios";

type RawProduct = {
    id: number;
    price: number;
    image: string;
    title: string;
    category?: string;
    description?: string;
}


type SortKey = "" | "price_asc" | "price_desc" | "title_asc" | "title_desc";

const URL = "https://fakestoreapi.com/products";

export default function ProductMini() {
    const [data, setData] = useState<RawProduct[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState<SortKey>("");

    const ctrlRef = useRef<AbortController | null>(null);

    function filter(list: RawProduct[], query: string) {
        const s = query.trim().toLowerCase();
        if (!s) return list;
        return list.filter((p) => p.title.toLowerCase().includes(s));
    }


    async function load() {
        ctrlRef.current?.abort();
        const ctrl = new AbortController();
        ctrlRef.current = ctrl;
        try {
            setLoading(true);
            setError(null);
            const res = await axios.get<RawProduct[]>(URL, { signal: ctrl.signal, timeout: 7000 });
            setData(res.data);
        } catch (e: unknown) {
            if (axios.isCancel(e)) return;
            if (axios.isAxiosError(e)) {
                setError(e?.message ?? "Loading is failed");
            } else {
                setError("somthing is wrong")
            }
        } finally {
            setLoading(false);
            if (ctrlRef.current === ctrl) ctrlRef.current = null;
        }
    }


    useEffect(() => {
        load();
        return () => ctrlRef.current?.abort();
    }, []);

    const dSearch = useDeferredValue(search);
    const products = useMemo(() => {
        const list = filter(data, dSearch);
        return [...list].sort((a, b) => {
            switch (sort) {
                case "price_asc": return a.price - b.price;
                case "price_desc": return b.price - a.price;
                case "title_asc": return a.title.localeCompare(b.title);
                case "title_desc": return b.title.localeCompare(a.title);
                case "": return 0;
            }
        })
    }, [data, dSearch, sort]);


    const grouped = useMemo<[string, RawProduct[]][]>(() => {
        const map = new Map<string, RawProduct[]>();
        for (const p of products) {
            const cat = p.category?.trim() ?? "uncategoryzed";
            const list = map.get(cat) ?? [];
            list.push(p);
            map.set(cat, list);
        }

        return Array.from(map.entries());
    }, [products]);


    if (loading) return (
        <div>
            <p>Loaidng...</p>
        </div>
    )

    if (error) return (
        <div>
            <p>Eroor: {error}</p>
            <button onClick={load}>Reload</button>
        </div>
    )

    return (
        <div>
            <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Escape") setSearch("");
                }}
            />
            {search && <button onClick={() => setSearch("")}>Clear</button>}

            <div>
                <select value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
                    <option value="">---</option>
                    <option value="price_asc">Price down</option>
                    <option value="price_desc">Price up</option>
                    <option value="title_asc">A/Z</option>
                    <option value="title_desc">Z/A</option>
                </select>
            </div>

            <div>
                {grouped.map(([category, item]) => (
                    <div key={category} style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
                        <h1>{category}</h1>
                        <ul style={{ display: "flex", flexWrap: "wrap", gap: "15px", alignItems: "center", justifyContent: "center", width: "100%" }}>
                            {item.map((p) => (
                                <li key={p.id} style={{ border: "2px solid #fff", width: "380px", height: "500px", alignItems: "center", justifyContent: "center", padding: "10px", borderRadius: "8px", gap: "5px", }}>
                                    <img src={p.image} alt={p.title} width={280} height={280} loading="lazy" />
                                    <p>{p.title}</p>
                                    <p>{p.description}</p>
                                    <p>$--{p.price.toFixed(2)}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            {!loading && !error && search.trim() && products.length === 0 && (
                <p>ვერაფერი მოიძებნა... "{search}"</p>
            )}
        </div>
    )




}