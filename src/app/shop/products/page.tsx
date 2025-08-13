import ProductCard from "@/components/shop/ProductCard";
import { PRODUCTS } from "@/data/products";

export default function ProductsPage() {
    return (
        <main className="px-4 md:px-8 lg:px-12 py-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Toate produsele</h1>

        {PRODUCTS.length === 0 ? (
            <p className="text-neutral-500">Nu există produse disponibile momentan.</p>
        ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
                <ProductCard key={product.slug} product={product} />
            ))}
            </div>
        )}
        </main>
    );
}