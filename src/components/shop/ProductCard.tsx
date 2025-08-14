"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import AddToCartButton from "./AddToCartButton/AddToCartButton";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link
            href={`/p/${product.slug}`}
            className="group block rounded-2xl bg-bg transition"
        >
            <div className="relative w-full aspect-square">
                <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
                />
            </div>
            <div className="px-6 pb-6">
                <h3 className="text-xl mb-2">{product.name}</h3>
                <h4 className="text-gray-500">{product.info}</h4>
                <div className="mt-6 flex justify-between items-center">
                    <p className="font-bold text-xl">{product.price} MDL</p>
                    <AddToCartButton />
                </div>
            </div>
        </Link>
    );
}