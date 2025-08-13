import CategoryCard from "./CategoryCard";

type Props = { categories: { slug: string; name: string; image: string }[] };

export default function CategoryGrid({ categories }: Props) {
    return (
        <div className="grid grid-cols-4 gap-4">
            {categories.map((cat) => (
                <CategoryCard key={cat.slug} category={cat} />
            ))}
        </div>
    );
}