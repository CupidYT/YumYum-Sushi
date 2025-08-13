import CategoryGrid from "../../components/shop/CategoryGrid";
import { CATEGORIES } from "../../data/categories";

export default function ShopPage() {
    return (
        <main>
            <div className="container m-auto">
                <div className="my-6">
                    <h1 className="font-secondary text-5xl font-bold mb-6">Shop</h1>
                    <CategoryGrid categories={CATEGORIES} />
                </div>
            </div>
        </main>
    );
}