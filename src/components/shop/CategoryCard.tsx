"use client";

import Image from "next/image";
import Link from "next/link";

type Props = { category: { slug: string; name: string; image: string } };

export default function CategoryCard({ category }: Props) {
    return (
        <Link
            href={`/c/${category.slug}`}
            className="relative flex flex-col h-full rounded-2xl bg-white p-8 overflow-hidden hover:overflow-visible transition-all duration-500 hover:z-20"
        >
            <h3 className="text-main font-bold mb-3 text-xl">{category.name}</h3>
            <div className="relative aspect-[16/9]">
                <div className="absolute bottom-[-70px] right-[-100px] aspect-[16/9] h-[200px] transition-transform duration-500 hover:scale-105 hover:index-10">
                    <Image
                        src={category.image}
                        alt={category.name}
                        className="object-contain"
                        loading="lazy"
                        fill
                    />
                </div>
            </div>
        </Link>
    );
}