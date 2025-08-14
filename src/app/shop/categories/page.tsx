import CategoryGrid from "@/components/shop/CategoryGrid";
import { CATEGORIES } from "@/data/categories";

export const metadata = {
    title: "Categorii | Shop",
};

export default function CategoriesPage() {
    return (
        <main className="px-4 md:px-8 lg:px-12 py-8 bg-white">
            <h1 className="text-2xl md:text-3xl font-bold mb-6">Categorii</h1>
            <CategoryGrid categories={CATEGORIES} />
        </main>
    );
}
