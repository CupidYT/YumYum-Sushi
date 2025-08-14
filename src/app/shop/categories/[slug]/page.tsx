import { notFound } from "next/navigation";
import { CATEGORIES } from "@/data/categories";
import { getProductsByCategorySlug } from "@/data/products";
import ProductCard from "@/components/shop/ProductCard";

export async function generateStaticParams() {
    return CATEGORIES.map(c => ({ slug: c.slug }));
}

export default async function CategoryProductsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const category = CATEGORIES.find(c => c.slug === slug);
    if (!category) return notFound();

    const products = getProductsByCategorySlug(slug);

    return (
        <main className="px-4 md:px-8 lg:px-12 py-8">
            <div className="container m-auto">
                <h1 className="font-secondary text-5xl font-bold mb-6">{category.name}</h1>

                {products.length === 0 ? (
                    <p className="text-neutral-500">Momentan nu sunt produse în această categorie.</p>
                ) : (
                    <div className="grid gap-6 grid-cols-4">
                    {products.map(p => <ProductCard key={p.slug} product={p} />)}
                    </div>
                )}
            </div>
        </main>
    );
}