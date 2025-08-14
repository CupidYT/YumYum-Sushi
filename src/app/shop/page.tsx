import CategoryGrid from "../../components/shop/CategoryGrid";
import { CATEGORIES } from "../../data/categories";

export default function ShopPage() {
    return (
        <main className="bg-bg">
            <div className="container m-auto">
                <div className="pt-6 pb-17">
                    <h1 className="font-secondary text-5xl font-bold mb-6">Categorii</h1>
                    <CategoryGrid categories={CATEGORIES} />
                </div>
            </div>
        </main>
    );
}