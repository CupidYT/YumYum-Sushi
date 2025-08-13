"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link
            href={`/p/${product.slug}`}
            className="group block rounded-2xl bg-white p-4 shadow-sm hover:shadow-md transition"
            aria-label={`Deschide produsul ${product.name}`}
            >
            <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-neutral-100">
                <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                loading="lazy"
                />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{product.name}</h3>
            <p className="text-orange-500 font-bold">{product.price} MDL</p>
        </Link>
    );
}